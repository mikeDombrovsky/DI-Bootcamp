const urls = [
    'https://www.swapi.tech/api/people/1',
    'https://www.swapi.tech/api/people/2',
    'https://www.swapi.tech/api/people/3',
    'https://www.swapi.tech/api/peopl'
]

Promise.all(urls.map(url => fetch(url).then(res => res.json())))
    .then(responses => {
        for(res of responses){
            console.log(res.result.properties);
        }
    })
    .catch(err => console.log(err));

