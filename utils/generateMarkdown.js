// function to generate markdown for README
function generateMarkdown(data) {
  let licenseString;

  if (data.license == "MIT") {
    licenseString = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (data.license == "Apache") {
    licenseString = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }

  return `# ${data.title}
## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${licenseString}

## Github

[My Github Profile](https://github.com/${data.user})
`;
}

module.exports = generateMarkdown;
