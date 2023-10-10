const express = require('express');
const { emojiArray } = require('./data.js');

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.get('/emojis', (req, res) => {
    const emojis = emojiArray.map(emoji => {
        const names = [...emoji.wrongNames];
        const { id, character } = emoji;

        names.push(emoji.shortName);
        names.sort();

        return {
            id,
            character,
            names
        }
    });

    if (emojis) {
        res.status(200).json(emojis);
    } else {
        res.status(500).json('something went wrong');
    }
})

app.post('/emojis/:id', (req, res) => {
    const { name } = req.body;
    let { id } = req.params;
    id = Number(id);
    const emojiObj = emojiArray.find(emoji => emoji.id == id);
    if (!emojiObj) {
        res.status(404).json({ error: 'emoji not found' });
        return;
    }
    const { shortName } = emojiObj;

    if (shortName === name) {
        res.status(200).json({ isTrue: true });
    } else {
        res.status(200).json({ isTrue: false });
    }
});


app.listen(3000, () => console.log('listening port 3000...'));