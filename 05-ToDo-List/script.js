let taskInput = document.getElementById("taskInput");

let taskList = document.getElementById("taskList");

loadTasks();

function addTask(){

    if(taskInput.value === ""){

        alert("Please enter a task.");

        return;

    }

    let li = document.createElement("li");

    let span = document.createElement("span");

    span.textContent = taskInput.value;

    span.className = "task";

    let buttons = document.createElement("div");

    buttons.className = "buttons";

    let completeBtn = document.createElement("button");

    completeBtn.textContent = "Complete";

    completeBtn.className = "complete";

    completeBtn.onclick = function(){

        span.classList.toggle("completed");

        saveTasks();

    };

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.className = "delete";

    deleteBtn.onclick = function(){

        li.remove();

        saveTasks();

    };

    buttons.appendChild(completeBtn);

    buttons.appendChild(deleteBtn);

    li.appendChild(span);

    li.appendChild(buttons);

    taskList.appendChild(li);

    taskInput.value = "";

    saveTasks();

}

function saveTasks(){

    localStorage.setItem("tasks", taskList.innerHTML);

}

function loadTasks(){

    let savedTasks = localStorage.getItem("tasks");

    if(savedTasks){

        taskList.innerHTML = savedTasks;

        addEvents();

    }

}

function addEvents(){

    let completeButtons = document.querySelectorAll(".complete");

    let deleteButtons = document.querySelectorAll(".delete");

    completeButtons.forEach(
        function(button){ 
            button.onclick = function(){

            button.parentElement.previousElementSibling.classList.toggle("completed");

            saveTasks();

        };

    });

    deleteButtons.forEach(
        function(button){
           button.onclick = function(){

            button.parentElement.parentElement.remove();

            saveTasks();

        };

    });

}