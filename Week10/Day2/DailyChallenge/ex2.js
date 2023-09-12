const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

/* 
    1. Create three functions.The two first functions should return a promise..

    2. The first function is named toJs():
    this function converts the morse json string provided above to a morse javascript object.
    if the morse javascript object is empty, throw an error(use reject)
    else return the morse javascript object(use resolve)

    3. The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

    This function asks the user for a word or a sentence.
    if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
    else return an array with the morse translation of the user’s word.

    if the user enters the word "Hello", the promise resolves with this value 
    ["....", ".", ".-..", ".-..","---"]

    if the user entered the word "¡Hola!", the promise rejects because the character
    "¡" doesn't exist in the morse javascript object.

    4. The third function called joinWords(morseTranslation), takes one argument: the morse translation array

    this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

    5. Chain the three functions.
*/
toJs(morse)
    .then(obj => toMorse(obj))
    .then(arr => joinWords(arr))
    .catch(err => console.log(err));

//changes json to object if not void
function toJs(json) {
    return new Promise((res, rej) => {
        const morseObj = JSON.parse(json);
        if (Object.keys(morseObj).length === 0) {
            return rej('json is empty');
        }
        return res(morseObj);
    });
}

function toMorse(morseJS) {
    return new Promise((res, rej) => {
        let phrase = prompt('enter word or sentence');
        if (isValid(phrase, morseJS)) {
            return res(translate(phrase, morseJS))
        }
        return rej('wrong character');
    })
}
//validates user's input
function isValid(phrase, morseJS) {
    for (char of phrase) {
        if (!Object.keys(morseJS).includes(char)) {
            return false;
        }
    }
    return true;
}
//translates every charecter to morse
function translate(phrase, morseJS) {
    return phrase.split('').map(char => morseJS[`${char}`]);
}
//displays result on html page
function joinWords(morseTranslation) {
    const div = document.querySelector('div.morse');
    div.style.fontSize = '30px';
    div.style.margin = '20px';

    const html = morseTranslation.reduce((html, morseWord) => {
        return html.concat(`<p>${morseWord}</p>`);
    }, '');
    
    div.innerHTML = html;
}