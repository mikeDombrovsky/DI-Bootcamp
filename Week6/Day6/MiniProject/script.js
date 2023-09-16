const form = document.forms[0];
form.addEventListener('submit', saveTask);
let tasks;
if (localStorage.tasks) {
    console.log(localStorage.tasks);
    tasks = JSON.parse(localStorage.tasks);
}

console.log(tasks);

function saveTask(e) {
    e.preventDefault();
    console.log(e.target);
    const task = {
        title: e.target.name.value,
        description: e.target.desc.value,
        start: e.target.start.value,
        end: e.target.end.value,
        done: false
    }
    let old_tasks = localStorage.tasks;
    console.log(old_tasks);
    if (old_tasks) {
        tasks = JSON.parse(old_tasks);
    }
    tasks.push(task);
    localStorage.tasks = tasks;
    console.log(localStorage.tasks);
    console.log(tasks);
}