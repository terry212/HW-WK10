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

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// function devTeamPrompt() {
    return inquirer.prompt([
        {
            message: "What is the name of the Employee?",
            type: "input",
            name: "name",
            validate: function validateName(name) {
                return name !== '' || "Employee name should not be blank!";
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
            when: function (answers) {if (answers.role === "Manager") return true;},
            message: "What is the office number of the Manager?",
            type: "input",
            name: "officeNumber",
            validate: function validateID(officeNumber) {
                var reg = /^\d+$/;
                return reg.test(officeNumber) || "Office number should be a number!";
            }
        },
        {
            when: function (answers) {if (answers.role === "Engineer") return true;},
            message: "What is the Engineer Github username?",
            type: "input",
            name: "github",
            validate: function validateName(name) {
                return name !== '';
            }
        },
        {
            when: function (answers) {if (answers.role === "Intern") return true;},
            message: "What is the name of the school the Intern attends?",
            type: "input",
            name: "school",
            validate: function validateName(name) {
                return name !== '';
            }
        }
    ]);
// }

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```