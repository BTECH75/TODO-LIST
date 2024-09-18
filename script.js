document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskValue = taskInput.value.trim();

        if (taskValue !== '') {
            const li = document.createElement('li');
            
            const taskText = document.createElement('span');
            taskText.textContent = taskValue;
            taskText.className = 'task-text';

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'removeButton';
            removeButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.appendChild(taskText);
            li.appendChild(removeButton);
            taskList.appendChild(li);

            taskInput.value = '';
        }
    });

    // Optional: Allow pressing Enter to add tasks
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
