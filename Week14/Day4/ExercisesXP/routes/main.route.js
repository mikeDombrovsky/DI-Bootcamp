import { Router } from "express";

const main_router = Router();

main_router.get("/", (req, res) => {
  res.status(200).json({ msg: "Homepage" });
});

main_router.get("/about", (req, res) => {
  res.status(200).json({ msg: "About" });
});

export default main_router;
