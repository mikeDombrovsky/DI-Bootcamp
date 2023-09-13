
// Convert the below promise into async await:
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));


const getStarWarsObj = async () => {
    try{
         const promise = await fetch("https://www.swapi.tech/api/starships/9/");
    const objectStarWars = await promise.json();
    console.log(objectStarWars.result);
    }catch(err){
        console.log(err);
    }
}    

getStarWarsObj();