import { item } from './item';

function newTodo() {
  const form = document.querySelector('#todo-form');
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
  renderTodo(todo);
  // CLEAR FORM
  clearForm(form);
}

// RENDER FUNCTIONS
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

export { newTodo };
