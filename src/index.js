// IMPORTS
import './style.css';
import { project } from './project';
import { newTodo } from './newTodo';

// STRUCTURE FOR LOCALSTORAGE?
// [
//   {
//     name: 'something',
//     todos: [
//       {
//         item1: 'details',
//         item2: 'details',
//         item3: 'details'
//       },
//       {...},
//       {...}
//     ]
//   },
//   {next project}
// ]

// RESTRUCTURE TO USE OBJECT FORMAT FOR PROPER STORAGE INTO LOCAL STORAGE
const projects = [
  {
    name: 'Default',
    todos: [
      {
        title: 'test',
        description: 'test',
        due: 'test',
        priority: 'normal',
      },
    ],
  },
];
console.log(projects[0].todos[0].priority);

// TODO BUTTON REFERENCE AND EVENT LISTENER WITH CALLED FUNCTION
document.querySelector('.new-todo').addEventListener('click', newTodo);
document.querySelector('.new-project').addEventListener('click', newProject);

// INITIALIZE PAGE
project('Default');

function newProject() {
  const form = document.querySelector('#project-form');
  console.log(`${form.name.value}`);
  project(form.name.value);
  // clearForm(form);
}
