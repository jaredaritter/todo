function renderTodo(obj) {
  const tbody = document.querySelector(`#${obj.project} tbody`);
  const tr = document.createElement('tr');
  for (const item in obj) {
    if (item === 'project') continue;
    const td = document.createElement('td');
    td.textContent = obj[item];
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

export { renderTodo };
