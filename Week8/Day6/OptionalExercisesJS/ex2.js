/*
Write a javascript function that takes an array of numbers and a target number.

The function should find two different numbers in the array that, when added together, give the target number.

For example: answer([1,2,3], 4) should return [1,3]
*/

function answer(arr, number) {
    let curr;
    for (let i = 0; i < arr.length; i++) {
        curr = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                continue;
            }
            if (curr + arr[j] === number) {
                return [curr, arr[j]];
            }
        }
    }
    return [];
}

console.log(answer([1, 2, 3], 4));