
//ex1
let x = 1, y = 2;
if (x > y) {
    console.log("x is the biggest number");
} else {
    console.log("y is the biggest number");
}

//ex2
let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog == "Chihuahua"){
    console.log("I love Chihuahuas, it’s my favorite dog breed");
}else{
    console.log("I dont care, I prefer cats");
}

//ex3
let number = prompt("type any number");

if(isNaN(number) || number == ""){ 
    console.log("this is not a number");
}else if(number % 2 == 0){
    console.log(number + " is an even number");
}else{
    console.log(number + " is an odd number");
}

//ex4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

let users_count = users.length
switch(users_count) {
    case 0 : 
        console.log("no one is online");
        break;
    case 1 :
        console.log(users[0] + " is online");
        break;
    case 2 :
        console.log(users[0] + " and " + users[1] + " are online");
        break;
    default :
        console.log(users[0] + ", " + users[1] + " and " + (users.length - 2) + " more are online");    
}