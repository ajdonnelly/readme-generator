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
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path");

const questions = [
        //Your Project Title
        // WHEN I enter my project title
        // THEN this is displayed as the title of the README
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
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
          },
          //Installation Instructions
          {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
          },
          //Usage Instructions-screeshots? what to do with that? Dont think this is part of the challenge, though
          {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.  (Required)',
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
            choices: ['MIT','GNU AGPLv3', 'Mozilla Public','Apache','Boost Software','The Unlicense', 'None']
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
          //Questions?
          
            // WHEN I enter my GitHub username

            // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

            // WHEN I enter my email address

            // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            },
        
    ];

// const writeToFile = generateMarkdown => {
//     return new Promise((resolve, reject) => {
//       fs.writeFile('./README.md', generateMarkdown, err => {
//         // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//         if (err) {
//           reject(err);
//           // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//           return;
//         }
  
//         // if everything went well, resolve the Promise and send the successful data to the `.then()` method
//         resolve({
//           ok: true,
//           message: 'File created!'
//         });
//       });
//     });
//   };

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

