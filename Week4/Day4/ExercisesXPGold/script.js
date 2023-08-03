
let secret_word = "";
let stars = "";
let tries = 10;
let guessed_letters = [];
function game() {
    secret_word = prompt_a_word();
    stars = secret_word.replace(secret_word, "*".repeat(secret_word.length));
    console.log(stars);
    
    while(tries != 0){
        if (stars.includes("*")){
            prompt_a_letter();
        }
        
    }
    console.log("player-2, YOU LOSE");
    console.log("player-1, CONGRATS YOU WIN");
}

function prompt_a_word() {
    let secret_word = prompt("player 1 - type a word. The word must have a minimum of 8 letters");

    while (secret_word.length < 8 || !secret_word.match(/^\w+$/)) {
        console.log("this word mustn't contain any symbols but letters from A to Z and must contain at list 8 of them");
        secret_word = prompt("player 1 - type a word. The word must have a minimum of 8 letters");
    }
    return secret_word;
}

function prompt_a_letter(){
    let letter = prompt("player-2 try to guess a letter");
    if(guessed_letters.includes(letter)){
        console.log("you alredy tryed that letter");
    }
    let i = secret_word.indexOf(letter);
    while(i > 0){
        stars.replace(i, letter);
        i = secret_word.indexOf(letter);
    }
    console.log(stars);
}

game();