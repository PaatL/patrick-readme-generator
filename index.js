// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions:",
  },

  {
    type: "list",
    name: "license",
    message: "which of these licenses are you using?",
    choices: ["ISC", "MIT", "Apache", "none"],
  },

  {
    type: "input",
    name: "questions",
    message: "Provide your github profile:",
  },
  {
    type: "input",
    name: "contact",
    message: "Provide email address for contact:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err, result) => {
    if (err) throw err;
    console.log("file created!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
