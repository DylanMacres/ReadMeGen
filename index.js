// function init (){

const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require("./generateMarkdown")
const path = require('path')
const fileName = "README.md"

//add the common licenses information perhaps in an array
//was going to use the array in the generate markdown js file but got stuck so i switched it up 




//  const licenseArray = [
//     {
//         name:'Apache',
//         url:"https://www.apache.org/licenses/LICENSE-2.0",
//         img:"https://img.shields.io/badge/License-Apache_2.0-blue.svg",
//     },
//     {
//         name:'Mozilla',
//         url:"https://www.mozilla.org/en-US/MPL/2.0/",
//         img:"https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
//     },
//     {
//         name:'MIT',
//         url:"https://opensource.org/licenses/MIT",
//         img:"https://img.shields.io/badge/License-MIT-yellow.svg",
//     },

//     {
//         name:'Boost',
//         url:"https://www.boost.org/LICENSE_1_0.txt",
//         img:"https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
//     }
//  ]
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
// .then((results) => {
//     console.log(results)

//     fs.writeFile('README.md', )
// })
function writeFile(fileName, data){
    const markdownjs = generateMarkdown(data);
    fs.writeFile(fileName, markdownjs, function (err){
        if (err) {
            console.log('this does not work')
        }
    })
}
    
//catch error
//answers data
function init() {
    inquirer.prompt(questions)
.then (function (data) {
    writeFile(fileName, data)
})
}

init()


//function to make the Readme file 

//fuction to intialize the app 

//call the init 
