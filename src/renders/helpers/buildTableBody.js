function buildTableBody() {
  const cellNames = ['DUMMY', 'DUMMY', 'DUMMY', 'DUMMY'];
  const tbody = document.querySelector('tbody');
  const tr = document.createElement('tr');
  cellNames.forEach((name) => {
    const td = document.createElement('td');
    td.textContent = name;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
  return tbody;
}

export { buildTableBody };
