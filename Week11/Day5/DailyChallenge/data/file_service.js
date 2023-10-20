const fs = require('fs');

const PATH = './data/data.json';

async function getData() {
    try {
        return JSON.parse(
            fs.readFileSync(PATH, 'utf8')
        );
    } catch (err) {
        console.log(err);
    }
}

async function setData(data) {
    try {
        fs.writeFileSync(PATH, JSON.stringify(data));
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = { getData, setData };