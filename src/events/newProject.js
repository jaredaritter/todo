import { renderProject } from '../renders/renderProject';
import { project } from '../components/project';

function newProject(e, firstProject) {
  const form = document.querySelector('#project-form');
  const formName = form.name.value;
  console.log(form.name.value);

  const defaultName = 'Untitled';
  const name = formName || firstProject || defaultName;
  const newProject = project(name);
  renderProject(newProject.name);

  // clearForm(form);
}

export { newProject };
