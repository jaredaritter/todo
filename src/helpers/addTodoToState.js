import { projects } from '../data/projects';
import { capitalizeFirstLetter } from './capitalizeFirstLetter';

function addTodoToState(todo) {
  // FIND INDEX OF PROJECT THAT TODO WILL BE INSERTED INTO
  const objIndex = projects.findIndex(
    (project) => project.name === capitalizeFirstLetter(todo.project)
  );
  console.log(objIndex); // SHOWS CORRECTLY  (CURRENTLY NOT IMPLEMENTED IN NEW PROJECT)

  const newTodos = [...projects[objIndex].todos, todo];
  projects[objIndex].todos = newTodos;
}

export {addTodoToState}

// OPTIONS FOR INSERTING INTO OBJECTS IN ARRAYS
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
