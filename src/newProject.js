function newProject() {
  const form = document.querySelector('#project-form');
  console.log(`${form.name.value}`);
  project(form.name.value);
  // clearForm(form);
}

export { newProject };
