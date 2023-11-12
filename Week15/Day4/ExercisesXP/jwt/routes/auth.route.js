import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { Router } from "express";

const auth_router = Router();

const users = [];
const secretKey = "12345";

auth_router.post("/register", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);
  if (user) {
    return res.status(409).json({ msg: "username already taken" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    id: users.length + 1,
    username,
    password: hashedPassword,
  };
  users.push(newUser);

  const token = jwt.sign({ id: newUser.id, username }, secretKey, {
    expiresIn: "1h",
  });

  res.cookie("token", token, { httpOnly: true });
  res.status(201).json({ msg: "user registered" });
});

auth_router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user, username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ msg: "invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, username }, secretKey, {
    expiresIn: "1h",
  });

  res.cookie("token", token, { httpOnly: true });
  res.status(200).json({ msg: "login success" });
});

auth_router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ msg: "logged out" });
});

export default auth_router;
