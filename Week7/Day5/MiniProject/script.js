const funnyQuotes = [
    {
        id: 1,
        author: "Mark Twain",
        quote: "The secret of getting ahead is getting started."
    },
    {
        id: 2,
        author: "Oscar Wilde",
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying."
    },
    {
        id: 3,
        author: "Albert Einstein",
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {
        id: 4,
        author: "Winston Churchill",
        quote: "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly."
    },
    {
        id: 5,
        author: "Groucho Marx",
        quote: "I refuse to join any club that would have me as a member."
    },
    {
        id: 6,
        author: "George Bernard Shaw",
        quote: "Youth is a wonderful thing. What a crime to waste it on children."
    },
    {
        id: 7,
        author: "Mae West",
        quote: "I used to be Snow White, but I drifted."
    },
    {
        id: 8,
        author: "Robin Williams",
        quote: "Why do they call it rush hour when nothing moves?"
    },
    {
        id: 9,
        author: "Woody Allen",
        quote: "I'm not afraid of death; I just don't want to be there when it happens."
    },
    {
        id: 10,
        author: "Steven Wright",
        quote: "I intend to live forever. So far, so good."
    },
    {
        id: 11,
        author: "Henny Youngman",
        quote: "Take my wife, please."
    },
    {
        id: 12,
        author: "Milton Berle",
        quote: "My wife has a slight impediment in her speech. Every now and then she stops to breathe."
    },
    {
        id: 13,
        author: "Gloria Steinem",
        quote: "A woman without a man is like a fish without a bicycle."
    },
    {
        id: 14,
        author: "Bob Monkhouse",
        quote: "When I die, I want to go peacefully like my grandfather did – in his sleep. Not yelling and screaming like the passengers in his car."
    },
    {
        id: 15,
        author: "Mel Brooks",
        quote: "If you're quiet, you're not living. You've got to be noisy and colorful and lively."
    },
    {
        id: 16,
        author: "Ellen DeGeneres",
        quote: "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the heck she is."
    },
    {
        id: 17,
        author: "Jim Carrey",
        quote: "Behind every great man is a woman rolling her eyes."
    },
    {
        id: 18,
        author: "Phyllis Diller",
        quote: "Housework can't kill you, but why take a chance?"
    },
    {
        id: 19,
        author: "Billy Crystal",
        quote: "You look Marvelous!"
    },
    {
        id: 20,
        author: "Will Rogers",
        quote: "I don't make jokes. I just watch the government and report the facts."
    },
    {
        id: 21,
        author: "Albert Einstein",
        quote: "Suck my duck, stupid!"
    },
    {
        id: 22,
        author: "Albert Einstein",
        quote: "I wanna pee!!"
    },
];
const quote_p = document.querySelector('p#quote_text');
const author_div = document.querySelector('div#author');
let prevQuoteId = 1;
const new_quote_form = document.forms[0];

const quotes_container = document.querySelector('#quotes_container');
const input_search = document.querySelector('#input_search');
let quotes_by_author = [];
let current_quote_Index = 0;
generate();
addLikesToObjects();

function generate() {
    resetCounters();
    let id = getRandomeQuoteId();
    let quoteObj = funnyQuotes.find(obj => obj.id === id);
    quote_p.innerHTML = quoteObj.quote;
    author_div.innerHTML = quoteObj.author;
    prevQuoteId = id;
}

function getRandomeQuoteId() {
    let randomId = prevQuoteId;
    while (prevQuoteId == randomId) {
        randomId = Math.floor(
            Math.random() * funnyQuotes.length) + 1;
    }
    return randomId;
}

function addQuote() {
    const input_quote = new_quote_form.input_quote;
    const input_author = new_quote_form.input_author;
    if (input_quote.value == '' || input_author.value == '') {
        return;
    }
    const obj = {
        id: funnyQuotes.length + 1,
        author: input_author.value,
        quote: input_quote.value,
        likes: 0
    }
    funnyQuotes.push(obj);
    console.log(obj);
    input_quote.value = '';
    input_author.value = '';
}

function addLikesToObjects() {
    funnyQuotes.forEach(obj => {
        obj.likes = 0;
    });
}

function countAllChars() {
    let currentObj = getCurrentObject();
    let quote = currentObj.quote;
    let count = countChars(quote);
    const span = document.querySelector('button#count_all>span');
    span.innerHTML = count;
}

function getCurrentObject() {
    return funnyQuotes.find(obj => obj.id === prevQuoteId);
}

function countChars(quote) {
    let count = 0;
    for (char of quote) {
        count++;
    }
    return count;
}

function countWithoutSpaces() {
    let currentObj = getCurrentObject();
    let quote = currentObj.quote;
    let count = countChars(deleteWhitespaces(quote));
    const span = document.querySelector('button#count_without>span');
    span.innerHTML = count;
}

function deleteWhitespaces(quote) {
    return quote.split(' ').join('');
}

function countWords() {
    let currentObj = getCurrentObject();
    let quote = currentObj.quote;
    let count = quote.split(' ').length;
    const span = document.querySelector('button#count_words>span');
    span.innerHTML = count;
}

function addLike() {
    let currentObj = getCurrentObject();
    currentObj.likes++;
    const span = document.querySelector('button#add_like>span');
    span.innerHTML = currentObj.likes;
}

function resetCounters() {
    const spans = document.querySelectorAll('.buttons button span');
    spans.forEach(span => span.innerHTML = "0");
}

function search() {
    quotes_container.innerHTML = '';
    let author = input_search.value;
    quotes_by_author = funnyQuotes.filter(obj => obj.author.startsWith(author));
    console.log(quotes_by_author);
    for (let obj of quotes_by_author) {
        let newQuote = prepareQuote(obj);
        quotes_container.appendChild(newQuote);
        break;
    }
    console.log(quotes_by_author);
}

function prev() {
    if (current_quote_Index > 0) {
        addNewSearchQuote(--current_quote_Index);
    }
}

function next() {
    if (current_quote_Index < quotes_by_author.length - 1) {
        addNewSearchQuote(++current_quote_Index);
    }
}

function addNewSearchQuote(i) {
    const obj = getAuthorQuoteByIndex(i);

    if (obj) {
        quotes_container.innerHTML = '';
        let newQuote = prepareQuote(obj);
        quotes_container.appendChild(newQuote);
    }
}

function prepareQuote(obj) {
    let newQuote = document.createElement('div');
    newQuote.setAttribute('id', obj.id);
    newQuote.classList.add('quote');
    newQuote.innerHTML = `
                <q>
                    <p class="quote_text">${obj.quote}</p>
                </q>
                <div class="author">${obj.author}</div>`;
    return newQuote;
}

function getAuthorQuoteByIndex(i) {
    if (i >= 0 && i < quotes_by_author.length) {
        return quotes_by_author[i];
    }
    return false;
}