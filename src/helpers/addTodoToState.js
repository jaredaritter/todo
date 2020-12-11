import { projects } from '../data/projects';
import { capitalizeFirstLetter } from './capitalizeFirstLetter';
import { toSpaces } from './toSpaces';

function addTodoToState(todo) {
  // FIND INDEX OF PROJECT THAT TODO WILL BE INSERTED INTO
  const objIndex = projects.findIndex((project) => {
    return project.name == capitalizeFirstLetter(toSpaces(todo.project));
  });
  console.log(objIndex); // SHOWS CORRECTLY

  const newTodos = [...projects[objIndex].todos, todo];
  projects[objIndex].todos = newTodos;
  console.log('*********************');
}

export { addTodoToState };

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
