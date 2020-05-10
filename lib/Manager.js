// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Manager class created where name, id, email, and officeNumber name parameters are required
function Manager (name,id,email,officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
}
// Manager name function to return the name of the Manager
Manager.prototype.getName = function() {
    return this.name;
}
// Manager ID function to return the ID of the Manager
Manager.prototype.getId = function() {
    return this.id;
}
// Manager email function to return the email of the Manager
Manager.prototype.getEmail = function() {
    return this.email;
}
// Manager office Number name function to return the office Number name of the Manager
Manager.prototype.getOfficeNumber = function() {
    return this.officeNumber;
}
// Manager role function to return the role of the Manager
Manager.prototype.getRole = function() {
    return "Manager";
}

module.exports = Manager;