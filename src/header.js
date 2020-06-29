function header(text) {
  console.log('header working');
  const parent = document.querySelector('.header');
  const element = document.createElement('h1');
  element.textContent = text;
  parent.appendChild(element);
}

export { header };
