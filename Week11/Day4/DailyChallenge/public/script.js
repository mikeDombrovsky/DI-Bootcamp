const form = document.forms[0];
form.addEventListener('submit', postEmoji);

let emojis;
let score = 0;
fetchEmojis();

const used_emoji_ids = [];

const start_btn = document.getElementById('start');
start_btn.addEventListener('click', startGame);


async function postEmoji(e) {
    e.preventDefault();
    const { id, value } = e.target.emoji_name;
    console.log(id, value);
    const resp = await fetch('/emojis/' + id,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: value })
        });
    const result = await resp.json();
    if (result.isTrue) {
        showTrueAnswer();
    }

    console.log(result);
    if (used_emoji_ids.length === 30) {
        stopGame();
    } else {
        showNextEmoji();
    }
}

function showTrueAnswer() {
    score++;
    const scoreSpan = document.getElementById('score');
    scoreSpan.innerText = score;
}

function stopGame(){
    
}

async function showNextEmoji() {
    const id = getRandomId();
    if (!id) {
        return;
    }
    const { character, names } = emojis.find(emoji => emoji.id === id);
    const [name1, name2, name3, name4] = names;
    const newHtml = `
        <span id="emoji">${character}</span>
        <select name="emoji_name" id="${id}">
            <option value="${name1}">${name1}</option>
            <option value="${name2}">${name2}</option>
            <option value="${name3}">${name3}</option>
            <option value="${name4}">${name4}</option>
        </select>
    `;
    document.querySelector('div#changeable').innerHTML = newHtml;
}

async function fetchEmojis() {
    const res = await fetch('/emojis');
    const emojiArr = await res.json();
    if (emojiArr) {
        emojis = emojiArr;
    } else {
        console.error('error doring initial emojis fetch');
    }
}

function startGame() {
    form.style.display = 'flex';
    start_btn.style.display = 'none';
    showNextEmoji();
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
    if (used_emoji_ids.length === emojis.length) {
        console.error('error: all emojis guessed');
        return;
    }
    let rand;

    do {
        rand = Math.floor(Math.random() * (emojis.length - 1));
    }
    while (used_emoji_ids.includes(rand));

    used_emoji_ids.push(rand);

    return rand;
}
