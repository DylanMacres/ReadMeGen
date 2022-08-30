// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseArray = data.license[0];
  let licenseString = "";
  //a set of if statements that determine which license was used and their corresponding imagae 
  if(licenseArray === "Apache"){
    console.log("yay!!")
    licenseString = `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  }else if(licenseArray === 'Mozilla'){
    licenseString = `![Lincese: Mozilla](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  }else if(licenseArray === 'MIT'){
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }else if(licenseArray === "Boost"){
    licenseString = `![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  }else{
    return licenseString;
  }
   
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
  ## Description
    ${data.description}

  ## Table Of Contents:

  1. [Description](#description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Contributions](#credits)
  5. [GitHub](#github)
  6. [Email](#email)
  7. [Licenses](#license)



  ## Installation 
    ${data.Installation}

  ## Usage
   ${data.Usage}

  ## Contributions 
    ${data.credits}

  ## Github
    ${data.github}

  ## E-Mail
    ${data.email}

  ## License
    ${renderLicenseBadge(data)}

`;
}
// allow it to be used in the index
module.exports = generateMarkdown;
