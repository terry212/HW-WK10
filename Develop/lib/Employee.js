// TODO: Write code to define and export the Employee class
// Employee class created where name, id, and email parameters are required
function Employee (name,id,email) {
    this.name = name;
    this.id = id;
    this.email = email;
}
// Employee name function to return the name of the employee
Employee.prototype.getName = function() {
    return this.name;
}
// Employee ID function to return the ID of the employee
Employee.prototype.getId = function() {
    return this.id;
}
// Employee email function to return the email of the employee
Employee.prototype.getEmail = function() {
    return this.email;
}
// Employee role function to return the role of the employee
Employee.prototype.getRole = function() {
    return "Employee";
}

module.exports = Employee;