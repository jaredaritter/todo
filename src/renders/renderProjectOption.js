import { toKebabCase } from '../helpers/toKebabCase';

function renderProjectOption(projectName) {
  if (projectName === 'Default') {
    return;
  }
  const select = document.querySelector('#project');
  const option = document.createElement('option');

  option.value = toKebabCase(projectName.toLowerCase());
  option.textContent = projectName;
  select.appendChild(option);
}

export { renderProjectOption };
