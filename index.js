const Manager = require('./Lib/Manager')

const inquirer = require('inquirer')
const fs = require("fs")
const path = require("path")

function init(){
    console.log('Application Running ....')

    function addManager(){
        console.log("Adding Manager....")
    }

    function  addEngineer(){
        console.log('Adding Engineer....')
    }

    function addIntern(){

        console.log('Adding Intern.....')
    }

    function chooseNextTeamMember(){
        console.log('Asking Manager what he/she wants to do next...')
    }

    function createTeamHTML(){
        console.log('Creating HTML.......')
    }

    addManager();

}

init()