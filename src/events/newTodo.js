import { item } from '../components/item';
import { renderTodo } from '../renders/renderTodo';
import { clearForm } from '../helpers/clearForm';
import { addTodoToState } from '../helpers/addTodoToState';

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

  addTodoToState(todo);
  renderTodo(todo);
  clearForm(form);
}

export { newTodo };

