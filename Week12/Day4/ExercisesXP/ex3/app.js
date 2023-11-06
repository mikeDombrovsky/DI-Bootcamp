import express from "express";
import books_router from "./routes/books.route.js";

const app = express();
app.use(express.json());
app.use("/books", books_router);

app.listen(3000, (err) => console.log(err ? err : "listening on 3000"));
