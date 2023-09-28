const express = require('express');
const { getTasks, setTasks } = require('./read-file.js');


const router = express.Router();


router.get('/', (req, res) => {
    getTasks().then(tasks => {
        if (tasks) {
            console.log(tasks);
            res.json(tasks);
        } else {
            res.status(500).json({ error: 'error during reading json file' })
        }
    });
});

router.get('/:id', async (req, res) => {
    const tasks = await getTasks();
    const task = tasks.find(task => task.id == req.params.id);

    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ error: 'task not found' });
    }
});

router.post('/', async (req, res) => {
    const { title, content } = req.body;
    const tasks = await getTasks();

    if (new_task && new_task.title && new_task.content) {
        const id = tasks.length > 0 ?
            tasks.slice(-1).id + 1
            : 1;

        tasks.push({id, title, content});
        const success = await setTasks(tasks);

        if (success) {
            res.status(201).json({ added: new_task });
        } else {
            res.status(500).json({ error: 'error during writing json file' })
        }
    }
});

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const { title, content } = req.body;
    const tasks = await getTasks();

    const task = tasks.find(task => task.id === id);

    if (task && title && content) {
        task.title = title;
        task.content = content;
        const success = await setTasks(tasks);

        if (success) {
            res.status(201).json({ updated: task });
        } else {
            res.status(500).json({ error: 'error during writing json file' })
        }
    }


});

module.exports = { router };



