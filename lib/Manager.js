// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// Manager class created 
// New parameter of Office Number is added along with Employee inherited constructors
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    // Manager office Number name function to return the office Number name of the Manager
    getOfficeNumber() {
        return this.officeNumber;
    }
    // Manager role function to return the role of the Manager
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;