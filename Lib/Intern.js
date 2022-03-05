// gets class Employee from Employee file path

const Employee = require("./Employee");

// Extends Intern from Employee and allows extraction of information using a constructor function
class Intern extends Employee {
    constructor (name, id, email, school, intern) {
        super (name, id, email);
        this.school = school;
        this.title = intern;
    }

    getGithub() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

}

module.exports = Intern;