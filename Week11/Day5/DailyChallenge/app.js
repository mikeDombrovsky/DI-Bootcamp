const express = require('express');
const { users_router } = require('./routes/users.route.js');
const { auth_router } = require('./routes/auth.route.js');

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.use('/', auth_router);
app.use('/users', users_router);


app.listen(3000, () => console.log('listening port 3000...'));