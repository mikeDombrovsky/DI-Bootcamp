//ex1 Analyze this code, what will be the output ? GUESS: [2,4,6] or error, REAL [2,4,6]
[1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return;
});

//ex2 GUESS: [[1, 2],[0, 1], [2, 3]],  REAL [1, 2, 0, 1, 2, 3] my stupid guess, it concats to first all arrays to one
[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
        return acc.concat(cur);
    },
    [1, 2],
);

//ex3 GUESS: return - [2, 4, 8, 10, 16, 18] output- 1 0 alert(1); 2 1  alert(2); etc
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
});

//ex4.1 take this array modify it to look like this array: [1,2,3,[4],[5]].
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
const newArr = [...[1], ...[2], ...[3], [...[...[4]]], [...[...[5]]]];

//ex4.2 take this array and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const greeting2 = [...greeting[0], ...greeting[1], ...greeting[2]];

//Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.
greeting3 = greeting2.reduce((acc, word) => acc.concat(' ', word));

//Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]
const trapped = [...[...[...[...[...[...[...[...[...[...[...[...[...[...[...[...[...[...[...[...[...[...[...[...[...[3]]]]]]]]]]]]]]]]]]]]]]]]]];