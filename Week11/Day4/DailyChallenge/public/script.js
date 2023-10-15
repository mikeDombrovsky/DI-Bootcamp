const form = document.forms[0];
form.addEventListener('submit', postEmoji);

let emojis;
let score = 0;
fetchEmojis();
showResults();
let used_emoji_ids = [];

const start_btn = document.getElementById('start');
start_btn.addEventListener('click', startGame);

async function fetchEmojis() {
    const res = await fetch('/emojis');
    const emojiArr = await res.json();
    if (emojiArr) {
        emojis = emojiArr;
    } else {
        console.error('error doring initial emojis fetch');
    }
}

async function showResults() {
    const res = await fetch('/results');
    const results = await res.json();
    if (results) {
        const liderboard = document.querySelector('section#liderboard');
        liderboard.innerHTML = results.reduce((acc, result) =>
            acc.concat(`
                <div class="stat">
                    <span>${result.dateTime}</span>
                    <span id="stat_score">
                        <span>Score: </span>
                        <span>${result.score}</span>
                    <span>
                </div>
            `), '');
    }
}

function startGame() {
    form.style.display = 'flex';
    start_btn.style.display = 'none';
    showNextEmoji();
}

async function postEmoji(e) {
    e.preventDefault();
    showSpinner();
    const { id, value } = e.target.emoji_name;
    const resp = await fetch('/emojis/' + id,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: value })
        });
    const result = await resp.json();
    hideSpinner();
    if (result.isTrue) {
        clapping_hands();
        updateScore();
    }

    if (used_emoji_ids.length === 29) {
        showSpinner();
        const resp2 = await fetch('/results',
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({dateTime: new Date().toDateString(), score})
        });
        hideSpinner();
        showResults();
        stopGame();
    } else {
        showNextEmoji();
    }
}

function clapping_hands() {
    const hands = document.querySelector('div.clapping_hands');
    hands.style.display = 'block';
    setTimeout(() => {
        hands.style.display = 'none';
    }, 1000)
}

function updateScore() {
    score++;
    const scoreSpan = document.getElementById('score');
    scoreSpan.innerText = score;
}


async function showNextEmoji() {
    const id = getRandomId();
    if (id === undefined) {
        console.log('id = ', id);
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

function stopGame() {
    used_emoji_ids = [];
    score = -1;
    updateScore();
    form.style.display = 'none';
    start_btn.style.display = 'block';
}


function showSpinner() {
    const cover = document.querySelector('div.cover');
    cover.style.display = 'inline-block';
}

function hideSpinner() {
    const cover = document.querySelector('div.cover');
    cover.style.display = 'none';
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
        rand = Math.floor(Math.random() * emojis.length);
    }
    while (used_emoji_ids.includes(rand));

    used_emoji_ids.push(rand);

    return rand;
}
