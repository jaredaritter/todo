function buildTableBody() {
  const cellNames = ['DUMMY', 'DUMMY', 'DUMMY', 'DUMMY'];
  // THIS IS WHERE BODY IS CREATED AND WILL BREAK WHEN REMOVED. FIGURE OUT BETTER PLACE TO BUILD BODY
  const tbody = document.createElement('tbody');
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
