const express = require('express');
const index_router = require('./routes/index.route.js');
const app = express();

app.use(express.json());
app.use('/', index_router);

app.listen(3000, () => console.log('listening on port 3000'));