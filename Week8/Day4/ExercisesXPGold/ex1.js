//Create a function called printFullName.
// Destructure this object directly from the parameters(ie.Look at the Advanced Object lesson 
//- Part II : Object destructuring used as an assignment to a function)
// The output of the printFullName function should be the exact same as 
//the displayStudentInfo function.(Exercise XP)
function printFullName({first, last}){
    console.log(`Your full name is ${first} ${last}`);
}

printFullName({ first: 'Elie', last: 'Schoppik' });