// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Intern class created where name, id, email, and school name parameters are required
function Intern (name,id,email,school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
}
// Intern name function to return the name of the Intern
Intern.prototype.getName = function() {
    return this.name;
}
// Intern ID function to return the ID of the Intern
Intern.prototype.getId = function() {
    return this.id;
}
// Intern email function to return the email of the Intern
Intern.prototype.getEmail = function() {
    return this.email;
}
// Intern school name function to return the school name of the Intern
Intern.prototype.getSchool = function() {
    return this.school;
}
// Intern role function to return the role of the Intern
Intern.prototype.getRole = function() {
    return "Intern";
}

module.exports = Intern;