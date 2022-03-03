// Function responsible for taking our array of team members and creating html for each
const generateTeamMembersHtml = (teamMembers) => {

    const teamString = ''; 

  //function for generating html if manager
  const generateManager = (manager) => {
    //a string literal returned with the manager data

    const managerHTML = ` 
    
    `
    // append your new string to the teamString on line 4

  };

  //function for generating html if engineer
  const generateEngineer = (engineer) => {
    //a string literal returned with the engineer data
  };

  //function for generating html if intern
  const generateIntern = (intern) => {
    //a string literal returned with the intern data
  };


  // loop over the array of team members

  // if team member manager -> generate Manager

  //member = intern => generateIntern

  //member = engineer => generate engineer




  return teamString; 
};

// Function which creates basic html and calls generateTeamMembersHtml function

module.exports = (teamMembers) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${generateTeamMembersHtml(teamMembers)}
</body>
</html>
    `;
};
