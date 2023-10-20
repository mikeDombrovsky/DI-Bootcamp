const fs = require('fs');

const PATH = './data.json';

async function getData() {
    try {
        return JSON.parse(
            fs.readFileSync(PATH, 'utf8')
        );
    } catch (err) {
        console.log(err);
    }
}

async function setData(results) {
    try {
        fs.writeFileSync(PATH, JSON.stringify(results));
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = { getData, setData };