document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('lista-tarefas');


    function addTask(taskText) {
        if (taskText.trim() === '') {
            alert('Por favor, insira uma tarefa.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const completeBtn = document.createElement('button');
        completeBtn.className = 'btn btn-success btn-sm';
        completeBtn.innerHTML = '<i class="fas fa-check"></i> Concluir';
        completeBtn.addEventListener('click', () => {
            taskSpan.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i> Excluir';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(completeBtn);
        listItem.appendChild(deleteBtn);

        taskList.appendChild(listItem);
        newTaskInput.value = '';
    }

    addTaskBtn.addEventListener('click', () => {
        addTask(newTaskInput.value);
    });


    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask(newTaskInput.value);
        }
    });
});
