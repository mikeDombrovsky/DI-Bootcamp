const bcrypt = require('bcrypt');
const { getData, setData } = require('../data/file_service.js');

const register = async (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    const users = await getData();
    if (!users) {
        return res.status(500).json({ error: 'cannot read data from file' });
    }

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: 'bcript error' });
        }
        newUser.password = hash;
        users.push(newUser);
    });

    const success = await setData(users);
    if (success) {
        res.status(201).json({ message: 'user successfully registered' });
    } else {
        res.status(500).json({ error: 'cannot write data to file' });
    }
}

const login = (req, res) => {
    const { username, password } = req.body;

}

module.exports = { register, login };