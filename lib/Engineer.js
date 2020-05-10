// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Engineer class created where name, id, email, and github name parameters are required
function Engineer (name,id,email,github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
}
// Engineer name function to return the name of the Engineer
Engineer.prototype.getName = function() {
    return this.name;
}
// Engineer ID function to return the ID of the Engineer
Engineer.prototype.getId = function() {
    return this.id;
}
// Engineer email function to return the email of the Engineer
Engineer.prototype.getEmail = function() {
    return this.email;
}
// Engineer github name function to return the github name of the Engineer
Engineer.prototype.getGithub = function() {
    return this.github;
}
// Engineer role function to return the role of the Engineer
Engineer.prototype.getRole = function() {
    return "Engineer";
}

module.exports = Engineer;