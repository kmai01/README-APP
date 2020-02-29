const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

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

      {
      type: "input",
      name: "username",
      message: "Enter your GitHub username:"
      },
      
    
    
    
  ]);
  
}


promptUser()
  .then(function(answers) {
   console.log(answers.title);
   console.log(answers.username);
   writeFileAsync("README.md", "# "+answers.title+"\n"+"## Description"+"\n"+answers.description+"\n"+"## Installation" +"\n"+ answers.installation
                        +"\n"+ "## Usage"+ "\n"+ + answers.usage + "\n"+"## License" + "\n"+ answers.license +"\n"+"## Contributing" + "\n"+ answers.contributing +"\n"
                        +"## Testing" + "\n"+answers.test +"\n");
                        return answers
   

   })
  .then(function(answers) {
    console.log("Successfully wrote to Readme.md");
    return answers
  })
  .catch(function(err) {
    console.log(err);
  })
  .then(function(answers) {
    console.log(answers)
    
    var ausername=answers.username
    console.log(ausername)
    
    const queryUrl = `https://api.github.com/users/${ausername}`;

    axios.get(queryUrl).then(function(res) {
        console.log(res)
        console.log(res.data.avatar_url)
        console.log(res.data.email)
      
       var avatar = res.data.avatar_url
       var email = res.data.email
       return appendFileAsync("README.md", "## Question" + "\n"+ "! [] (<img src="+avatar+"/>)"+"\n"+ email)
       
      });


    })

  


  

  



