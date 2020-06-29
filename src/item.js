function item() {
  console.log('item working');

  const attributes = {
    title: '',
    description: '',
    dueDate: '',
    priority: '',
    notes: '',
    checklist: '',
  };

  const project = document.querySelector('.project');
  const list = document.querySelector('.list');
  const newTodo = document.querySelector('.new-todo');

  newTodo.addEventListener('click', (e) => {
    let element = document.createElement('li');
    element.textContent = prompt('What would you like to add?');
    list.appendChild(element);
  });
}

export { item };
