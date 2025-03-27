document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    loadNotes();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    console.log(taskInput.value)
    if (taskInput.value.trim() === '') return;
    
    const li = document.createElement('li');
    
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
        saveTasks();
    };

    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
    saveTasks();
}

function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = Array.from(taskList.children).map(li => li.querySelector('span').textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    savedTasks.forEach(taskText => {
        const li = document.createElement('li');
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
            saveTasks();
        };

        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

function saveNotes() {
    const notesArea = document.getElementById('notesArea');
    localStorage.setItem('notes', notesArea.value);
}

function loadNotes() {
    const notesArea = document.getElementById('notesArea');
    const savedNotes = localStorage.getItem('notes') || '';
    notesArea.value = savedNotes;

    notesArea.addEventListener('input', saveNotes);
}