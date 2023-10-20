const express = require('express');
const index_router = express.Router();

index_router.get('/', (req, res) => res.status(200).json({ message: 'hi from homepage' }));
index_router.get('/about', (req, res) => res.status(200).json({ message: 'hi from about page' }));

module.exports = { index_router };