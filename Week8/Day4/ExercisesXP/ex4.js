//ex4 Analyze the code below. What will be the output?
// GUESS: Person, REAL: object.  So.. we need use obj.constructor.name instead
class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member);