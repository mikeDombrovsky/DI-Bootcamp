const tasks = [];
let taksIdCount = 0;
const form = document.forms[0];
const input = form.new_task_input;
const listTasks = document.querySelector("div.listTasks");
const clearBtn = document.querySelector("a#clear_btn");

function addTask(e) {
    e.preventDefault();
    let value = input.value;
    if (value.match(/^.+.*$/)) {
        let taskObj = {
            task_id: taksIdCount,
            text: value,
            done: false,
        };
        tasks[taksIdCount] = taskObj;
        taksIdCount++;
        const newItem = document.createElement("div");
        newItem.setAttribute("task_id", taskObj.task_id);
        newItem.setAttribute("data-task-id", taskObj.task_id);
        newItem.classList.add("mx-3", "my-3", "py-2", "d-flex", "align-items-center");

        newItem.style.borderBottom = "1px solid lightblue";
        newItem.innerHTML = `
        <button class="btn btn-danger btn-sm me-1" onclick="deleteElem(event)"><i style="pointer-events: none" class="fa-solid fa-x fa-2xs"></i></button>
        <input class="me-1" onChange="doneTask(event)" type="checkbox" name="checlbox" id="checkbox">
        <label name="checkbox">${value}</label>
        `;
        listTasks.appendChild(newItem);
        input.value = "";

        if(tasks.length > 0){
            clearBtn.classList.replace("d-none", "d-flex");
        }
    }
}

function doneTask(e) {
   
    const parentDiv = e.target.parentNode;
    const id = parentDiv.getAttribute("task_id"); 
    const taskObj = tasks[id];

    if (e.target.checked) {
        taskObj.done = true;
        parentDiv.lastElementChild.style.textDecoration = "line-through";
        parentDiv.lastElementChild.style.color = "red"
    } else {
        taskObj.done = false;
        parentDiv.lastElementChild.style.textDecoration = "none";
        parentDiv.lastElementChild.style.color = "black"
    }
}

function deleteElem(e) {
    
    const id = e.target.parentNode.getAttribute("task_id");
    if(id != null){
        tasks.splice(id, 1);   
        e.target.parentNode.remove();
    }
   
    if (tasks.length == 0) {
        clearBtn.classList.replace("d-flex", "d-none");
    }
}

function clearAllTasks(){
    tasks.length = 0;
    const taskList = listTasks.querySelectorAll("div");
    for(let task of taskList){
        task.remove();
    }
    clearBtn.classList.replace("d-flex", "d-none");
    taksIdCount = 0;
}