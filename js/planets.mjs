import { headerRender, apiFetch, renderApiInfo, changePage, capitalizeSentence } from './utils.mjs';
headerRender('Planets');

let template;
const contentBox = document.querySelector('.contentBox');
console.log(contentBox);

let pageCounter = 1;
let apiURL = (pageNumber) => `https://swapi.dev/api/planets/?page=${pageNumber}`;

let firstApiInfo = await apiFetch(apiURL(1));
renderApiInfo(firstApiInfo, planetTemplateFunc);

const previousPageBtn = document.querySelector('#previousPage');
const nextPageBtn = document.querySelector('#nextPage');

nextPageBtn.addEventListener('click', async () => {
    changePage(pageCounter += 1, apiURL, planetTemplateFunc);
});

previousPageBtn.addEventListener('click', async () => {
    changePage(pageCounter -= 1, apiURL, planetTemplateFunc);
});

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