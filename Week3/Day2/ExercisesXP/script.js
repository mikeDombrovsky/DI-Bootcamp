
//ex1
let favorite_food = "Beef stew";
let favorite_meal = "dinner";

console.log("I eat " + favorite_food + " at every " + favorite_meal);

//ex2 part I
//1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;

//2
myWatchedSeries.splice(2, 1, "and the big bang theory");
let myWatchedSeriesSentence = myWatchedSeries[0] + ", " + myWatchedSeries[1] + ", " + myWatchedSeries[2];
//3
console.log("I watched " + myWatchedSeriesLength + " series : " + myWatchedSeriesSentence);

//ex2 part II
//1 Change “the big bang theory” to “friends”.
myWatchedSeries.splice(2, 1, "friends");

//2 Add, at the end of the array my favorite series
myWatchedSeries.push("suits");

//3 Add, at the beginning your favorite series.
myWatchedSeries.unshift("vikings");

//4 Delete the series “black mirror”.
myWatchedSeries.splice(1, 1);

//5 Console.log the third letter of the series “money heist”.
let series = myWatchedSeries[1];
let letter_3 = series.charAt(2);
console.log(letter_3);

//6 console.log the myWatchedSeries array
console.log(myWatchedSeries);

//ex3
//1 Store a celsius temperature into a variable. °C °F
let celsius_temp = 35;
//2 Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
let fahrengheit_temp = celsius_temp / 5 * 9 + 32;
console.log(celsius_temp + '°C is ' + fahrengheit_temp + '°F');

//ex4
let c;
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: 55
// Actual: 55

a = 2;

console.log(a + b); //second expression
// Prediction: 23
// Actual: 23

// c - is undefined
console.log(3 + 4 + '5');
// Prediction: 12, in my opinion js will start from left and assume that if we want
// to add a string to a number, nummer is first so string must be converted to number.
// Actual: 75

//ex5
typeof (15);
// Prediction: number
// Actual: number

typeof (5.5)
// Prediction: double
// Actual: number

typeof (NaN)
// Prediction: NaN
// Actual: number

typeof ("hello")
// Prediction: string
// Actual: string

typeof (true)
// Prediction: boolean
// Actual: boolean

typeof (1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: "hamburgers"
// Actual: "hamburgers"

"hamburgers" - "s"
// Prediction: error
// Actual: NaN

"1" + "3"
// Prediction: "13"
// Actual: "13"

"1" - "3"
// Prediction: NaN
// Actual: -2

"johnny" + 5
// Prediction: "johnny5"
// Actual: "johnny5"

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "hello"
// Prediction: NaN
// Actual: Nan

1 != 1
// Prediction: false
// Actual: 

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual:

//ex6
5 + "34"
// Prediction: 39
// Actual: 534

5 - "4"
// Prediction: NaN
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 0
// Actual: 5

"Java" + "Script"
// Prediction: "JavaScript"
// Actual:

" " + " "
// Prediction: "  " invisible
// Actual:  "  " invisible

" " + 0
// Prediction: " 0"
// Actual: " 0"

true + true
// Prediction: no idea
// Actual: 2

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN
console.log("Bob" - "bill");