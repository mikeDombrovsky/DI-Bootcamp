//ex1 Analyze the code below. What will be the output? `I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)`
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const { name, location: { country, city, coordinates: [lat, lng] } } = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


//ex2 Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'
function displayStudentInfo(objUser) {
    //destructuring
    const { first, last } = objUser;
    console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' });

//ex3 Using this object
const users = { user1: 18273, user2: 92833, user3: 90315 }

//1 Using methods taught in class, turn the users object into an array:
// [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users_arr = Object.entries(users);
console.log(users_arr);

//2 Modify the outcome of part 1, by multipling the user’s ID by 2.
const users_arr2 = Object.entries(users).map(([username, id]) => [username, id * 2]);
console.log(users_arr2);

//ex4 Analyze the code below. What will be the output?
// GUESS: Person, REAL: object.  So.. we need use obj.constructor.name instead
class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member);

//ex5
class Dog {
    constructor(name) {
        this.name = name;
    }
};
// Analyze the options below. Which constructor will successfully extend the Dog class?
// GUESS - 2 and 4 but 2 uses super properly. By the way 1 also wont throw error.
// 1
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.size = size;
//     }
// };
// 2
class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
};
// 3
// class Labrador extends Dog {
//     constructor(size) {
//         super(name);
//         this.size = size;
//     }
// };
// 4
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
// };

console.log(new Labrador("killer", 30));

//ex6.1 Evaluate these (ie True or False)  both obj and array are reference type, thus unique
console.log([2] === [2]);//false
console.log({} === {});//false

//ex6.2 What is, for each object below, the value of the property number and why?
const object1 = { number: 5 }; //number=5 
const object2 = object1; //number=5 the same obj, second link
const object3 = object2; //number=5 the same obj, third link
const object4 = { number: 5 };//another obj, number=5 

object1.number = 4;//object1 , object2, object3 are links to one, so in them number=4 
console.log(object2.number)//number=4 
console.log(object3.number)//number=4 
console.log(object4.number)//number=5

//ex7 Create a class Animal with the attributes name, type and color. 
//The type is the animal type, for example: dog, cat, dolphin ect …
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

//2 Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). 
//This method takes a parameter: the sound the animal makes, and returns the details 
//of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
    sound(sound){
        return ` ${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color},`;
    }
}

//3 Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls
//the sound method that “moos” her information.example: Moooo I'm a cow, named Lily and I'm brown and white
const farmerCow = new Mamal('Burenka', 'Cow', 'White and black');
console.log(farmerCow.sound('Moooo'));