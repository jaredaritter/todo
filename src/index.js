import './style.css';
import { header } from './header.js';
import { item } from './item.js';

const headerText = 'How Do You Do?';

header(headerText);
item();

console.log('index working');

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
