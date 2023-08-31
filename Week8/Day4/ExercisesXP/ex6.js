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

//7.2 Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). 
//This method takes a parameter: the sound the animal makes, and returns the details 
//of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
    sound(sound) {
        return ` ${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color},`;
    }
}

//7.3 Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls
//the sound method that “moos” her information.example: Moooo I'm a cow, named Lily and I'm brown and white
const farmerCow = new Mamal('Burenka', 'Cow', 'White and black');
console.log(farmerCow.sound('Moooo'));