const fs = require('fs');

copy('source.txt', 'destination.txt');

async function copy(file_name_from, file_name_to){
    fs.copyFile(file_name_from, file_name_to, err => {
        if(err){
            return console.log(err);
        }
        console.log(`${file_name_from} copied to ${file_name_to}`);
    });
} 