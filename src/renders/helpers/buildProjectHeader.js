function buildProjectHeader(projectName) {
  const header = document.createElement('h2');
  header.textContent = projectName;
  return header;
}

export { buildProjectHeader };
