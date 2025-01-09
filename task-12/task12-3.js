const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');

        addTaskButton.addEventListener('click', () => {
            const taskText = newTaskInput.value.trim();
            if (taskText !== '') {
                const li = document.createElement('li');
                li.textContent = taskText;
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Видалити';
                deleteButton.className = 'delete';
                li.appendChild(deleteButton);
                taskList.appendChild(li);
                newTaskInput.value = '';
            }
        });

        taskList.addEventListener('click', (event) => {
            if (event.target.classList.contains('delete')) {
                const taskItem = event.target.parentElement;
                taskList.removeChild(taskItem);
            }
        });