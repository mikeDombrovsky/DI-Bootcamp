// Exercise 1: Random Number
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.
function logEvens() {
    let random = Math.random() * 100;
    for (let i = 0; i < random; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

logEvens();

// Exercise 2: Capitalized Letters
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// Example: capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']
function capitalize(string) {
    let res1 = "";
    let res2 = "";
    for (let i = 0; i < string.length; i++) {

        let letter = string[i];
        if (i % 2 == 0) {
            res1 += letter.toUpperCase();
            res2 += letter.toLowerCase();
        } else {
            res1 += letter.toLowerCase();
            res2 += letter.toUpperCase();
        }
    }
    return [res1, res2];
}

console.log(capitalize("abcdef"));

// Exercise 3 : Is Palindrome ?
//     Instructions
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.
function isPalindrome(string) {
    for (let i; i < string.length; i++) {
        
    }
}