# To Do project from TOP

- ToDo project using the basics. HTML, CSS, Vanilla JS. WIP.

## Roadmap/Todo

### Major

- Choose how to view full todo. Modal or dropdown seem to be the choices.
- Make it prettier:
  - Clickable for full details (this is probably where editting and deleting should go)
  - Add dropdowns for projects using dynamic-ui project code
  - Adjust font (COMPLETED)
  - Align forms and make more user friendly (COMPLETE)
  - Show title and date on todos (COMPLETED)
- Allow editting of todos
- Allow deleting of todos
- Allow editting of projects
- Allow deleting of projects
- Time for another planning session needed for path forward.

### Minor

- Probably should store data in clean, input format style and adjust for what comes in and out of html value attributes as needed.
- Store state in localstorage as well for reuse

### Completed

- Break apart project.js into component pieces (think about how it will work for building multiple new projects) (COMPLETED)
- Flesh out todo items for default project (COMPLETED)
- Enable new project form and allow creation of multiple projects (COMPLETED)
  - Enable form (COMPLETED)
  - Will need to address buildTableBody code for better solution (COMPLETED)
  - clearForm having side effect on todos. Take a look. (COMPLETED. ACTUALLY CAUSED BY HOW BUILDTABLEBODY IS BUILT AND USED ONLY THE DEFAULT PROJECT)
- Allow selecting which project to add todo to. (COMPLETED)
- Add new selector option on creation of new project. (COMPLETED)
- Project names with a space cannot be used with querySelector without modification. Will need to address for core functionality (COMPLETED)
  - convert to kebab case for attributes? (COMPLETED)
- Change project names to lowercase for use as attributes? (COMPLETED)
- All todos currently stored in default array in newTodo (COMPLETED, NOW STORED IN STATE FILE)
- Add new projects to state on creation (COMPLETED)
- Having an area to manage state will be useful for organizing data. (COMPLETED)
  - Have a fake DB file?
- Fix issue with todo insertion failing if project name has spaces (COMPLETED)
- Stop from displaying project choice (COMPLETED)

## Design Choices

- I am at a bit of an impasse on how to handle state. My gut says that the correct way to handle state is to store it separately and use it as the basis for rendering the page. The downside to this is that it seems like this is the very reason that frameworks were created and reinventing the wheel is a bit counterproductive. This lesson seems to geared at direct manipulation of the DOM and using the DOM as the state holder.
- The downside to having a large single state file is the constant rerendering of the whole page. I realize that for a project of this scale it will be meaningless but it doesn't seem like best practice.
- I am torn as to how much time to commit to this project. Given that I would like to implement localStorage, having some consolidated state object will be needed so I may implement a hybrid approach.

---

- I have implemented state as a separate file acting as a dummy DB in a way. Ultimately, it has been a good learning experience and will allow for a unified localstorage but that's about it. I have no doubt that there are packages available to simply this process but doing it by hand has been informative.

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
