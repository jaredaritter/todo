import { renderProject } from '../renders/renderProject';
import { project } from '../components/project';

function newProject(projectName) {
  const defaultName = 'Untitled';
  const name = projectName || defaultName;
  const newProject = project(name);
  renderProject(newProject.name);
  // const form = document.querySelector('#project-form');
  // console.log(`${form.name.value}`);
  // project(form.name.value);
  // clearForm(form);
}

export { newProject };
