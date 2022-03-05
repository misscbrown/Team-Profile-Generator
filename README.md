# Team-Profile-Generator
An app that generates a HTML file for team members based on input

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

This application provides a team profile that can be viewed on a mobile, tablet or desktop. It dynamically creates an HTML file from the terminal, featuring information that is put in by the user.

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

Once the html has been populated and displayed live on the browser, the email address can be clicked on, taking you straight through to the default email program on your device. 

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

The github shows up on the live server but does not click through to the github. I will incorporate this at a later date. I was able to get the email address working fine, but the github needed a bit more work and I simply ran out of time.

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

node index.js starts the application and there are messages in the console that let you know that things are working properly.

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

Once the information for the manager has been put into the application, then a menu is presented that gives the user the option to add an engineer or an intern. 

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

Once the information for the engineer has been put into the application, then a menu is presented that gives teh user the option to add another engineer or an intern. The user can also finish building the team.

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

Once the information for the intern (name, ID, email and school) has been input into the application, the user is offered the option to add more interns or finish building the team.

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

Once the user decides to finish building the team, the HTML is generated once the 'finish building the team' option has been selected. The HTML page has already been styled, with a layout and colours that matches the company brand. 

The user gets a nice overview of each team member, displayed in the console, once the team member has been created. This way, the user can check for any errors in input data, that they may have overlooked. This is a finishing touch that I thought would be helpful to have. 

To build further, the application could generate HTML using the companys branding colours and logo, have a structure suitable for different industries and load information directly from a companys database.

This application has been built using Node JS, Javascript, HTML and CSS. 

Github link: https://github.com/misscbrown/Team-Profile-Generator
Contact: djmisscbrown@hotmail.com

Screenshots
![screenshot](/Images/screenshot1.png)
![screenshot](/Images/screenshot2.png)