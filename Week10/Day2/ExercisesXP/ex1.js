/*

Create a function called compareToTen(num) that takes a number as an argument.
The function should return a Promise:
the promise resolves if the argument is less than or equal to 10
the promise rejects if argument is greater than 10.

*/

function compareToTen(num) {
    return new Promise((res, rej) =>
        num <= 10 ?
            res('num <= 10') : rej('num > 10'));
}

compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));