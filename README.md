# To Do project from TOP

- Basic ToDo project. Currently WIP.

## Roadmap

- Enable new project form and allow creation of multiple projects

  - Enable form (COMPLETED)
  - Will need to address buildTableBody code for better solution (COMPLETED)
  - clearForm having side effect on todos. Take a look. (COMPLETED. ACTUALLY CAUSED BY HOW BUILDTABLEBODY IS BUILT AND USED ONLY THE DEFAULT PROJECT)
  - Having an area to manage state will be useful for organizing data.
    - Have a fake DB file?

- Store state in localstorage as well for reuse
- Break apart project.js into component pieces (think about how it will work for building multiple new projects) (COMPLETED)
- Flesh out todo items for default project (COMPLETED)

## Planning

- todos
- project
- separate logic and render modules
- input information into form
  - title
  - description
  - due
  - priority
- output into table
  - name
- New
  - project
  - todo
- Render

  - project
  - todo

- Make default project in javascript
  - buildDefault
