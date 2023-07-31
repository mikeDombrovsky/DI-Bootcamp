//  Exercise 1 : Information
// Part I: function with no parameters
// Create a function called infoAboutMe() that takes no parameter.
function infoAboutMe() {
    // The function should console.log a sentence about you(ie.your name, age, hobbies ect…).
    console.log(`I'm Mike, I'm 35 and I like pretending to code`);
}
// Call the function.
infoAboutMe();

// Part II: function with three parameters
// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    // The function should console.log a sentence about the person(ie. “You name is …, you are..years old, your favorite color is …”)
    console.log(`You name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`);
}

// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow")
infoAboutPerson("Josh", 12, "yellow");


// Exercise 2 : Tips
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.
function calculateTip() {
    // Inside the function, use prompt to ask John for the amount of the bill.
    let amount = prompt('What is the amount of the bill, Johny?');
    if (isNaN(amount)) {
        console.log("it is not a f-g number, Johny!");
        return;
    } else {
        amount = Number.parseInt(amount);
    }
    // If the bill is less than $50, tip 20 %.
    if (amount < 50) {
        console.log(amount + amount * 0.2);
        // If the bill is between $50 and $200, tip 15 %.
    } else if (amount <= 200) {
        console.log(amount + amount * 0.15);
        // If the bill is more than $200, tip 10 %.
    } else if (amount > 200) {
        console.log(amount + amount * 0.1);
    }
}
//     Console.log the tip amount and the final bill(bill + tip).
// calculateTip();

//  Exercise 3 : Find The Numbers Divisible By 23
// Create a function call isDivisible() that takes no parameter.
function isDivisible(divisor = 23) {
    let sum = 0;
    // In the function, loop through numbers 0 to 500.
    for (let i = 0; i < 500; i++) {
        // Console.log all the numbers divisible by 23.
        if (i % divisor == 0) {
            console.log(i);
            sum += i;
        }
    }
    // At the end, console.log the sum of all numbers that are divisible by 23.
    console.log(sum);
}
// Outcome: 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum: 5313

// isDivisible();

// Bonus: Add a parameter divisor to the function.

// isDivisible(45);

//  Exercise 4 : Shopping List
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
let shoppingList = ["banana", "orange", "apple"];
// Create a function called myBill() that takes no parameters.
function myBill() {
    let totalPrice = 0;
    for (let item of shoppingList) {
        // The item must be in stock.
        if (item in stock && stock[item] > 0) {
            console.log(totalPrice, item, prices[item], stock[item]);
            // find out the price in the prices object.
            totalPrice += prices[item];
            // Bonus: If the item is in stock, decrease the item’s stock by 1
            stock[item]--;
        }
    }
    // The function should return the total price of your shoppingList
    return totalPrice;
}

// console.log(myBill());
// console.log(stock);

//Exercise 5 : What’s In My Wallet ?
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments:
// an item price
// and an array representing the amount of change in your pocket.
function changeEnough(itemPrice, amountOfChange) {
    let quarters = 0.25 * amountOfChange[0];
    let dimes = 0.10 * amountOfChange[1];
    let nickels = 0.05 * amountOfChange[2];
    let pennys = 0.01 * amountOfChange[3];
    let sum = quarters + dimes + nickels + pennys;
    if (sum > itemPrice) {
        return true;
    }
    return false;
}

// console.log(changeEnough(14.11, [2, 100, 0, 0]));
// console.log(changeEnough(0.75, [0, 0, 20, 5]));

// Exercise 6 : Vacations Costs
//Define a function called hotelCost()
function hotelCost() {
    let number_of_nights;
    do {
        number_of_nights = prompt("How many nights would you like to stay in the hotel?");
    } while (number_of_nights == "" || number_of_nights == null || isNaN(number_of_nights))

    return 140 * number_of_nights;
}

// console.log(hotelCost());

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination: 300$
function planeRideCost() {
    let destination;
    do {
        destination = prompt("What is your destination?");
    } while (destination == null || !isNaN(destination))
    if (destination == "London") {
        return 183;
    }
    if (destination == "Paris") {
        return 220;
    } else {
        return 300;
    }
}

// planeRideCost();

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car.The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5 % discount.
// The function should return the total price of the car rental.
function rentalCarCost() {
    let days;
    do {
        days = prompt("How many days would you like to rent the car?");
    } while (days === null || isNaN(days))
    let sum = 40 * days;
    if (days > 10) {
        return sum - sum * 0.05;
    }
    return sum;
}
// console.log(rentalCarCost());

function totalVacationCost(){
    return hotelCost() + planeRideCost() + rentalCarCost();
}

console.log(totalVacationCost());