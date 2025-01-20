window.addEventListener('load', () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#username');
    const newTodoForm = document.querySelector('#new-todo-form');
    const username = localStorage.getItem('username') || '';
    nameInput.value = username;
    nameInput.addEventListener('input', (e) => {
        localStorage.setItem('username', e.target.value);
    });

    newTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime(),
        };
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        e.target.reset();
        displayTodos();
    });

    displayTodos();

    function displayTodos() {
        const todoList = document.querySelector('#todo-list');
        todoList.innerHTML = '';

        todos.forEach((todo) => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');
            const label = document.createElement('label');
            const input = document.createElement('input');
            const span = document.createElement('span');
            const content = document.createElement('div');
            const actions = document.createElement('div');
            const edit = document.createElement('button');
            const deleteButton = document.createElement('button');

            input.type = 'checkbox';
            input.checked = todo.done;
            span.classList.add('bubble');
            span.classList.add(todo.category === 'personal' ? 'personal' : 'business');
            content.classList.add('todo-content');
            actions.classList.add('actions');
            edit.classList.add('edit');
            deleteButton.classList.add('delete');

            content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
            edit.innerHTML = 'Edit';
            deleteButton.innerHTML = 'Delete';

            label.appendChild(input);
            label.appendChild(span);
            actions.appendChild(edit);
            actions.appendChild(deleteButton);
            todoItem.appendChild(label);
            todoItem.appendChild(content);
            todoItem.appendChild(actions);
            todoList.appendChild(todoItem);

            if (todo.done) {
                todoItem.classList.add('done');
            }

            input.addEventListener('change', (e) => {
                todo.done = e.target.checked;
                localStorage.setItem('todos', JSON.stringify(todos));
                todoItem.classList.toggle('done', todo.done);
                displayTodos();
            });

            edit.addEventListener('click', (e) => {
                const input = content.querySelector('input');
                input.removeAttribute('readonly');
                input.focus();
                input.addEventListener('blur', (e) => {
                    input.setAttribute('readonly', true);
                    todo.content = e.target.value;
                    localStorage.setItem('todos', JSON.stringify(todos));
                    displayTodos();
                });
            });

            deleteButton.addEventListener('click', (e) => {
                const index = todos.indexOf(todo);
                if (index > -1) {
                    todos.splice(index, 1);
                    localStorage.setItem('todos', JSON.stringify(todos));
                    displayTodos();
                }
            });
        });
    }
});
