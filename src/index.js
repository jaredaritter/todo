import './style.css';
import { header } from './header.js';
import { item } from './item.js';

const headerText = 'How Do You Do?';
const defaultArr = [];

header(headerText);

console.log('index working');

const list = document.querySelector('.list');

document.querySelector('.new-todo').addEventListener('click', newTodo);

function newTodo() {
  const blank = item(
    'title',
    'description',
    'due',
    'priority',
    'notes',
    'checklist'
  );
  // PUSH TO ARRAY FOR HOLDING INFORMATION
  defaultArr.push(blank);
  console.table(defaultArr);
  // ADD ITEM TO LIST
  const li = document.createElement('li');
  li.textContent = blank.title;
  list.appendChild(li);
}

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
