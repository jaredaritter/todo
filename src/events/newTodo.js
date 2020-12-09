import { item } from '../components/item';
import { renderTodo } from '../renders/renderTodo';
import { clearForm } from '../helpers/clearForm';

// BASE VARIABLES
const defaultArr = [];

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
  defaultArr.push(todo);
  console.table(defaultArr);
  renderTodo(todo);
  clearForm(form);
}

export { newTodo };
