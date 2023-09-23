const express = require('express');

const app = express();

const data = [
    {
        id: 1,
        title: 'Shitpost',
        content: 'Some shit'
    },
    {
        id: 2,
        title: 'Shitpost',
        content: 'Some shit'
    },
    {
        id: 3,
        title: 'Shitpost',
        content: 'Some shit'
    },
];

app.get('/posts', (req, res) => {
    res.json(data);
});

app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = findPost(id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('post not found');
    }
});

app.get('*', (req, res) => res.status(400).json({ error: 'wrong path' }));

function findPost(id) {
    return data.find(post => post.id == id);
}

app.listen(5000, () => console.log('listenning on port 5000'));