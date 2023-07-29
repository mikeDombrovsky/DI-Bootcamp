// Exercise 1 : List Of People
const people = ["Greg", "Mary", "Devon", "James"];
// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
people.shift();
console.log(people);// ['Mary', 'Devon', 'James']
// Write code to replace “James” to “Jason”.
let i = people.indexOf("James");
people.splice(i, 1, "Jason");
console.log(people);// ['Mary', 'Devon', 'Jason']
// Write code to add your name to the end of the people array.
people.push("Michael");
console.log(people);// ['Mary', 'Devon', 'Jason', 'Michael']
// Write code that console.logs Mary’s index.take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));// 0
// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
let people_copy = people.slice(0, -1);
console.log(people_copy);// ['Mary', 'Devon', 'Jason']
// Write code that gives the index of “Foo”. Why does it return -1 ?
people.indexOf("foo");// -1 means that foo doesn't exist in this array
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array ?
let last = people[people.length - 1];
console.log(last);// Michael


// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
for (let name of people) {
    console.log(name);
    if (name === "Devon") {
        break;
    }
}

// Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
const colors = ["white", "pale", "beige", "black"]
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
const suffixes = ["st", "nd", "rd", "th", "th", "th", "th"];
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}
//  Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt(ie.Use the typeof method)
// let number;
// do {
//     number = prompt("type a number that is not smaller than 10, please");
//     console.log(`type of number is ${typeof number}`);
//     console.log(number);
//     console.log(`is NAN?${isNaN(number)}`);

//     number = Number.parseInt(number);

//     if (isNaN(number)) {
//         alert("that is not a number");
//     }
//     console.log(`type of number is ${typeof number}`);
//     console.log(number);
//     console.log(`is NAN?${isNaN(number)}`);
//     console.log("----------");
//     // While the number is smaller than 10 continue asking the user for a new number.
//     // Tip : Which while loop is more relevant for this situation ?
// } while (isNaN(number) || number < 10)

// Exercise 4 : Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}
// Console.log the number of floors in the building.
console.log(building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent.If it is, than increase Dan’s rent to 1200.
if ((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]) > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

// Exercise 5 : Family
// Create an object called family with a few key value pairs.
const family = {
    family_name: "Dombrovski",
    father_name: "Antons",
    mather_name:"Tatiana",
    children_number: 12
}

// Using a for in loop, console.log the keys of the object.
for( key in family){
    console.log(key);
}

// Using a for in loop, console.log the values of the object.
for (key in family) {
    console.log(family[key]);
}

// Exercise 6 : Rudolf
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
for( k in details){
    console.log(`${k} ${details[k]}`);
}

// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society.The society’s name will be the first letter of each of their names sorted in alphabetical order.
//     Hint: a string is an array of letters
// Console.log the name of their secret society.The output should be “ABJKPS”
let society = [];
for(n of names){
    society.push(n[0]);
}
society.sort();
console.log(society.join(""));