const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your Project Title?",
    name: "title",
  },
  {
    type: "input",
    message: "Your Project description",
    name: "description",
  },
  {
    type: "input",
    message: "Provide installation instructions",
    name: "install",
  },
  {
    type: "input",
    message: "How to use the application",
    name: "usage",
  },
  {
    type: "list",
    message: "Chose your licence",
    choices: ["MIT", "Other", "GPlv2", "Apache"],
    name: "licence",
  },
  {
    type: "input",
    message: "Please provide contributors",
    name: "contribute",
  },
  {
    type: "input",
    message: "How to test the application",
    name: "test",
  },
  {
    type: "input",
    message: "Any questions? email me at@",
    name: "questions",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("README.md", generateMarkdown({ ...response }));
  });
}

// function call to initialize program
init();
