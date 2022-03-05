// Function responsible for taking our array of team members and creating html for each

const generateTeamMembersHtml = (teamMembers) => {
  //   console.log("xxxx", teamMembers);
  //   debugger;
};
// Function which creates cards using HTML, for teamMembers
const formatData = (data) => {
  return data.map((employee) => {
    let x = "Boss";
    let y = employee.officeNumber;
    if (employee.title == "intern") {
      console.log("employee", employee);
      x = "school name";
      y = employee.school;
    }
    if (employee.title == "engineer") {
      x = "Github Account";
      y = employee.github;
    }
    return ` <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${employee.name}</h3>
                    <h4>${employee.title}</h4><i class="material-icons">content_paste</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${employee.id}</p>
                    <p class="email">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                    <p class="office">${x}: ${y}</p>
                </div>
            </div>
        </div> `;
  });
};

// Function for creating basic HTML and exporting teamMembers
module.exports = (teamMembers) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
</head>
<body>
    ${formatData(teamMembers)}
</body>
</html>
    `;
};
