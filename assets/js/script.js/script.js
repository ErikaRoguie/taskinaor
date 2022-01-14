console.dir(window.document);
var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");


var taskFormHandler = function (event) {

    event.preventDefault();
    var taskNameInput = document.querySelector("input [name = 'task-type]").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    // package up data as an object
    var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
    };

  // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";


    //create div to hold task info and add to list item
    var taskInfoE1 = document.createElement("div");
    taskInfoE1.className = "task-info";
    //add HTML content to div
    taskInfoE1.innerHTML = "<h3 class = 'task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    
    listItemEl.appendChild(taskInfoE1);

    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
};

var createTaskE1 = function(taskDataObj){
    //taskDataObj
    {
        name: "Task's name",
        type: "Task's type"
    }
    // create list item
var listItemEl = document.createElement("li");
listItemEl.className = "task-item";

// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");
taskInfoEl.className = "task-info";
taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

listItemEl.appendChild(taskInfoEl);

// add entire list item to list
tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);