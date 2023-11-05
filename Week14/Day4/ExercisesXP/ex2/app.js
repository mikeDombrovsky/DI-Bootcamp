import express from "express";

const app = express();

app.use(express.json());

app.listen(3000, (err) => console.log(err ? err : "listening on port 3000"));
