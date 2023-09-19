const { persons } = await import('./data.js');

function avgAge(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].age;
    }
    return sum / arr.length;
}

console.log(avgAge(persons));