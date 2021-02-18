const Manager= require("./lib/Manager")
const Engineer= require("./lib/Engineer")
const Intern= require("./lib/Intern")

const inquirer= require("inquirer")
const fs= require("fs")
const html= require("./src/html")
const managerCard= require ("./src/managerCard")
const engineerCard= require ("./src/engineerCard")
const internCard= require ("./src/internCard")


const employeeDB=[]

let questions=[]

function askQuestion (){

      questions =[{ 
        type: "list",
        message: "Choose from the following employee options:",
        choices: ["Add Manager", "Add Engineer", "Add Intern", "Exit"],
        name: "choice"

      }]

      inquirer.prompt(questions)
      .then(function(response){
              switch(response.choice){
                  case "Add Manager":
                      addManager()
                      break
              }
      })
}
function addManager(){
    questions=[{
        type: "input",
        message: "What is the employee's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the employee's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the employee's office number?",
        name: "officeNumber"
    }
]
    inquirer.prompt(questions)
    .then(function(response){
        const newManager= new Manager(response.name,response.id,response.email,response.officeNumber)
        employeeDB.push(newManager)
        console.log(employeeDB)
        askQuestion()
    })
function addEngineer(){
    questions=[{
        type: "input",
        message: "What is the employee's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the employee's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the employee's Github username?",
        name: "github"
    }
]
    inquirer.prompt(questions)
    .then(function(response){
        const newEngineer= new Engineer(response.name,response.id,response.email,response.github)
        employeeDB.push(newEngineer)
        console.log(employeeDB)
        askQuestion()
    })
function addIntern(){
    questions=[{
        type: "input",
        message: "What is the employee's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the employee's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the employee's school?",
        name: "school"
    }
]
    inquirer.prompt(questions)
    .then(function(response){
        const newIntern= new Intern(response.name,response.id,response.email,response.school)
        employeeDB.push(newIntern)
        console.log(employeeDB)
        askQuestion()
    })
}
askQuestion()