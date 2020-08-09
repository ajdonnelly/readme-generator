
//render license badge 
function licenseBadge (license) {
  if (license !== "None") {

    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
  
  }
  return ''
}

//render link to the license
function licenseLink (license) {
  if (license !== "None") {
    return ( 
      `\n* [License](#license)\n`
      )
  }
  return ''
}

function displayLicense (license) {
  if (license !== "None") {
return (
`## License

  ### This application is licensed under the ${license} license.`
    )
  }
  return ''
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${licenseBadge(data.license)}<br>

  ## Description<br>

  ${data.description}

  ## Table of Contents<br>

  * [Installation Instructions](#installation-instructions)
  
  * [Usage Instructions](#usage-instructions)
  
  * ${licenseLink(data.license)}
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)


  ## Installation Instructions
  ${data.installation}

  ## Usage Instructions
  ${data.usage}

  ${displayLicense(data.license)}

  ## Contributing
  ${data.contributing};

  ## Tests
  ${data.tests};

  ## Questions
  My GitHub Profile: ${data.github};
  Have Questions? Reach out to me at ${data.email};
`;
}

module.exports = generateMarkdown;
