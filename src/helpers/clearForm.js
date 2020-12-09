// SET FORM VALUES TO EMPTY STRINGS IGNORING THE SUBMIT BUTTON
function clearForm(form) {
  for (let i = 0; i < form.length - 1; i++) {
    form[i].value = '';
  }
  if (form.priority) {
    form.priority.value = 'normal';
  }
  if (form.project) {
    form.project.value = 'default';
  }
}

export { clearForm };
