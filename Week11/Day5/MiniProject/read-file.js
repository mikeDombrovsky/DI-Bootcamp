const fs = require('fs');

const TASKS_PATH = './tasks.json';

async function getTasks() {
    try {
        return JSON.parse(
            fs.readFileSync(TASKS_PATH, 'utf8')
        );
    } catch (err) {
        console.log(err);
    }
}

async function setTasks(tasks) {
    try {
        fs.writeFileSync(TASKS_PATH, JSON.stringify(tasks));
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = { getTasks, setTasks };