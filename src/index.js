// IMPORTS
import './style.css';
import { header } from './header.js';
import { item } from './item.js';

// BASE VARIABLES AND PAGE INFO
const headerText = 'How Do You Do?';
const defaultArr = [];

// HEADER RENDER AND VERIFICATION LOG
header(headerText);
console.log('index working');

const list = document.querySelector('.list');

// TODO BUTTON REFERENCE AND EVENT LISTENER WITH CALLED FUNCTION
document
  .querySelector('.new-todo')
  .addEventListener('click', newTodo);

function newTodo() {
  const form = document.querySelector('form');
  const todo = item(
    form.title.value,
    form.description.value,
    form.due.value,
    form.priority.value,
  );
  // PUSH TO ARRAY FOR HOLDING INFORMATION
  defaultArr.push(todo);
  console.table(defaultArr);
  // ADD ITEM TO LIST
  const li = document.createElement('li');
  li.textContent = todo.title;
  list.appendChild(li);
  // CLEAR FORM
  clearForm(form);
}

// SET FORM VALUES TO EMPTY STRINGS IGNORING THE SUBMIT BUTTON
function clearForm(form) {
  for (let i = 0; i < form.length - 1; i++) {
    form[i].value = '';
  }
}

// ORIGINAL TEST FUNCTION
// function newTodo() {
//   const blank = item(
//     'title',
//     'description',
//     'due',
//     'priority',
//     'notes',
//     'checklist'
//   );
//   // PUSH TO ARRAY FOR HOLDING INFORMATION
//   defaultArr.push(blank);
//   console.table(defaultArr);
//   // ADD ITEM TO LIST
//   const li = document.createElement('li');
//   li.textContent = blank.title;
//   list.appendChild(li);
// }

// PROJECT BUTTON REFERENCE AND EVENT LISTENER WITH CALLED FUNCTION
document
  .querySelector('.new-project')
  .addEventListener('click', buildNewProject);

function buildNewProject() {
  const parent = document.querySelector('.content');
  const element = document.createElement('div');
  element.classList.add('project');
  element.textContent = 'Dummy';
  parent.appendChild(element);
}
