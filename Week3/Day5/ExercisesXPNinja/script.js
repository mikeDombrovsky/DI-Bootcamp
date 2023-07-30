// Exercise 1 : Checking The BMI
// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// Create two objects, each object should hold a person’s details.Here are the details:
// FullName
// Mass
// Height

// Each object should also have a key which value is a function (ie.A method), that calculates the Body Mass Index(BMI) of each person

// Outside of the objects, create a JS function that compares the BMI of both objects.

// Display the name of the person who has the largest BMI.
const details_1 = {
    fullname: "Ivan Ivanovich",
    mass: 100,
    height: 190,
    index: function () {
        return this.mass / this.height;
    }
}

const details_2 = {
    fullname: "Petr Petrovich",
    mass: 110,
    height: 180,
    index: function () {
        return this.mass / this.height;
    }
}

function sayWhoIsFatty(object1, object2) {
    if (object1.index() > object2.index()) {
        return object1.fullname;
    } else {
        return object2.fullname;
    }
}

console.log(sayWhoIsFatty(details_1, details_2));

// Exercise 2 : Grade Average
// Hint:
// - This Exercise is trickier then the others.You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// Create a function called findAvg(gradesList) that takes an argument called gradesList.
//     Bonus Try and split parts 1, 2 and 3, 4 of this exercise to two separate functions.
// Hint One function must call the other;
let myGradesList = [65, 65, 65, 66];
isPassed(myGradesList);

function isPassed(gradesList) {
    // If the average is above 65 let the user know they passed
    if (findAvg(gradesList) > 65) {
        console.log("You passed this one");
    } else {
        // If the average is below 65 let the user know they failed and must repeat the course.
        console.log("You faied, repeat course or die");
    }
}
// Your function must calculate and console.log the average.
function findAvg(gradesList) {
    let sum = 0;
    for (number of gradesList) {
        sum += number;
    }
    console.log(sum / gradesList.length);
    return sum / gradesList.length;
}





