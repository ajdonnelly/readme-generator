// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository

/* THEN a high-quality, professional README.md is generated 
        // with 
        the title of my project 
        and sections entitled 
        Description, 
        Table of Contents, 
        Installation, 
        Usage, 
        License, 
        Contributing, 
        Tests, and 
        Questions*/

// array of questions for user
const inquirer = require('inquirer');
const {data} = require('./utils/generateMarkdown');


const questions = () => {
    return inquirer.prompt([
        //Your Project Title
        // WHEN I enter my project title
        // THEN this is displayed as the title of the README
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: projTitle => {
                if (projTitle) {
                  return true;
                } else {
                  console.log('Please enter the title of your project!');
                  return false;
                }
            }
          },

            /* WHEN I enter a description, installation instructions, 
          usage information, contribution guidelines, and test instructions*/
          /* THEN this information is added to the sections of the README 
          entitled Description, Installation, Usage, Contributing, and Tests*/

          //Description
          {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project (Required)',
            validate: projDesc => {
                if (projDesc) {
                  return true;
                } else {
                  console.log('Please enter a description of your project!');
                  return false;
                }
            }
          },
          //Installation Instructions
          {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
            validate: projInst => {
                if (projInst) {
                  return true;
                } else {
                  console.log('Please enter a description of your project installation!');
                  return false;
                }
            }
          },
          //Usage Instructions-screeshots? what to do with that? Dont think this is part of the challenge, though
          {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.  (Required)',
            validate: projUse => {
                if (projUse) {
                  return true;
                } else {
                  console.log('Please enter a description of your project usage!');
                  return false;
                }
            }
          },

        //   License and Badge
          //tricky part here is how to take whatever the badge is for the license they choose and have this 
          //appear somewhere in the readme. Diddo for the actual license, which I would like to appear in the readme. 
          //So, two questions for tomorrow: 
          
          //1. how to generate badge based on their repsonse to the below checkbox? and 
          //2. how to generate the actual license language in the "License section"

          // WHEN I choose a license for my application from a list of options
          //this is where they are asking for the multiple choice-we did this in the other project. 
          /* THEN a badge for that license is added near the top of the README 
          and a notice is added to the section of the README entitled License 
          that explains which license the application is covered under*/
          //am I making my own badge for these licenses? 
          {
            type: 'checkbox',
            name: 'license',
            message: 'The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)  (Required)',
            choices: ['MIT','GNU AGPLv3', 'Mozilla Public','Apache','Boost Software','The Unlicense']
            validate: projLicense => {
                if (projLicense) {
                  return true;
                } else {
                  console.log('Please enter a project license!');
                  return false;
                }
            }
          },
          
          //contributing guidelines
          {
            type: 'input',
            name: 'contributing',
            message: 'Provide Guidelines for Contributing to this Project.  (Required)',
            validate: projCreds => {
                if (projCreds) {
                  return true;
                } else {
                  console.log('Please enter contribution guidelines for this project!');
                  return false;
                }
            }
          },
          
          //Test Instructions
          {
            type: 'input',
            name: 'tests',
            message: 'Provide Testing Instructions for this Project.  (Required)',
            validate: projTests => {
                if (projTests) {
                  return true;
                } else {
                  console.log('Please enter test instructions!');
                  return false;
                }
            }
          },
          //Questions?
          
            // WHEN I enter my GitHub username

            // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

            // WHEN I enter my email address

            // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
                validate: gitUserName => {
                    if (gitUserName) {
                      return true;
                    } else {
                      console.log('Please enter your GitHub username!');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
                validate: gitEmail => {
                    if (gitEmail) {
                      return true;
                    } else {
                      console.log('Please enter your GitHub username!');
                      return false;
                    }
                }
            },
        
    ]);
};

const writeToFile = data => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./README.md', data, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init()
.then(pageMarkdown => {
    return generateMarkdown(pageMarkdown);
  });
