import { headerRender, apiFetch, renderApiInfo, changePage, capitalizeSentence } from './utils.mjs';
headerRender('Vehicles');

let template;
const contentBox = document.querySelector('.contentBox');
console.log(contentBox);

let pageCounter = 1;
let apiURL = (pageNumber) => `https://swapi.dev/api/vehicles/?page=${pageNumber}`;

let firstApiInfo = await apiFetch(apiURL(1));
renderApiInfo(firstApiInfo, vehicleTemplateFunc);

const previousPageBtn = document.querySelector('#previousPage');
const nextPageBtn = document.querySelector('#nextPage');

nextPageBtn.addEventListener('click', async () => {
    changePage(pageCounter += 1, apiURL, vehicleTemplateFunc);
});

previousPageBtn.addEventListener('click', async () => {
    changePage(pageCounter -= 1, apiURL, vehicleTemplateFunc);
});

function vehicleTemplateFunc(vehicle) {
    return template = 
    `<div class="tile">
        <img class="vehicleImg" src="../placeholder75x75.png" alt="Picture of ${capitalizeSentence(vehicle.name)}">
        <p class="vehicleName">${capitalizeSentence(vehicle.name)}</p>
        <p class="vehicleModel">Model: ${capitalizeSentence(vehicle.model)}</p>
        <p class="vehicleManufacturer">Manufacturer: ${capitalizeSentence(vehicle.manufacturer)}</p>
        <p class="vehiclePrice">Price: ${vehicle.cost_in_credits} credits</p>
        <p class="vehicleLength">Length: ${vehicle.length} meters</p>
        <p class="vehicleMaxAtmosSpd">Max Atmosphering Speed: ${vehicle.max_atmosphering_speed} MPH</p>
        <p class="vehicleCrew">Crew Capacity: ${vehicle.crew}</p>
        <p class="vehicleCargo">Cargo Capacity: ${vehicle.cargo_capacity}</p>
        <p class="vehicleFood">Food Capacity: ${vehicle.consumables}</p>
        <p class="vehicleClass">Class: ${capitalizeSentence(vehicle.vehicle_class)}</p>
    </div>`
}