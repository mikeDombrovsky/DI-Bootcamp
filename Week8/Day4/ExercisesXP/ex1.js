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
    const {first, last} = objUser;
    console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' });

//ex3 Using this object
const users = { user1: 18273, user2: 92833, user3: 90315 }

//1 Using methods taught in class, turn the users object into an array:[ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users_arr = Object.entries(users);
console.log(users_arr);

//2 Modify the outcome of part 1, by multipling the user’s ID by 2.
const users_arr2 = Object.entries(users).map(([username, id]) => [username, id * 2]);
console.log(users_arr2);

//ex4 Analyze the code below. What will be the output? GUESS: Person, REAL: object.  So.. we need use obj.constructor.name instead
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
// Analyze the options below. Which constructor will successfully extend the Dog class? GUESS - 2 and 4 but 2 uses super properly. By the way 1 also wont throw error.
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

//ex6 Evaluate these (ie True or False)