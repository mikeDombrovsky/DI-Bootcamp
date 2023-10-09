const express = require('express');
const { emojiArray } = require('./data.js');

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.get('/emojis', (req, res) => {
    const emojis = emojiArray.map(emoji => {
        const names = emoji.wrongNames;
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
        res.status(200).json({ emojis });
    } else {
        res.status(500).json('something went wrong');
    }
})

app.post('/emojis', (req, res) => {
    const { charecter, name } = req.body;

});

app.listen(3000, () => console.log('listening...'));