// Gets class Employee from Employee file path

const Employee = require("./Employee");

// Extends Manager from Employee class and extracts information using constructor function
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

}

module.exports = Manager;