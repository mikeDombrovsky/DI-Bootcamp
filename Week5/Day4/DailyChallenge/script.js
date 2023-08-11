const tasks = [];
const form = document.forms[0];
const input = form.new_task;
const listTasks = document.querySelector("div.listTasks");

function addTask(e) {
    e.preventDefault();
    let value = input.value;
    if (value.match(/^[A-Za-z0-9]+$/)) {
        tasks.push(value);
        const newItem = document.createElement("div");
        newItem.style.borderBottom = "1px solid blue";
        newItem.innerHTML = `
        <button class="remove_btn" onclick="deleteElem(event)">x</button>
        <input onChange="crossOut(event)" type="checkbox" name="checlbox" id="checkbox">
        <label name="checkbox">${value}</label>
        `;
        listTasks.appendChild(newItem);
    }
}

function crossOut(e) {
    if (e.target.checked) {
        e.target.parentNode.lastElementChild.style.textDecoration = "line-through";
        e.target.parentNode.lastElementChild.style.color = "red"
    }else{
        e.target.parentNode.lastElementChild.style.textDecoration = "none";
        e.target.parentNode.lastElementChild.style.color = "black"
    }
}

function deleteElem(e) {
    e.target.parentNode.remove();
}