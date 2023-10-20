const express = require('express');

const { getUsers, getUserById, updateUser } = require('../controllers/users.controller.js');

const users_router = express.Router();

users_router.get('/users', getUsers);
users_router.get('/users/:id', getUserById);
users_router.put('/users/:id', updateUser);


module.exports = { users_router };