const form = document.forms[0];
form.addEventListener('submit', getWeatherByCityName);

const APIKEY = '6bc236fa8bd5e7e03f83fd8cea3eac74';
const xmlHttpRequest = new XMLHttpRequest();
const weatherObjects = [];
const togglerCheckbox = document.querySelector('#checkbox');

togglerCheckbox.addEventListener('click', changeTemperature)

getWeatherByCoords();

function getWeatherByCoords() {
    if (!navigator.geolocation) {
        alert('Geolocation is not supportet in ypur browser')
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position) {
        getWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${APIKEY}`);
    }

    function error() {
        alert('Somethong went wrong');
    }
}

function getWeatherByCityName(e) {
    e.preventDefault();
    getWeather(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.city.value}&appid=${APIKEY}`);
    e.target.city.value = '';
}

function getWeather(path) {
    xmlHttpRequest.open('GET', path);

    try {
        xmlHttpRequest.send();
    } catch (error) {
        console.error(error);
    }

    xmlHttpRequest.onload = () => {
        if (xmlHttpRequest.status === 200) {
            const responseObj = JSON.parse(xmlHttpRequest.response);
            weatherObjects.push(responseObj);
            printCard(responseObj);
        } else if (xmlHttpRequest.status === 404) {
            showError('Place not found');
        } else {
            showError('Something went wrong');
        }
    }

    xmlHttpRequest.onerror = () => {
        console.log('request failed');
    }
}


function printCard(obj) {
    const container = document.querySelector('div.container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.position = 'relative';
    const weather = obj.weather[0];
    const main = obj.main;
    // local time of city's sunrise and sunset
    const sunrise = new Date((obj.sys.sunrise + obj.timezone) * 1000).toUTCString().slice(17, 25);
    const sunset = new Date((obj.sys.sunset + obj.timezone) * 1000).toUTCString().slice(17, 25);

    card.innerHTML = `
        <span class="remove" onclick="removeCard(event)">
            <i class="fa-solid fa-xmark"></i>
        </span>
        <h3>${obj.name} <span class="country">${obj.sys.country}</span></h3>
        <p class="celsius">${toCelsius(main.temp)} ℃;</p>
        <img src=" https://openweathermap.org/img/wn/${weather.icon}@2x.png">
        <p>${weather.main}</p>
        <p>Humidity: ${main.humidity} %</p>
        <p>Wind: ${obj.wind.speed.toFixed(1)} m/s</p>
        <p>Sunrise: ${sunrise}</p>
        <p>Sunset: ${sunset}</p>
    `;
    container.appendChild(card);
}

function removeCard(e) {
    const card = e.target.parentNode.parentNode;
    let i = weatherObjects.indexOf(card);
    weatherObjects.splice(i, 1);
    e.target.parentNode.parentNode.remove();
}

function toCelsius(kelvin_temp) {
    return (kelvin_temp - 273.15).toFixed(1);
}

function changeTemperature(e) {
    const cards = document.querySelector('div.container').children;

    for (let card of cards) {
        const p = card.querySelector('.celsius');
        let html = p.innerHTML;
        let temp = parseFloat(html.slice(0, 4));
        if (e.target.checked) {
            temp = (temp * 9 / 5 + 32).toFixed(1);
            p.innerHTML = `${temp} °F`;
        } else {
            temp = ((temp - 32) * 5 / 9).toFixed(1);
            p.innerHTML = `${temp} ℃`;
        }
    }
}

function showError(message) {
    const errDiv = document.createElement('div');
    errDiv.classList.add('error_container');
    errDiv.style.position = 'absolute';
    errDiv.style.left = '20px';
    errDiv.style.top = '20px';
    errDiv.innerHTML = `
        <span class="remove" onclick="removeError(event)">
            <i class="fa-solid fa-xmark"></i>
        </span>
        <i class="fa-solid fa-circle-exclamation fa-xl"></i>
        <div class="error">${message}</div>
    `;
    document.body.appendChild(errDiv);
}

function removeError(e) {
    e.target.parentNode.parentNode.remove();
}

