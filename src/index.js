import './style.css';
import { nav } from './nav.js';
import { header } from './header.js';

const navLinks = ['Home', 'About', 'Contact'];
const headerText = 'How Do You Do?';

nav(navLinks);
header(headerText);

console.log('index working');
