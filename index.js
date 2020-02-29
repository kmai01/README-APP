const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is title of the project?"
    },
    {
      type: "input",
      name: "description",
      message: "Enter Description of the Project?"
    },
    {
      type: "input",
      name: "installation",
      message: "Enter steps for installation?"
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage of the project?"
    },
    {
        type: "input",
        name: "license",
        message: "Enter license info"
      },
      {
        type: "input",
        name: "contributing",
        message: "Who is the contributor"
      },
      {
        type: "input",
        name: "test",
        message: "Enter the testing method"
      },
    
    
    
  ]);
  
}




promptUser()
  .then(function(answers) {
   console.log(answers.title);
  return writeFileAsync("README.md", "# "+answers.title+"\n"+"## Description"+"\n"+ "*"+answers.description+"\n");
 
   })
  .then(function() {
    console.log("Successfully wrote to Readme.md");
  })
  .catch(function(err) {
    console.log(err);
  });

  


  

  



