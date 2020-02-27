const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

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
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    
  ]);
}

promptUser()
  .then(function(answers) {
    const readmetext= JSON.stringify(answers);
   
return writeFileAsync("README.md", readmetext);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });



