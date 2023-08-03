
let n = prompt('How many bottles of beer on the wall?');

bottlesOfBeerSong(n);

function bottlesOfBeerSong(n) {
    let pronoun = "them";
    for (let i = n; i > 0; i--) {
        if(i == 1){
            pronoun = "it";
        }
        console.log(`${i} bottles of beer on the wall,
        ${i} bottles of beer,
        Take 1 down, pass ${pronoun} around,
        ${i - 1} bottles of beer on the wall`);
    }
    console.log("no bottle of beer on the wall");
}