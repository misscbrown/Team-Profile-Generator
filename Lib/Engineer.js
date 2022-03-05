// gets the class Employee from the Employee file path

const Employee = require("./Employee");

// extends Engineer from Employee and allows extraction of information using constructor function
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer;