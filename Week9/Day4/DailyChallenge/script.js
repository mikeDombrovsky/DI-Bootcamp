const form = document.getElementById('search_form');
form.addEventListener('submit', searchGif);
const xhr = new XMLHttpRequest();

function searchGif(e) {
    e.preventDefault();
    console.log(e.target.search.value);
    fetchGif(e.target.search.value);
    e.target.search.value = '';
}

function fetchGif(tag) {
    const api_key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    xhr.open('GET', `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`);

    xhr.send();

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 400) {
            const data = JSON.parse(xhr.response).data;
            const img_data = data.images.downsized_medium;
            const img = document.createElement('img');

            img.setAttribute('src', img_data.url);
            img.style.height = img_data.height + 'px';
            img.style.width = img_data.width + 'px';
            const images = document.querySelector('div.images');

            if (images.lastChild) {
                images.lastChild.remove();
            }
            images.appendChild(img);
        } else {
            console.log(xhr.response);
            alert('OOPS! Somethont went wrong');
        }
    }
}