import { headerRender, apiFetch, renderApiInfo, changePage, capitalizeSentence } from './utils.mjs';
headerRender('Planets');

let pageCounter = 1;

main(planetTemplateFunc);

async function main(template) {
    let apiURL = (pageNumber) => `https://swapi.dev/api/planets/?page=${pageNumber}`;

    let firstApiInfo = await apiFetch(apiURL(1));
    renderApiInfo(firstApiInfo, planetTemplateFunc);

    document.querySelector('#nextPage').addEventListener('click', async () => {
        changePage(pageCounter += 1, apiURL, planetTemplateFunc);
    });

    document.querySelector('#previousPage').addEventListener('click', async () => {
        changePage(pageCounter -= 1, apiURL, planetTemplateFunc);
    });
}

function planetTemplateFunc(planet) {
    return `<div class="tile fade-in">
    <!-- <img class="planetImg" src="../images/placeholder75x75.png" alt="Picture of ${planet.name}"> -->
        <p class="itemName planetName"><strong>${planet.name}</strong></p>
        <p class="planetDay">Day: ${planet.rotation_period} hours</p>
        <p class="planetYear">Year: ${planet.orbital_period} days</p>
        <p class="planetDiameter">Diameter: ${planet.diameter} km</p>
        <p class="planetClimate">Climate: ${planet.climate}</p>
        <p class="planetGravity">Gravity: ${planet.gravity}</p>
        <p class="planetTerrain">Terrain: ${planet.terrain}</p>
        <p class="planetPopulation">Population: ${planet.population}</p>
    </div>`
}