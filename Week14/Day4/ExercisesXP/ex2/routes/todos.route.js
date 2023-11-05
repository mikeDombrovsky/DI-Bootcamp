import { Router } from "express";

const todos_router = Router();

todos_router.get("/", (req, res) => {
  res.status(200).json({ msg: "ok" });
});
