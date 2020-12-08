import { buildProjectHeader } from './helpers/buildProjectHeader';
import { buildTableHeaders } from './helpers/buildTableHeaders';
import { buildTableBody } from './helpers/buildTableBody';

function renderProject(projectName) {
  const projects = document.querySelector('.projects');
  const project = document.createElement('div');
  project.classList.add('project');
  const table = document.createElement('table');
  table.classList.add('list');
  const tbody = document.createElement('tbody');

  table.appendChild(buildTableHeaders());
  table.appendChild(tbody);
  project.appendChild(buildProjectHeader(projectName));
  project.appendChild(table);
  projects.appendChild(project);
  // buildTableBody(); // CAN BE REMOVED AT ANY TIME WE DON'T NEED DUMMY DATA ANY MORE
}

export { renderProject };
