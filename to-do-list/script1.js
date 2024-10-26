const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✓';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '✗';
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.appendChild(completeBtn);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}
