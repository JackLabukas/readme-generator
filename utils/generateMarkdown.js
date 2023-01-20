// function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}
  \n##Description
  \n${data.description}
  \n###Installation Instructions 
  \n${data.install}
  \n##Usage
  \n*${data.usage}*
  \n
  \n
  \n##Licence
  \n${data.license}
  \n
  \n
  \n##Contributors
  \n${data.contributors}
  \n
  \n##How to test this application
  \n${data.test}
  
  
  `;
}

// function generateLicence

module.exports = generateMarkdown;
