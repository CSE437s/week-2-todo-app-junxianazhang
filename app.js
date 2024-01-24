document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        let taskText = document.createElement("span");
        taskText.innerText = taskInput.value;

        const task = document.createElement('li');
        task.appendChild(checkBox);
        task.appendChild(taskText);
        
        taskList.appendChild(task);

        saveTask(taskInput.value);

        taskInput.value = '';
    }
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (tasks.length === 0) {
        taskList.innerHTML = '';
    } 
    
    tasks.forEach(task => {
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        const taskText = document.createElement('span');
        taskText.innerText = task;

        const taskItem = document.createElement('li');
        
        taskItem.appendChild(checkBox);
        taskItem.appendChild(taskText);


        taskList.appendChild(taskItem);
    });
}


function deleteTasks() {
    localStorage.removeItem('tasks');
    loadTasks();
}