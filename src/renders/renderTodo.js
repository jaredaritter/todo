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

export { renderTodo };