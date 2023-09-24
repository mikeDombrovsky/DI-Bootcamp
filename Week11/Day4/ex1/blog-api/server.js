const express = require('express');

const app = express();
app.use(express.json());

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

app.post('/posts', (req, res) => {
    if (req.body.title && req.body.content) {
        const post = {
            id: data[data.length - 1].id + 1,
            title: req.body.title,
            content: req.body.content
        }
        data.push(post);
        res.status(201).json(post);
    } else {
        res.status(400).json({ error: 'wrong body content' });
    }
});

app.put('/posts/:id', (req, res) => {
    const post = findPost(req.params.id);

    if (post && req.body.title && req.body.content) {
        post.title = req.body.title;
        post.content = req.body.content;
        res.json(post);

    } else if (!post) {
        res.status(404).json({ error: 'post not found' });

    } else {
        res.status(400).json({ error: 'wrong body content' });
    }
});

app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    console.log(typeof id);

    if (isNaN(id)) {
        res.status(400).json({ error: 'parameter is not a number' });
        return;
    }
    const i = data.findIndex(post => post.id == id);

    if (i > 0) {
        const deleted = data.splice(i, 1);
        res.status(200).json({ msg: `post with id ${id} was deleted`, deleted });
    } else {
        res.status(400).json({ error: 'wrong id' });
    }
});

app.get('*', (req, res) => res.status(400).json({ error: 'wrong path' }));

function findPost(id) {
    return data.find(post => post.id == id);
}

app.listen(5000, () => console.log('listenning on port 5000'));