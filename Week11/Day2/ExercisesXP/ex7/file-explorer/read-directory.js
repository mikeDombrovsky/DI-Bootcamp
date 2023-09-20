const fs = require('fs');

fs.readdir('.', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        for (let file of files) {
            console.log(file);
        }
    }
})