

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  //badge goes here? this has to connect with the 
  //license somehow
  # ${data.title};

  ##**Description**
  ### ${data.description};

  ##**Table of Contents**
  **[Installation Instructions](#installation-instructions)**<br>
  **[Usage Instructions](#usage-instructions)**<br>
  **[License](#license)**<br>
  **[Contributing](#contributing)**<br>
  **[Tests](#tests)**<br>
  **[Questions](#questions)**<br>


  ##**Installation Instructions**
  ### ${data.installation};

  ##**Usage Instructions**
  ### ${data.usage};

  ##**License**
  ### This application is covered under the ${license.join(', ')} license;

  ##**Contributing**
  ### ${data.contributing};

  ##**Tests**
  ### ${data.tests};

  ##**Questions**
  ### My GitHub Profile: ${data.github};
  ### Have Questions? Reach out to me at ${data.email};
`;
}

module.exports = generateMarkdown;
