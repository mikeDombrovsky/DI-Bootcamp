
let offset = 2;
let limit = 10;

const xhr = new XMLHttpRequest();
getGifs(`https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&limit=${limit}&offset=${offset}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);

function getGifs(url) {
    xhr.open('GET', url);

    xhr.send();

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 400) {
            const data = JSON.parse(xhr.response).data;
            console.log(data);
        }
    }
}