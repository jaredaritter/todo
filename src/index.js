import './style.css';
import { nav } from './nav.js';

const navLinks = ['Home', 'About', 'Contact'];
const header = 'How Do You Do?';

nav(navLinks);

function component() {
  const element = document.createElement('div');
  element.textContent = 'Hello World';

  return element;
}

console.log('test');

document.body.appendChild(component());
