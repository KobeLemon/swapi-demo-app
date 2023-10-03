import { headerRender, apiFetch, renderApiInfo, capitalizeSentence } from './utils.mjs';
headerRender('Planets');

let template = '';

const apiInfo = await apiFetch('https://swapi.dev/api/planets');
// console.log(apiInfo);

renderApiInfo(apiInfo, planetTemplateFunc);

function planetTemplateFunc(planet) {
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