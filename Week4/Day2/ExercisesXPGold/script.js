function isBlanck(string) {
    if (string === "") {
        return true;
    }
    if (string === null || string === undefined || typeof string === "number") {
        console.log(`parameter ${string} has not a string type`);
    }
    return false;
}

console.log(isBlanck(""));
//Exercise 2 : Abbrev_name 
//Write a JavaScript function to convert a string into an abbreviated form.
//console.log(abbrevName("Robin Singh")); --> "Robin S."
function abbrevName(fullname) {
    let name_surname = fullname.split(" ");
    if (name_surname.length !== 2) {
        console.log("it must be just 2 of them - name and surname, buddy. I don't care!");
    }
    let surname = name_surname[1];
    let abr = surname[0] + ".";
    return fullname.replace(surname, abr);
}
console.log(abbrevName("Robin Singh"));

//Exercise 3 : SwapCase
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example:if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
function swapCase(phrase) {
    let arr = []
    for (let i = 0; i < phrase.length; i++) {
        let char = phrase[i];
        if (char.toUpperCase() === char) {
            arr.push(char.toLowerCase())
        } else {
            arr.push(char.toUpperCase())
        }
    }
    return arr.join("");
}
console.log(swapCase("The Quick Brown Fox"));

//Exercise 4 : Omnipresent Value
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
//isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) //➞ true
//isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) //➞ false
function isOmnipresent(arr, value) {
    let present = true;
    for (inner_arr of arr) {
        present = false;
        for (item of inner_arr) {
            if (item === value) {
                present = true;
            }
            console.log(present, item);
        }
        if (!present) {
            return false;
        }
    }
    return true;
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));