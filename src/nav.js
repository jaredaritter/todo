function nav(linkArray) {
  console.log('Nav working');

  const parent = document.querySelector('.nav');
  linkArray.forEach((link) => {
    const element = document.createElement('button');
    element.textContent = link;
    parent.appendChild(element);
  });
}

export { nav };
