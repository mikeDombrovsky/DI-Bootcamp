const express = require('express');

const { fetchPosts } = require('./data/dataService.js');

const app = express();
app.use(express.json());

app.get('/api/posts', (req, res) => {

    fetchPosts().then(posts => {
        if (posts) {
            res.status(200).json(posts);
        } else {
            res.status(500).json({ resp: posts });
        }
    }).catch(err => res.status(500).json({ err }));
});

app.listen(5000, () => console.log('listening on port 5000'));