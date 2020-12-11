import { item } from '../components/item';
import { renderTodo } from '../renders/renderTodo';
import { clearForm } from '../helpers/clearForm';
import { addTodoToState } from '../helpers/addTodoToState';
import { capitalizeFirstLetter } from '../helpers/capitalizeFirstLetter';
import { toSpaces } from '../helpers/toSpaces';

// BASE VARIABLES

function newTodo() {
  const form = document.querySelector('#todo-form');

  // AVAILABLE IF NEEDED FOR CHOOSING WHEN TO MODIFY VALUES
  // const formattedPriority = capitalizeFirstLetter(form.priority.value);
  // const formattedProject = capitalizeFirstLetter(toSpaces(form.project.value));

  const todo = item(
    form.title.value,
    form.description.value,
    form.due.value,
    form.priority.value,
    form.project.value
  );

  addTodoToState(todo);
  renderTodo(todo);
  clearForm(form);
}

export { newTodo };
