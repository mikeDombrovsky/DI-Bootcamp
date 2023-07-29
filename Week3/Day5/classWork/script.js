for (let i = 0; i < 10; i++) {
    // console.log("Zalooping at position " + i);
}

const arr = [1, 2, 3, 4];

for (let i = 0; i < 4; i++) {
    // console.log(arr[i]);
}

//ex1 
for (let i = 0; i < 15; i++) {
    let message = (i % 2 === 0) ? i + " is even" : i + " is odd";
    // console.log(message);
}

//FOR IN LOOP for objects
const person = { fname: "John", lname: "Poopy", age: 22 }

for (let x in person) {
    // console.log("the key is " + x + " and value is " + person[x]);
}

//FOR OF LOOP
const colors = ["black", "red", "white"];
for (let color of colors) {
    console.log(color);
}

//while
let n = 0;
while (n < 3) {
    console.log(n);
    n++;
}

// let username = prompt("type your username");

// while (username !== "boss") {
// console.log("wrong name");
// username = prompt("type your username");
// }
// alert("hi boss!")

let username;
// do {
//     username = prompt("username");
// } while (username !== "koko") {

// }

//ex2
// 1. Write a JavaScript for loop that will go through the variable names.
let names = ["john", "sarah", 23, "Rudolf", 34]
for (let i = 0; i < 15; i++) {
    // if the item is not a string, pass.
    if (!(names[i] instanceof String || typeof names[i] === "string")) {
        continue;
    }
    // if the item is a string, check if its first letter is in uppercase.If not, change it to uppercase and then display the name.
    else {
        let name = names[i];
        let first_letter = name.charAt(0);
        let lower_case_name = name.toLowerCase();
        if(name === lower_case_name){
            names[i] = name.replace(first_letter, first_letter.toUpperCase())
        } 
        // console.log(message);
        console.log(names[i]);
    }
   
}

// 2. Write a JavaScript for loop that will go through the variable names
for(let item of names){
    // if the item is not a string, go out of the loop.
    if (!(item instanceof String || typeof item === "string")){
        break;
    }else{
    // if the item is a string, display it.
    console.log(item);
    }
}                       

