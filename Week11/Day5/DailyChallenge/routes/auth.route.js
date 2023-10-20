const express = require('express');

const { register, login } = require('../controllers/auth.controller.js');

const register_router = express.Router();

register_router.post('/register', register);
register_router.post('/login', login);


module.exports = { register_router };