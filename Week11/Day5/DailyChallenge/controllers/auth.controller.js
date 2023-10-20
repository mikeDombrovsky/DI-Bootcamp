const bcrypt = require('bcrypt');
const { getData, setData } = require('../data/file_service.js');

const register = async (req, res) => {
    const newUser = req.body;
    const users = await getData();

    if (!users) {
        return res.status(500).json({ error: 'Cannot read data from file' });
    }

    if (users.find(user => user.userName === newUser.userName || user.email === newUser.email)) {
        return res.status(409).json({ error: 'User with these credentials already exists' });
    }

    bcrypt.hash(newUser.password, 10, async (err, hash) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Something went wrong' });
        }
        newUser.password = hash;
        users.push(newUser);

        const success = await setData(users);
        if (success) {
            res.status(201).json({ message: 'User successfully registered' });
        } else {
            res.status(500).json({ error: 'Cannot write data to file' });
        }
    });
}

const login = async (req, res) => {
    const { userName, password } = req.body;

    const users = await getData();

    if (!users) {
        return res.status(500).json({ error: 'Cannot read data from file' });
    }
    const user = users.find(user => user.userName === userName);
    if (!user) {
        return res.status(404).json({ error: 'Username is not registered' });
    }

    bcrypt.compare(password, user.password, async (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Something went wrong' });
        }
        if (result) {
            res.status(200).json({ message: `Hi, ${userName}! Welcome back again!` });
        } else {
            res.status(409).json({ error: 'Wrong user credentials' });
        }
    });
}

module.exports = { register, login };