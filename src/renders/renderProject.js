import { buildProjectHeader } from './helpers/buildProjectHeader';
import { buildTableHeaders } from './helpers/buildTableHeaders';
import { buildTableBody } from './helpers/buildTableBody';
import { toKebabCase } from '../helpers/toKebabCase';

function renderProject(projectName) {
  const projects = document.querySelector('.projects');

  const project = document.createElement('div');
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  project.classList.add('project');
  project.setAttribute('id', `${toKebabCase(projectName.toLowerCase())}`);
  table.classList.add('list');

  table.appendChild(buildTableHeaders());
  table.appendChild(tbody);
  project.appendChild(buildProjectHeader(projectName));
  project.appendChild(table);
  projects.appendChild(project);
  // buildTableBody(); // CAN BE REMOVED AT ANY TIME WE DON'T NEED DUMMY DATA ANY MORE
}

export { renderProject };
