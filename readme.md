
## Overview
This project is a simple Task Manager application that allows users to create, edit, and delete tasks. The tasks can be categorized as either personal or business. The application uses local storage to persist data.

## Files
- `index.html`: The main HTML file that contains the structure of the application.
- `style.css`: The CSS file that styles the application.
- `script.js`: The JavaScript file that contains the logic for the application.

## Color Palette
The application uses the following color palette:
- **Primary Color**: `#4070ea`
- **Business Color**: `#126a39`
- **Personal Color**: Same as Primary Color
- **Light Color**: `#e8e5e5`
- **Grey Color**: `#888`
- **Dark Color**: `#313154`
- **Danger Color**: `#FF5B57`

## External Links
The application uses the Google Fonts API to load custom fonts. The following fonts are used:
- [Kanit](https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap)
- [Jersey 15](https://fonts.googleapis.com/css2?family=Jersey+15&display=swap)
- [Playwrite VN](https://fonts.googleapis.com/css2?family=Playwrite+VN:wght@100..400&display=swap)

## Usage
1. Open `index.html` in a web browser.
2. Enter your name in the input field under the "Welcome back" section.
3. Create a new task by filling out the task description and selecting a category (Personal or Business).
4. Click "Add Task" to add the task to the list.
5. Edit or delete tasks using the buttons provided next to each task.

## Local Storage
The application uses local storage to save the username and tasks. This ensures that the data persists even after the browser is closed.

## Functions
- **Add Task**: Adds a new task to the list and saves it to local storage.
- **Edit Task**: Allows the user to edit the task description.
- **Delete Task**: Removes the task from the list and local storage.
- **Mark Task as Done**: Toggles the task's completion status.

