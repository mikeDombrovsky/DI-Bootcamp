const form = document.forms[0];

form.addEventListener('submit', showInfo);
form.style.display = 'flex';
form.style.flexDirection = 'column';

for (input of form.elements) {
    input.style.padding = '5px';
    input.style.margin = '5px';
}

async function showInfo(e) {
    e.preventDefault();
    const lat1 = e.target.lat1.value;
    const long1 = e.target.long1.value;
    const lat2 = e.target.lat2.value;
    const long2 = e.target.long2.value;
    const info = document.querySelector('#info');

    const responses = await Promise.all(
        [
            fetch(`https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${long1}`),
            fetch(`https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${long2}`)
        ]
    );
    for (resp of responses) {
        const div = document.createElement('div');
        const data = await resp.json();
        div.style.border = '1px solid gray';
        div.style.textAlign = 'center';
        div.style.margin = '5px';
        div.innerHTML = `
                <p>Sunrise: ${data.results.sunrise}</p>
                <p>Sunset: ${data.results.sunset}</p>
            `;
        info.appendChild(div);
    }
}