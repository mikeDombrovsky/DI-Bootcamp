import fs from 'fs';

export function readFile(file_name) {
    fs.readFile(file_name, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
}

