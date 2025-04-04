$(document).ready(() => {
    $('#add-task').click(() => {
        let taskText = $('#new-task').val().trim();
        if (!taskText) 
            return;
        $('#todo-list').append(
            `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="task-text" data-bs-toggle="modal" data-bs-target="#taskModal">${taskText}</span>
                <button class="btn btn-danger btn-sm delete-task">Видалити</button>
            </li>`
        );
        $('#new-task').val('');
    });

    $(document).on('click', '.task-text', function() {
        $('#modal-task-text').text($(this).text());
    });

    $(document).on('click', '.delete-task', function(e) {
        e.stopPropagation();
        $(this).closest('li').remove();
    });
});