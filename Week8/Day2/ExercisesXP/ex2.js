const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

//1 Using the map() method, push into a new array the firstname of the user and a welcome message. ["Hello Bradley", "Hello Chloe", etc..]
const welcomes = users.map(user => `Hello ${user.firstName}`);
console.log(welcomes);

//2. Using the filter() method, create a new array, containing only the Full Stack Residents.
const full_stack_residents = users.filter(user => user.role === 'Full Stack Resident');
console.log(full_stack_residents);

//3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const fsr_last_names = users.filter(user => user.role === 'Full Stack Resident').map(user => user.lastName);
console.log(fsr_last_names);