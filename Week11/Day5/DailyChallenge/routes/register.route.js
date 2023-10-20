const express = require('express');

const { register } = require('../controllers/register.controller.js');

const register_router = express.Router();

register_router.post('/', register);

module.exports = { register_router };