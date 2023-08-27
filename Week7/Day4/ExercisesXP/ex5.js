//Part 1 The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

//The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a < size drink > juice, containing < first ingredient >, <second ingredient>, <third ingredient>".

//Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
function makeJuice(size) {
    function addIngredients(first, second, third) {
        const div = document.createElement('div');
        div.innerHTML = `
            The client wants a ${size} juice, containing ${first}, ${second}, ${third}
        `;
        document.body.appendChild(div);
    }
    addIngredients('water', 'ice', 'apple juice');
}

makeJuice("Large");

//Part 2 In the makeJuice function, create an empty array named ingredients.

//The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

//Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a < size drink > juice, containing < first ingredient >, <second ingredient>, <third ingredient>".

//The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
function makeJuice2(size) {
    const ingredients = [];
    function addIngredients(first, second, third) {
        ingredients.push(first);
        ingredients.push(second);
        ingredients.push(third);
    }

    function displayJuice() {
        const div = document.createElement('div');
        let message = `The client wants a ${size} juice, containing `;
        for (let ingredient of ingredients) {
            message += `${ingredient}, `
        }
        div.innerHTML = message.substring(0, message.length - 2);
        document.body.appendChild(div);
    }
    addIngredients('water', 'ice', 'apple juice');
    addIngredients('water', 'ice', 'apple juice');
    displayJuice();
}

makeJuice2("Small");