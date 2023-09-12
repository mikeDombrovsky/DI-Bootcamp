const urls = [
    'https://www.swapi.tech/api/people/1',
    'https://www.swapi.tech/api/people/2',
    'https://www.swapi.tech/api/people/3',
    'https://www.swapi.tech/api/people/4'
]


// const p = fetch(urls[0]);
// p.then(response => response.json())
// .then(json => console.log(json))


const promises = urls.map(url =>
    fetch(url)
        .then(res => res.json())
);


promises[0]
    .then(json => console.log(json));

Promise.all(promises)
    .then(responses => {
        console.log(...responses);
    })
    .catch(err => console.log(err));

