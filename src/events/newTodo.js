import { item } from '../components/item';
import { renderTodo } from '../renders/renderTodo';
import { clearForm } from '../helpers/clearForm';
import { projects } from '../data/projects';
import { capitalizeFirstLetter } from '../helpers/capitalizeFirstLetter';

// BASE VARIABLES

function newTodo() {
  const form = document.querySelector('#todo-form');
  const todo = item(
    form.title.value,
    form.description.value,
    form.due.value,
    form.priority.value,
    form.project.value
  );
  // PUSH TO ARRAY FOR HOLDING INFORMATION
  // projects[0].todos.push(todo);
  // console.table(projects[0].todos);

  // WITH SLICE
  const objIndex = projects.findIndex(
    (project) => project.name === capitalizeFirstLetter(todo.project)
  );
  console.log(objIndex); // SHOWS CORRECTLY  (CURRENTLY NOT IMPLEMENTED IN NEW PROJECT)

  // make new object of updated object.
  // const updatedObj = { ...projects[objIndex], desc: 'updated desc value' };

  // make final new array of objects by combining updated object.
  const updatedProjects = [
    ...projects.slice(0, objIndex),
    todo,
    ...projects.slice(objIndex + 1),
  ];
  console.log(projects);
  console.log(updatedProjects);

  renderTodo(todo);
  clearForm(form);
}

export { newTodo };

// MAP
// const newProjects = projects.map(p =>
//   p.value === 'jquery-ui'
//     ? { ...p, desc: 'new description' }
//     : p
// );

// IN THEORY MORE EFFICIENT WITH SLICE
// const objIndex = projects.findIndex(obj => obj.value === 'jquery-ui');

// // make new object of updated object.
// const updatedObj = { ...projects[objIndex], desc: 'updated desc value'};

// // make final new array of objects by combining updated object.
// const updatedProjects = [
//   ...projects.slice(0, objIndex),
//   updatedObj,
//   ...projects.slice(objIndex + 1),
// ];
