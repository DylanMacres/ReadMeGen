// function init (){

const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require("./generateMarkdown")
const path = require('path')
const fileName = "README.md"

//questions to ask
let questions = ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input ',
        name: 'Description',
        message: "Please describe what your project is!",
    },
    {
        type: 'input',
        name: 'Installation',
        message: "Provide instuctions for a user to install"
    },
    {
        type:"input",
        name:'Usage',
        message:'Please specify the usage information'
    },
    {
        type:"input",
        name:'credits',
        message:'Please specify the contributions'
    },
    {
        type:"input",
        name:'github',
        message:'Please include your Github username'
    },
    {
        type:"input",
        name:'email',
        message:'Please include your email address'
    },
    {
        type: 'list',
        name:"license",
        message: "What license did you use for this repository?",
        choices: [
            'Apache',
            'Mozilla',
            'MIT',
            'Boost'


        ]
    }
])
//function to create the file with the filename as READme and use the data from the questions
function writeFile(fileName, data){
    //calling the markdownjs file to generate page
    const markdownjs = generateMarkdown(data);
    //actually creating the file
    fs.writeFile(fileName, markdownjs, function (err){
     //catch error
        if (err) {
            console.log('this does not work')
        }
    })
}
    

//function to initialize the page 
function init() {
    inquirer.prompt(questions)
.then (function (data) {
    writeFile(fileName, data)
})
}
//calling the init
init()


 

 


