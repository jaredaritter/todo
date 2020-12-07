// CREATE NEW PROJECT HTML AND GET NAME
// STORE ARRAY HERE OR IN INDEX?

// WHEN CALLED SHOULD TAKE NAME INPUT THEN BUILD AND RENDER NEW PROJECT WITH APPROPRIATE HEADER NAME, COLUMN TITLES, AND SINGLE DUMMY INPUT

const project = (projectName) => {
  const projects = document.querySelector('.projects');
  const project = document.createElement('div');
  project.classList.add('project');
  const table = document.createElement('table');
  table.classList.add('list');

  table.appendChild(buildHeadElement());
  table.appendChild(buildBodyElement());
  project.appendChild(buildHeader());
  project.appendChild(table);
  projects.appendChild(project);

  function buildHeader() {
    const header = document.createElement('h2');
    header.textContent = projectName;
    return header;
  }

  function buildHeadElement() {
    const cellNames = ['Title', 'Description', 'Due', 'Priority'];
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

  // WILL REMOVE FROM FUNCTION EVENTUALLY, NOT NEEDED FOR BUILDING NEW PROJECT ASIDE FROM TESTING.
  function buildBodyElement() {
    const cellNames = ['DUMMY', 'DUMMY', 'DUMMY', 'DUMMY'];
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
};

export { project };
