
//Using this object :
let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}
//Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. 
//Use the forEach method.
const displayGroceries = () => groceries.fruits.forEach(fruit => console.log(fruit));

/*Create another arrow function named cloneGroceries.
In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?

In the function, create a variable named shopping that is equal to the groceries variable.
Change the value of the totalPrice key to 35$.Will we also see this modification in the shopping object ? Why ?
Change the value of the paid key to false.Will we also see this modification in the shopping object ? Why ?
*/
const cloneGroceries = () => {
    let user = client;
    client = 'Betty'; //no, we will not see changes because it is not a reference to object, it is primitive 
    let shopping = groceries;
    shopping.totalPrice = '35$';// we will also see this modification in the shopping object, because it is a reference to one object
    groceries.paid = false;// Yes, we will see this modification - it is one object.
}
cloneGroceries();