// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// Intern class created
// New parameter of github is added along with Employee inherited constructors
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    // Intern school name function to return the school name of the Intern
    getSchool() {
        return this.school;
    }
    // Intern role function to return the role of the Intern
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;