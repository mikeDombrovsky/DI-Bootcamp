const express = require('express');

const { fetchPosts } = require('./data/dataService.js');

const app = express();
app.use(express.json());

app.get('/api/posts', async (req, res) => {
    try {
        const resp = await fetchPosts();
        const data = await resp.data;
        console.log(data);
        if (resp.statusCode === 200) {
            res.status(200).json({ posts: data });
        }

    } catch (err) {
        // next(err)
        res.status(500).json({ err });
    }
});

app.listen(5000, () => console.log('listening on port 5000'));