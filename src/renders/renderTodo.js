function renderTodo(obj) {
  const tbody = document.querySelector(`#${obj.project} tbody`);

  const tr = document.createElement('tr');
  const title = document.createElement('td');
  const dueDate = document.createElement('td');

  title.textContent = obj.title;
  dueDate.textContent = obj.dueDate;

  tr.appendChild(title);
  tr.appendChild(dueDate);

  tbody.appendChild(tr);
}

export { renderTodo };
