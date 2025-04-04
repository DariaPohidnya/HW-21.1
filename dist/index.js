"use strict";

$(document).ready(function () {
  $('#add-task').click(function () {
    var taskText = $('#new-task').val().trim();
    if (!taskText) return;
    $('#todo-list').append("<li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                <span class=\"task-text\" data-bs-toggle=\"modal\" data-bs-target=\"#taskModal\">".concat(taskText, "</span>\n                <button class=\"btn btn-danger btn-sm delete-task\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n            </li>"));
    $('#new-task').val('');
  });
  $(document).on('click', '.task-text', function () {
    $('#modal-task-text').text($(this).text());
  });
  $(document).on('click', '.delete-task', function (e) {
    e.stopPropagation();
    $(this).closest('li').remove();
  });
});