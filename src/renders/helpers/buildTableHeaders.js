function buildTableHeaders() {
  const cellNames = ['Title', 'Due'];
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  cellNames.forEach((name) => {
    const th = document.createElement('th');
    th.textContent = name;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  return thead;
}

export { buildTableHeaders };
