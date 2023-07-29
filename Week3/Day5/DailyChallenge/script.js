// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops(Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
let asterisks = "* ";
for (let index = 0; index < 6; index++) {
   console.log(asterisks);
   asterisks += "* ";
}
let buffer = [];
for (let row = 0; row < 6; row++) {
    buffer.push([]);
    for (let column = 0; column < buffer.length; column++){
        buffer[row][column]="* ";
    }
    console.log(buffer[row].join(""));
}