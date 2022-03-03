const Manager = require("./Lib/Manager");
const Intern = require("./Lib/Intern");
const Engineer = require("./Lib/Engineer");

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const renderTeamHtml = require("./src/generateHTML")

//Creaating path string for the output folder
const OUT_DIRECTORY = path.resolve(__dirname, "output")
//Setting path for the created file
const outputPath = path.join(OUT_DIRECTORY, 'team.html')

const teamMembers = [];

function init() {
  console.log("Application Running ....");

  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the name of this teams manager?",
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the ID of this teams manager?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the Email of this teams manager?",
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the Office Number of this teams manager?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        console.log(manager);
        teamMembers.push(manager);
        chooseNextTeamMember();
      });

    console.log("Adding Manager....");
  }

  function addEngineer() {
    console.log("Adding Engineer....");
  }

  function addIntern() {
    console.log("Adding Intern.....");
  }

  function chooseNextTeamMember() {
    console.log("Asking Manager what he/she wants to do next...");

    inquirer
      .prompt([
        {
          type: "list",
          name: "chosenEmployeeToAdd",
          message: "Choose chich team member to add next... ",
          choices: ["Add Engineer", "Add Intern", "Finnish creating team"],
        },
      ])
      .then((choice) => {
        console.log(choice.chosenEmployeeToAdd);

        if (choice.chosenEmployeeToAdd === "Add Engineer") {
          addEngineer();
        } else if (choice.chosenEmployeeToAdd === "Add Intern") {
          addIntern();
        } else {
          createTeamHTML();
        }
      });
  }

  function createTeamHTML() {
    console.log("Creating HTML.......");

    fs.writeFileSync(outputPath, renderTeamHtml(teamMembers))
  }

  addManager();
}

init();
