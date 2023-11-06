import { Router } from "express";

const todos_router = Router();

const todos = [];

todos_router.get("/", (req, res) => {
  res.status(200).json(todos);
});

todos_router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "something missed" });
  }
  try {
    todos.push({ id: todos.length + 1, title });
    res.status(200).json(todos);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

todos_router.put("/:id", (req, res) => {
  const { title } = req.body;
  const { id } = req.params;

  if (!title || !id) {
    return res.status(400).json({ error: "wrong request params" });
  }

  const todo = todos.find((todo) => todo.id === Number(id));
  if (!todo) {
    return res.status(404).json({ error: "todo not found" });
  }

  try {
    todo.title = title;
    res.status(200).json(todos);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

todos_router.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({ error: "wrong request params" });
  }

  const i = todos.findIndex((todo) => todo.id === Number(id));
  if (i < 0) {
    return res.status(404).json({ error: "todo not found" });
  }

  try {
    todos.splice(i, 1);
    res.status(200).json(todos);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

export { todos_router };
