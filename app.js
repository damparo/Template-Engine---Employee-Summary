const Manager = require("./classes/Manager");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./classes/htmlRenderer");
// console.log(new Manager("name", 1, "tucker@gmail.com", 883));
// console.log(new Engineer("name", 1, "tucker@gmail.com", "tuckerhub"));
// console.log(new Intern("name", 1, "tucker@gmail.com", "tuckerschol"));

// Write code to use inquirer to gather information about the development team members,

// Manager
inquirer
    .prompt([
    {
        name: "name",
        message: "Please build your team"
    },
    {
        type: "input",
        name: "name",
        message: "what is your manager's name?"
    },
    {
        type: "input",
        name: "name",
        message: "what is your manager's id?"
    },
    {
        type: "input",
        name: "name",
        message: "what is your manager's email?"
    },
    {
        type: "input",
        name: "name",
        message: "what is your manager's office number?"
    },
    {
        type: "list",
        name: "name",
        message: "which type of team member would you like to add?",
        choices: ["Engineer", "Intern"]
    },
    {
        type: "input",
        name: "name",
        message: "what is your Engineer's name?"
    
    },
    {
        type: "input",
        name: "name",
        message: "what is your Engineer's id?"
    },
    {
        type: "input",
        name: "name",
        message: "what is your Engineer's email?"
    },
    {
        type: "input",
        name: "name",
        message: "what is your Engineer's Github username?"
    },
    {
        type: "list",
        name: "name",
        message: "which type of team member would you like to add?",
        choices: ["Engineer", "Intern"]
    },
    {
        type: "input",
        name: "name",
        message: "what is your Intern's name?"
    
    },
    {
        type: "input",
        name: "name",
        message: "what is your Intern's id?"
    },
    {
        type: "input",
        name: "name",
        message: "what is your Intern's email?"
    },
    {
        type: "input",
        name: "name",
        message: "what is your Intern's school?"
    },


])
.then(answers => { console.info('answers', answers)});

// and to create objects for each team member (using the correct classes as blueprints!)
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// const html = render () {[

//     (new Manager("name", 1, "tucker@gmail.com", 883)),
//     (new Engineer("name", 1, "tucker@gmail.com", "tuckerhub")),
//     (new Intern("name", 1, "tucker@gmail.com", "tuckerschol"))

// ]};
    
// fs.writeFile(outputPath, html, () => {});








// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
