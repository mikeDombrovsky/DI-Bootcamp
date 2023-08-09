
let n = prompt('How many bottles of beer on the wall?');

bottlesOfBeerSong(n);

function bottlesOfBeerSong(n) {
    let pronoun = "them";
    let bottles = "bottles";
    let takenBottles = 1;
    for (let i = n; i > 0; i -= takenBottles++) {
        if (i == 1) {
            pronoun = "it";
            bottles = "bottle";
        }
        if (i < takenBottles) {
            takenBottles = i;
        }
        console.log(`${i} ${bottles} of beer on the wall,
        ${i} ${bottles} of beer,
        Take ${takenBottles} down, pass ${pronoun} around,`);
        if (i - takenBottles < 2) {
            bottles = "bottle";
            console.log("boo");
        }
        console.log(`${i - takenBottles} ${bottles} of beer on the wall`);
        console.log(i, takenBottles);
    }
}