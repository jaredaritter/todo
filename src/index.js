import './style.css';
import nav from './nav.js';

nav();

function component() {
  const element = document.createElement('div');
  element.textContent = 'Hello World';

  return element;
}

console.log('test');

document.body.appendChild(component());
