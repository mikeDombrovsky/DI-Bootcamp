getGifs();

function getGifs() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&limit=5&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);

    xhr.send();

    xhr.onload = () => {
        if (xhr.status > 200 && xhr.status < 400) {
            const data = JSON.parse(xhr.response).data;
            console.log(data);
        }

    }
}