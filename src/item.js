// function item() {
//   console.log('item working');

//   const attributes = {
//     title: '',
//     description: '',
//     dueDate: '',
//     priority: '',
//     notes: '',
//     checklist: '',
//   };

//   const project = document.querySelector('.project');
//   const list = document.querySelector('.list');
//   const newTodo = document.querySelector('.new-todo');

//   newTodo.addEventListener('click', (e) => {
//     let element = document.createElement('li');
//     element.textContent = prompt('What would you like to add?');
//     list.appendChild(element);
//   });
// }

const item = (title, description, dueDate, priority, notes, checklist) => {
  // const getTitle = () => title;
  // const getDescription = () => description;
  // const getDueDate = () => dueDate;
  // const getPriority = () => priority;
  // const getNotes = () => notes;
  // const getChecklist = () => checklist;

  // return {
  //   getTitle,
  //   getDescription,
  //   getDueDate,
  //   getPriority,
  //   getNotes,
  //   getChecklist,
  // };

  const sayHello = () => console.log('hello!');

  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
  };
};

export { item };
