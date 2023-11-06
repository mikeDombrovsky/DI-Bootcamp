import { Router } from "express";

const books_router = Router();
const books = [];
let count = 1;

books_router.get("/", (req, res) => {
  res.status(200).json(books);
});

books_router.post("/", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: "wrong request params" });
  }
  try {
    books.push({ id: count++, title, author });
    res.status(200).json(books);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

books_router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return res.status(404).json({ error: "book not found" });
  }
  try {
    book.title = title;
    book.author = author;
    res.status(200).json(books);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

books_router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const i = books.findIndex((book) => book.id === Number(id));
  if (i < 0) {
    return res.status(404).json({ error: "book not found" });
  }
  try {
    books.splice(i, 1);
    res.status(200).json(books);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

export default books_router;
