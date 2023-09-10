const form = document.getElementById('search_form');
form.addEventListener('submit', searchGif);
const xhr = new XMLHttpRequest();
const remove_all_btn = document.querySelector('#remove_all');
remove_all_btn.addEventListener('click', removeAll);

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
            console.log(data);
            const img_data = data.images.fixed_height_small_still;
            const img = document.createElement('img');

            img.setAttribute('src', img_data.url);
            img.style.height = img_data.height + 'px';
            img.style.width = img_data.width + 'px';
            const images = document.querySelector('div.images');
            const div = document.createElement('div');
            div.style.position = 'relative';
            div.style.display = 'inline-block';
            div.style.margin = '15px';
            div.innerHTML = `
            <span class="remove" 
            onclick="remove(event)"
            style="position : absolute; top : 10px; right : 10px; cursor : pointer; background-color: white;"
            >X</span>
            `;
            div.appendChild(img);
            images.appendChild(div);
        } else {
            console.log(xhr.response);
            alert('OOPS! Somethont went wrong');
        }
    }
}

function remove(e) {
    e.target.parentNode.remove();
}

function removeAll(){
    const images = document.querySelector('div.images');
   while(images.childElementCount > 0){
      images.lastChild.remove();
   }
}