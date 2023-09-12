
/*
    Create two functions.Each function should return a promise.
    The first function called makeAllCaps(), takes an array of words as an argument
    If all the words in the array are strings, resolve the promise.The value of the resolved promise 
    is the array of words uppercased. 
    Else, reject the promise with a reason.
    The second function called sortWords(), takes an array of words uppercased as an argument
    If the array length is bigger than 4, resolve the promise.The value of the resolved promise 
    is the array of words sorted in alphabetical order.
    Else, reject the promise with a reason.
 */









function makeAllCaps(words) {
    return new Promise((res, rej) => {
        if (words.every(word => typeof word === 'string')) {
            return res(words.map(word => word.toUpperCase()));
        }
        return rej('Not all elements of array have string type');
    });
}

function sortWords(words) {
    return new Promise((res, rej) => {
        if (words.length > 4) {
            return res(words.sort());
        }
        return rej('array length is less then 4');
    });
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error))