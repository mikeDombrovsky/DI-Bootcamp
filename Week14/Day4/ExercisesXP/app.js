import express from "express";
import main_router from "./routes/main.route.js";

const app = express();
app.use(express.json());
app.use(main_router);

app.listen(3000, (err) => console.log(err ? err : "listening on port 3000..."));
