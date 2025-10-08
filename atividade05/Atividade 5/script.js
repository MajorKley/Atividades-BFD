document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

        // Cria o texto da tarefa
        const span = document.createElement('span');
        span.textContent = taskText;
        listItem.appendChild(span);

        // Container para os botões
        const buttonGroup = document.createElement('div');

        // Botão "Concluído"
        const completeButton = document.createElement('button');
        completeButton.className = 'btn btn-success btn-sm me-2';
        completeButton.textContent = 'Concluído';
        completeButton.onclick = function() {
            span.classList.toggle('completed');
        };

        // Botão "Excluir"
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        buttonGroup.appendChild(completeButton);
        buttonGroup.appendChild(deleteButton);
        listItem.appendChild(buttonGroup);

        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});
