const fs = require('fs');

async function readFile(file_name) {

    fs.readFile(file_name, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
}

async function writeFile(file_name, content) {
    fs.writeFile(file_name, content, err => {
        if (err) {
            console.log(err);
            return;//?
        }
    })
}

module.exports = { readFile, writeFile }