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
        manager.title = "manager";
        console.log(Manager);
        teamMembers.push(manager);
        console.log(manager);
        chooseNextTeamMember();
      });

    console.log("Adding Manager....");
  }

  function addEngineer() {

    inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of this engineer?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the ID of this engineer?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineers email address?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the Github address of this engineer?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      console.log(engineer);
      engineer.title = "engineer";

      teamMembers.push(engineer);
      chooseNextTeamMember();
    });

    console.log("Adding Engineer....");
  }

  function addIntern() {
    inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the name of this intern?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the ID of this intern?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the interns email address?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the name of the school?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      intern.title = "intern";
      console.log(intern);
      teamMembers.push(intern);
      chooseNextTeamMember();
    });
    console.log("Adding Intern.....");
  }

  function chooseNextTeamMember() {
    console.log("Asking Manager what he/she wants to do next...");

    inquirer
      .prompt([
        {
          type: "list",
          name: "chosenEmployeeToAdd",
          message: "Choose which team member to add next... ",
          choices: ["Add Engineer", "Add Intern", "Finish creating team"],
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
