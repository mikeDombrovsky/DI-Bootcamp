const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
//1 Write a JavaScript program that displays the colors in the following order :
// “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
colors.forEach((color, i) => {
    console.log(`${i}# choice is ${color}`);
});

//Check if at least one element of the array is equal to the value “Violet”.
// If yes, console.log("Yeah"), else console.log("No...")
colors.some(color => {
    if (color == 'Violet') {
        console.log('Yeah');
        return true;
    }
    console.log("No...");
});