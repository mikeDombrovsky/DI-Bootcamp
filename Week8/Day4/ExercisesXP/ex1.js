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
    log
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' });