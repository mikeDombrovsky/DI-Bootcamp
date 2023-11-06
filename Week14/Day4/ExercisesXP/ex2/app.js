import express from "express";
import { todos_router } from "./routes/todos.route.js";

const app = express();

app.use(express.json());
app.use("/todos",todos_router);

app.listen(3000, (err) => console.log(err ? err : "listening on port 3000"));
