const express = require('express');
const { users_router } = require('./routes/users.route.js');
const { register_router } = require('./routes/register.route.js');
const { login_router } = require('./routes/login.route.js');

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.use('/register', register_router);
app.use('/login', login_router);
app.use('/users', users_router);


app.listen(3000, () => console.log('listening port 3000...'));