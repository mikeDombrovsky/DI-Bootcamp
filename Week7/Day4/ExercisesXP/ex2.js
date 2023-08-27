//Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
//1 First, use function declaration and invoke it.
function parseKgToGramms(weight){
    return weight * 1000;
};
parseKgToGramms(2);

//Then, use function expression and invoke it.
const parse2 = function(weight){
    return weight * 1000;
}
parse2(3);
//function declaration => we use function name,  
//function expression we use variable and asign function without name or arrow function
const pars3 = weight => weight * 1000;
console.log(pars3(4));