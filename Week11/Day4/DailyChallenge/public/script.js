const form = document.forms[0];

form.addEventListener('submit', postEmoji);

const emojis = fetchEmojis();
const used_emoji_ids = [];
async function postEmoji(e) {
    e.preventDefault();

    console.log(e.target.emoji_name.value);

}

async function showNextEmoji() {

}

async function fetchEmojis() {
    const res = await fetch('/emojis');
    const emojiArr = await res.json();
    if (emojiArr) {
        return emojiArr;
    } else {
        console.error('error doring initial emojis fetch');
    }
}

function startGame() {

}

function showSpinner() {
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'inline-block';
}

function hideSpinner() {
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'none';
}

function getRandomId() {
    if (!emojis) {
        return console.error('error: emojis array is ' + emojis);
    }
    let rand;
    do {
        rand = Math.floor(Math.random() * (emojis.length - 1));
    }
    while (used_emoji_ids.includes(rand))
}