// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  }
  return `![Static Badge](https://img.shields.io/badge/LICENSE-${license}-blue)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license === "none"){
  return '';
}
return '- [License](#license)'
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none"){
    return "";
  }
  return `## License
  
  this application is covered under the ${license} license!
    `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}
- [Questions](#questions)

## Installation

${data.installation}

## Usage

## Credits


${renderLicenseSection(data.license)}
## Questions
Checkout my Github repo's: [Click Here](https://github.com/PaatL${questions})
If you need to reach me, please to email me at ${contact}.
`;
}


module.exports = generateMarkdown;
