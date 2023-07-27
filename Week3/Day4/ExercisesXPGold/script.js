

//ex1
// Ask the user which language they speak.
let language = prompt("Which language do you speak?");

// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”
language = language.toLowerCase();

// Create a few conditions :
// If the user speaks French : display “Bonjour”
switch (language) {
    case "french": console.log("Bonjour");
        break;
    // If the user speaks English : display “Hello”
    case "english": console.log("Hello");
        break;
    // If the user speaks Hebrew : display “Shalom”
    case "hebrew": console.log("Shalom");
        break;
    // If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’
    default: console.log("01110011 01101111 01110010 01110010 01111001");
}

//ex2
// Ask the user for their grade.
let grade = prompt("What is your grade?");

// If the grade is bigger than 90, console.log “A”
if(grade > 90){
    console.log("A");
}
// If the grade is between 80 and 90(included), console.log “B”
if (grade > 80) {
    console.log("B");
}
// If the grade is between 70(included) and 80(included), console.log “C”
if (grade >= 70) {
    console.log("C");
}
// If the grade is lower than 70, console.log “D”
if (grade < 70) {
    console.log("D");
}

//ex3
// Prompt the user for a string.It must be a verb.
let verb = prompt("type any English VERB, please.");

// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
if(verb.length > 2 && !verb.endsWith("ing")){
    //it's the grammar hell about this so I used the most common one without exceptions at least 'swimming', 'go' work =)
    const regexp_grammar = /^.+[aeoui][bcdfgjlmnprstz]$/;
    if (verb.match(regexp_grammar)){
        let last_char = verb.charAt(verb.length - 1);
        verb += last_char;
    }
    console.log(verb.concat("ing"));
}
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
if (verb.length > 2 && verb.endsWith("ing")) {
    console.log(verb.concat("ly"));
}
// If the length of the string is less than 3, leave it unchanged.
if (verb.length <= 2) {
    console.log(verb);
}



