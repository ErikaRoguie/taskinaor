console.dir(window.document);
var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function (event) {

    event.preventDefault();
    var taskNameInput = document.querySelector("input [name = 'task-type]").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";


    //create div to hold task info and add to list item
    var taskInfoE1 = document.createElement("div");
    taskInfoE1.className = "task-info";
    //add HTML content to div
    taskInfoE1.innerHTML = "<h3 class = 'task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    
    listItemEl.appendChild(taskInfoE1);

    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);