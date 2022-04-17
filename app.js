const inquirer = require('inquirer');
//const generatePage = require('./src/page-template');
//const { writeFile, copyFile } = require('./utils/generate-site');

const questions =[
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter the employees name!');
            return false;
          }
        }
      },      
      {
        type: 'input',
        name: 'id',
        message: 'Enter the id number of your employee (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter an id!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the email of your employee (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter the email of the employee');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'employeeType',
        message: 'Please choose the employee type',
        choices:['Engineer','Manager','Intern'],
      },
          {
        type: 'input',
        name: 'github',
        message: 'Enter the GitHub link to your project. (Required)',
        when(answers){
            return answers.employeeType==="Engineer"
        },
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a GitHub account for this employee!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the office number of this manager. (Required)',
        when(answers){
            return answers.employeeType==="Manager"
        },
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter the office number of this employee!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the school that the intern attands. (Required)',
        when(answers){
            return answers.employeeType==="Intern"
        },
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter the school that this intern attends!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ]
    inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(JSON.stringify(answers, null, 2))
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Your console environment is not supported!")
      } else {
        console.log(error)
      }
  })
    //.then(projectData => {
      //portfolioData.projects.push(projectData);
      //if (projectData.confirmAddProject) {
        //return promptProject(portfolioData);
      //} else {
        //return portfolioData;
      //}
    //});
//};

//promptUser()
 // .then(promptProject)
  //.then(portfolioData => {
  //  return generatePage(portfolioData);
  //})
  //.then(pageHTML => {
   // return writeFile(pageHTML);
 // })
  //.then(writeFileResponse => {
    //console.log(writeFileResponse);
    //return copyFile();
 // })
  //.then(copyFileResponse => {
   // console.log(copyFileResponse);
  //})
  //.catch(err => {
   // console.log(err);
  //});
