const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the Title of your project?",
        name: "title"
    },
    {
        message: "What's a good description for your project?",
        name: "description"
    },
    {
        message: "What steps do we need to install our application?",
        name: "installation"
    },
    {
        message: "How will this application be used?",
        name: "usage"
    },
    {
        type: "list",
        message: "What License do you want to use?",
        choices: ["MIT", "Apache", "GNU"],
        name: "license"
    },
    {
        message: "type your github username please.",
        name: "user"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function (response) {
            writeToFile("read.md", generateMarkdown(response))
            // console.log(response)
        })
}

// function call to initialize program
init();
