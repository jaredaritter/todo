// IMPORTS
import './styles/style.css';
import { newTodo } from './events/newTodo';
import { newProject } from './events/newProject';
import { projects } from './data/projects';
import { renderProject } from './renders/renderProject';
import { renderProjectOption } from './renders/renderProjectOption';
import { renderTodo } from './renders/renderTodo';

const starter = projects[0].name;

// TODO BUTTON REFERENCE AND EVENT LISTENER WITH CALLED FUNCTION
document.querySelector('.new-todo').addEventListener('click', newTodo);
document.querySelector('.new-project').addEventListener('click', newProject);

// INITIALIZE PAGE
renderProjectOption(starter);
renderProject(starter);

// RENDER DUMMY DATA
projects[0].todos.forEach((todo) => {
  renderTodo(todo);
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
// var btn = document.getElementById('myBtn');
var btn = document.getElementById('default'); // DEFAULT PROJECT

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = 'block';
// };
btn.addEventListener('click', (e) => {
  if (e.target && e.target.nodeName === 'TD') {
    modal.style.display = 'block';
    addParagraph();
  }
  console.log(e.target.nodeName);
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function addParagraph() {
  clearModal();

  const modalContent = document.querySelector('.modal-content');

  const p = document.createElement('p');

  p.textContent = 'New Paragraph';

  modalContent.appendChild(p);
}

function clearModal() {
  console.log('clearing');
  const modalContent = document.querySelector('.modal-content');
}
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
