// IMPORTS
import './style.css';
import { item } from './item.js';

// BASE VARIABLES
const defaultArr = [];

// GENERAL REFERENCES
const list = document.querySelector('.list');

// TODO BUTTON REFERENCE AND EVENT LISTENER WITH CALLED FUNCTION
document.querySelector('.new-todo').addEventListener('click', newTodo);

function newTodo() {
  const form = document.querySelector('form');
  const todo = item(
    form.title.value,
    form.description.value,
    form.due.value,
    form.priority.value
  );
  // PUSH TO ARRAY FOR HOLDING INFORMATION
  defaultArr.push(todo);
  console.table(defaultArr);
  // ADD ITEM TO TABLE
  console.log(todo);
  renderTodo(todo);
  // CLEAR FORM
  clearForm(form);
}

function renderTodo(obj) {
  const tbody = document.querySelector('tbody');
  const tr = document.createElement('tr');
  for (const item in obj) {
    const td = document.createElement('td');
    td.textContent = obj[item];
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

// SET FORM VALUES TO EMPTY STRINGS IGNORING THE SUBMIT BUTTON
function clearForm(form) {
  for (let i = 0; i < form.length - 1; i++) {
    form[i].value = '';
  }
}
