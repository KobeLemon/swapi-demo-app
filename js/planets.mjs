import { capitalizeSentence, renderApiInfo } from "./utils.mjs";

let template = '';

const planetTemplateFunc = (planet) => {
    return template = 
    `<div class="tile">
        <img class="planetImg" src="../placeholder75x75.png" alt="Picture of ${planet.name}">
        <p class="planetName">${planet.name}</p>
        <p class="planetDay">Day: ${planet.rotation_period} hours</p>
        <p class="planetYear">Year: ${planet.orbital_period} days</p>
        <p class="planetDiameter">Diameter: ${planet.diameter} km</p>
        <p class="planetClimate">Climate: ${capitalizeSentence(planet.climate)}</p>
        <p class="planetGravity">Gravity: ${capitalizeSentence(planet.gravity)}</p>
        <p class="planetTerrain">Terrain: ${capitalizeSentence(planet.terrain)}</p>
        <p class="planetPopulation">Population: ${planet.population}</p>
    </div>`
}

renderApiInfo('https://swapi.dev/api/planets', planetTemplateFunc);