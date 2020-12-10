import { projects } from '../data/projects'

function addProjectToState(project) {
  console.log('project: ' + project.name);
  // projects = [...projects, project]; // THESE ARE CAUSING REFERENCE ERRORS. UNKNOWN WHY.
  // projects = projects.concat(project);
  projects.push(project);
  console.log(projects);
}

export {addProjectToState}