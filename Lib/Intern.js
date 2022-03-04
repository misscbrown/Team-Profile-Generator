const Employee = require("./Employee");


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