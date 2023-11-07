import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ msg: "Hello From Express" });
});

app.post("/api/world", (req, res) => {
  const { value } = req.body;
  console.log(req.body);
  res.json({
    msg: "I received your POST request. This is what you sent me: " + value,
  });
});

app.listen(3002, (err) => console.log(err ? err : "listening on port 3002"));
