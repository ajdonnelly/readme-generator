// array of questions for user
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = () => {
    return inquirer.prompt([
        //Your Project Title
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: projName => {
                if (projName) {
                  return true;
                } else {
                  console.log('Please enter the name of your project!');
                  return false;
                }
            }
          },
          //Description
          {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projDesc => {
                if (projDesc) {
                  return true;
                } else {
                  console.log('Please enter a description of your project!');
                  return false;
                }
            }
          },
          //Installation
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
          //usage
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
          //credits
          {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.  (Required)',
            validate: projCreds => {
                if (projCreds) {
                  return true;
                } else {
                  console.log('Please enter a description of your project credits!');
                  return false;
                }
            }
          },
          //license
          {
            type: 'input',
            name: 'license',
            message: 'The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)  (Required)',
            validate: projLicense => {
                if (projLicense) {
                  return true;
                } else {
                  console.log('Please enter a description of your project license!');
                  return false;
                }
            }
          },
          // The sections listed above are the minimum for a good README, so they are required
          //but your project will ultimately determine the content of this document. 
          //You might also want to consider adding the following sections. So, for these questions the quesitons will be optional and have confirms.
          
          //badges
          
          {
            type: 'confirm',
            name: 'confirmBadges',
            message: 'Badges are not necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you are doing. Check out the badges hosted by shields.io. You may not understand what they all represent now, but you will in time. Do you want to add badges?',
            default: true
          },
          {
            type: 'input',
            name: 'badges',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => confirmAbout
          }
          //contributing
          {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
          },
          {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => confirmAbout
          }
          //tests
          {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
          },
          {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => confirmAbout
          }

    ]);
};

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
