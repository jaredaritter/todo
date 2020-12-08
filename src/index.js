// IMPORTS
import './styles/style.css';
import { newTodo } from './events/newTodo';
import { newProject } from './events/newProject';

// TODO BUTTON REFERENCE AND EVENT LISTENER WITH CALLED FUNCTION
document.querySelector('.new-todo').addEventListener('click', newTodo);
document.querySelector('.new-project').addEventListener('click', newProject);

// INITIALIZE PAGE
newProject(null, 'Default');

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
