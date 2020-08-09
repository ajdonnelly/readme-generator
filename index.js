const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require("path");

// array of questions for user
const questions = [
        //Your Project Title
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
          },
          //Description
          {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project (Required)',
          },
          //Installation Instructions
          {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
          },
          //Usage Instructions
          {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.  (Required)',
          },
          //   License and Badge
          {
            type: 'list',
            name: 'license',
            message: 'Select a license for this project. This lets other developers know what they can and cannot do with your project. (Required)',
            choices: ['MIT','ISC', 'Zlib', 'None']
          },
          //contributing guidelines
          {
            type: 'input',
            name: 'contributing',
            message: 'Provide Guidelines for Contributing to this Project.  (Required)',
          },
          //Test Instructions
          {
            type: 'input',
            name: 'tests',
            message: 'Provide Testing Instructions for this Project.  (Required)',
          },
          //Questions
          //GitHub
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
            },
          //Email
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            }
        
    ];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer
    //pass questions through
    .prompt(questions)
    //collect answers
    .then((answers) => {
        //let user know the readme is being generated
      console.log("README generating...");
      //write template to file running the answer through the template function
      writeToFile("README.md", generateMarkdown({...answers}));
    })
  }

// function call to initialize program
init()

