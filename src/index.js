// IMPORTS
import './styles/style.css';
import { newTodo } from './events/newTodo';
import { newProject } from './events/newProject';
import { projects } from './data/projects';
import { renderProject } from './renders/renderProject';
import { renderProjectOption } from './renders/renderProjectOption';

const starter = projects[0].name;

// TODO BUTTON REFERENCE AND EVENT LISTENER WITH CALLED FUNCTION
document.querySelector('.new-todo').addEventListener('click', newTodo);
document.querySelector('.new-project').addEventListener('click', newProject);

// INITIALIZE PAGE
renderProjectOption(starter);
renderProject(starter);

// -----------------------------------------------------------------------------
// BRAINSTORMING AND PLANNING
// ----------------------------------------------------------------------------
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
// const projects = [
//   {
//     name: 'Default',
//     todos: [
//       {
//         title: 'test',
//         description: 'test',
//         due: 'test',
//         priority: 'normal',
//       },
//     ],
//   },
// ];
// console.log(projects[0].todos[0].priority);
