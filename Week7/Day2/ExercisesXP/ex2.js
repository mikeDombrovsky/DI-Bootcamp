function winBattle() {
    return true;
}
//1 Transform the winBattle() function to an arrow function.
let winBattle2 = () => true;

//2 Create a variable called experiencePoints.
let experiencePoints;

//3 Assign to this variable, a ternary operator. If winBattle() is true, 
//the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
experiencePoints = winBattle2() ? 10 : 1;

//4 Console.log the experiencePoints variable.
console.log(experiencePoints);