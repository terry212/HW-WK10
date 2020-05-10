// TODO: Write code to define and export the Employee class
// Employee class created where name, id, and email parameters are required
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Employee name function to return the name of the employee
    getName() {
        return this.name;
    }
    // Employee ID function to return the ID of the employee
    getId() {
        return this.id;
    }
    // Employee email function to return the email of the employee
    getEmail() {
        return this.email;
    }
    // Employee role function to return the role of the employee
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;