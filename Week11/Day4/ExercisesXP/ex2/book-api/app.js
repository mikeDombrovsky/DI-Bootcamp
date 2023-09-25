const express = require('express');

const app = express();
app.use(express.json());
let increment = 4;

const books = [
    {
        id: 1,
        title: 'The Lord of the Rings',
        author: 'John Ronald Reuel Tolkien',
        publishedYear: 1937
    },
    {
        id: 2,
        title: 'The Hobbit',
        author: 'John Ronald Reuel Tolkien',
        publishedYear: 1954
    },
    {
        id: 3,
        title: 'The Silmarillion',
        author: 'John Ronald Reuel Tolkien',
        publishedYear: 1977
    },
];

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.status(400).json({ error: 'id is not a number' });
    }
    const book = books.find(book => book.id == id);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ error: 'Book not found' })
    }
});

app.post('/api/books', (req, res) => {
    if (req.body.title && req.body.author && req.body.publishedYear) {
        const new_book = req.body;
        new_book.id = increment++;
        books.push(new_book);
        res.status(200).json({ msg: 'added', new_book });
    } else {
        res.status(400).json({ error: 'wrong  body data' });
    }
});

app.listen(5000, () => console.log('listening on port 5000'));