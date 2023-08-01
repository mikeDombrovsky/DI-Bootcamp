function playTheGame() {
    let isPlay = confirm("Would you like to play the game?");
    if (!isPlay) {
        alert("No problem, Goodbye");
    } else {
        let number;
        while (true) {
            number = prompt("enter a number between 0 and 10");
            if (isNaN(number)) {
                alert("Sorry Not a number");
            }else if (number < 0 || number > 10) {
                alert("Sorry it’s not a good number");
            } else {
                break;
            }
        }
        let computerNumber = Math.round(Math.random() * 10);
        compareNumbers(number, computerNumber);
    }
}


function compareNumbers(userNumber, computerNumber) {
    let i = 0;
    for (let i = 0; i < 2; i++) {
        console.log(userNumber, computerNumber, i);
        if (userNumber == computerNumber) {
            alert("WINNER");
            return;
        }
        if (userNumber > computerNumber) {
            alert("Your number is bigger then the computer’s, guess again");
        }
        if (userNumber < computerNumber) {
            alert("Your number is smaller then the computer’s, guess again");
        }
        userNumber = prompt("enter a number between 0 and 10");
    }
    alert("out of chances");
}