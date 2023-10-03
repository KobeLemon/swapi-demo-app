import { headerRender, apiFetch, renderApiInfo, capitalizeSentence } from './utils.mjs';
headerRender('Vehicles');

let template = '';

const apiInfo = await apiFetch('https://swapi.dev/api/vehicles');
// console.log(apiInfo);

renderApiInfo(apiInfo, vehicleTemplateFunc);

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