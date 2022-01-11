console.dir(window.document);
var buttonEl = document.querySelector("#save-tasks");
var taskToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function () {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);