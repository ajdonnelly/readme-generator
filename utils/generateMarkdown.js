
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
  ${licenseBadge(data.license)}

  ## Description<br>

  ${data.description}

  ## Table of Contents

  * [Installation Instructions](#installation-instructions)
  
  * [Usage Instructions](#usage-instructions)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)

  ${licenseLink(data.license)}

## Installation Instructions
  ${data.installation}

  ## Usage Instructions
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Have Questions about this Repository? Reach me at:<br> 
  My GitHub Profile: ${data.github}<br> 
  My email: ${data.email}<br> 

  ${displayLicense(data.license)}
`;
}

module.exports = generateMarkdown;
