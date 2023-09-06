/*
Clean the room function:
Given an input of[1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20],
make a function that organizes these, into individual array that is ordered.
For example answer(ArrayFromAbove) should return: 
[[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591].
*/

const arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
console.log(answer(arr));

function answer(arr) {
    arr.sort((num1, num2) => num1 - num2);

    let res = [];
    let inner = [];
    for (let i = 0; i < arr.length; i++) {

        if (isNext(arr, i) && isNextSame(arr, i)) {
            inner.push(arr[i]);
        } else {
            if (inner.length > 0) {
                inner.push(arr[i]);
                res.push([...inner])
                inner = [];
            } else {
                res.push(arr[i])
            }
        }
    }
    return res;
}

function isNext(arr, i) {
    return i != arr.length - 1;
}

function isNextSame(arr, i){
    return arr[i] === arr[i + 1];
}

