import { buildProjectHeader } from './helpers/buildProjectHeader';
import { buildTableHeaders } from './helpers/buildTableHeaders';
import { buildTableBody } from './helpers/buildTableBody';

function renderProject(projectName) {
  const projects = document.querySelector('.projects');
  const project = document.createElement('div');
  project.classList.add('project');
  const table = document.createElement('table');
  table.classList.add('list');

  table.appendChild(buildTableHeaders());
  table.appendChild(buildTableBody());
  project.appendChild(buildProjectHeader(projectName));
  project.appendChild(table);
  projects.appendChild(project);
}

export { renderProject };
