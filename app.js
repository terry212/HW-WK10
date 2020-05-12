const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Joi = require("@hapi/joi");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Validation Code

// Gather information about the development team members
function devTeamPrompt() {
    return inquirer.prompt([
        {
            message: "What is the name of the Employee?",
            type: "input",
            name: "name",
            validate: function validateName(eName) {
                return eName !== '' || "Employee name should not be blank!";
            }
        },
        {
            message: "What is the ID of the Employee?",
            type: "input",
            name: "id",
            validate: function validateID(id) {
                var reg = /^\d+$/;
                return reg.test(id) || "Employee ID should be a number!";
            }
        },
        {
            message: "What is the email of the Employee?",
            type: "input",
            name: "email"
        },
        {
            type: "list",
            message: "What is the role of Employee you would like to add?",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ],
            default: 0
        },
        {
            when: function (answers) { if (answers.role === "Manager") return true; },
            message: "What is the office number of the Manager?",
            type: "input",
            name: "officeNumber",
            validate: function validateID(officeNumber) {
                var reg = /^\d+$/;
                return reg.test(officeNumber) || "Office number should be a number!";
            }
        },
        {
            when: function (answers) { if (answers.role === "Engineer") return true; },
            message: "What is the Engineer Github username?",
            type: "input",
            name: "github",
            validate: function validateName(githubName) {
                return githubName !== '' || `Employee's Github username should not be blank!`;
            }
        },
        {
            when: function (answers) { if (answers.role === "Intern") return true; },
            message: "What is the name of the school the Intern attends?",
            type: "input",
            name: "school",
            validate: function validateName(schoolName) {
                return schoolName !== '' || `Employee's school name should not be blank!`;
            }
        },
        {
            message: "Would you like to add another member?",
            type: "confirm",
            name: "addMember"
        }
    ]);
}

async function init() {
    console.log(`
    ********************************************************************************************************
        Welcome to the "Team Generator", helping you create a webpage with your team's basic informaiton
    ********************************************************************************************************

    Provide details of each team member one at a time.

    Let's get started!
    
    `);
    try {
        // start with blank array of employees and gather info about the employees
        const myEmployees = [];
        // restart prompt until user does not want to add members
        do {
            var answers = await devTeamPrompt();
            myEmployees.push(answers);
        } while (answers.addMember);
        // analyze gathered data to create proper class, cases are based on list options
        const devTeam = myEmployees.map(function (teamEmployee) {
            switch (teamEmployee.role) {
                case "Manager":
                    return new Manager(teamEmployee.name, teamEmployee.id, teamEmployee.email, teamEmployee.officeNumber);
                case "Engineer":
                    return new Engineer(teamEmployee.name, teamEmployee.id, teamEmployee.email, teamEmployee.github);
                case "Intern":
                    return new Intern(teamEmployee.name, teamEmployee.id, teamEmployee.email, teamEmployee.school);
            }
        });
        // create the directory if it does exist or not
        function generateTeam(info) {
            fs.access(OUTPUT_DIR, fs.constants.F_OK, (err) => {
                console.log(`
                ${OUTPUT_DIR} ${err ? 'does not exist' : 'exists'}
                The directory will be created for you shortly!
                `);
            });
            fs.mkdir(OUTPUT_DIR, { recursive: true }, (err) => {
                if (err) throw err;
            });
            fs.writeFile(outputPath, info, (err) => {
                if (err) throw err;
            });
        }
        // render the dev team and write it to the proper path
        const html = await render(devTeam);
        generateTeam(html);
    } catch (err) {
        console.log(err);
    }
}

init();