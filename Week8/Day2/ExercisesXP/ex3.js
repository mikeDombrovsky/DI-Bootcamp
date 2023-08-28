// Using this array 
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

//Use the reduce() method to combine all of these into a single string.
const epic_phrase = epic.reduce((acc, word) => acc.concat(word, ' '));
console.log(epic_phrase);
