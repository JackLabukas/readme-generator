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
  \n${data.licence}
  \n
  \n
  \n##Contributors
  \n${data.contribute}
  \n
  \n##How to test this application
  \n${data.test}
  \n
  \n
  \n Any questions? Please email me at:
  \n ${data.questions}
  
  
  `;
}

// function generateLicence

module.exports = generateMarkdown;
