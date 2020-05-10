// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// Engineer class created
// New parameter of github is added along with Employee inherited constructors
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    // Engineer github name function to return the github name of the Engineer
    getGithub() {
        return this.github;
    }
    // Engineer role function to return the role of the Engineer
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;