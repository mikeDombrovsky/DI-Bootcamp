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