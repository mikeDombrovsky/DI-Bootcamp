let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
const section = document.querySelector("section.listPlanets");

for (let planet of planets) {
    let new_div = document.createElement("div");
    new_div.classList.add("planet", planet);
    section.append(new_div);
}

let planetsObj = [
    {
        name: "mercury",
        moons: 0,
        size: 1.5
    },
    {
        name:"venus",
        moons: 0,
        size: 3.7
    },
    {
        name: "earth",
        moons: 1,
        size: 3.9
    },
    {
        name: "mars",
        moons: 2,
        size: 2.1
    },
    {
        name: "jupiter",
        moons: 79,
        size: 43.4
    },
    {
        name: "saturn",
        moons: 82,
        size: 36.1
    },
    {
        name: "uranus",
        moons: 27,
        size: 15.7
    },
    {
        name: "neptune",
        moons: 14,
        size: 15.2
    }
];

for(let planet of planetsObj ){
    let planet_div = document.querySelector("div."+ planet.name);
    planet_div.style.width = `${planet.size * 5}px`;
    planet_div.style.height = `${planet.size * 5}px`;
    planet_div.style.margin = "10px auto";

    for(let i = 0; i < planet.moons; i++){
        let moon = document.createElement("div");
        moon.classList.add("moon");
        moon.style.width = `${planet.size * 2}px`;
        moon.style.height = `${planet.size * 2}px`;
        moon.style.left = `${i * planet.size / 2 - 20 * planet.size}px`;
        moon.style.top = `${planet.size * 2}px`;

        planet_div.append(moon);
        console.log(moon);
    }
}