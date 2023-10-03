import { headerRender, apiFetch, renderApiInfo, capitalizeSentence } from './utils.mjs';
headerRender('Starships');

let template = '';

const apiInfo = await apiFetch('https://swapi.dev/api/starships');
// console.log(apiInfo);

renderApiInfo(apiInfo, starshipTemplateFunc);

function starshipTemplateFunc(starship) {
    return template =
        `<div class="tile">
            <img class="starshipImg" src="../placeholder75x75.png" alt="Picture of ${capitalizeSentence(starship.name)}">
            <p class="starshipName">${capitalizeSentence(starship.name)}</p>
            <p class="starshipModel">Model: ${capitalizeSentence(starship.model)}</p>
            <p class="starshipManufacturer">Manufacturer: ${capitalizeSentence(starship.manufacturer)}</p>
            <p class="starshipPrice">Price: ${starship.cost_in_credits} credits</p>
            <p class="starshipLength">Length: ${starship.length} meters</p>
            <p class="starshipMaxAtmosSpd">Max Atmosphering Speed: ${starship.max_atmosphering_speed} MPH</p>
            <p class="starshipCrew">Crew Capacity: ${starship.crew}</p>
            <p class="starshipCargo">Cargo Capacity: ${starship.cargo_capacity}</p>
            <p class="starshipFood">Food Capacity: ${starship.consumables}</p>
            <p class="starshipHyperdrive">Hyperdrive Rating: ${starship.hyperdrive_rating}</p>
            <p class="starshipMGLT">Megalight per hour: ${starship.MGLT}</p>
            <p class="starshipClass">Class: ${capitalizeSentence(starship.starship_class)}</p>
        </div>`
}