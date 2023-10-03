import { headerRender, apiFetch, renderApiInfo, capitalizeSentence } from './utils.mjs';
headerRender('People');

let template = '';
let yearTitle = '';
const naArray = ['n/a', 'N/a,', 'n/A', 'N/A', 'na', 'NA']

const apiInfo = await apiFetch('https://swapi.dev/api/people');
// console.log(apiInfo);

renderApiInfo(apiInfo, personTemplateFunc);

function personTemplateFunc(person) {
    if (naArray.includes(person.gender)) {
        yearTitle = "Year of Creation:"
    } else {
        yearTitle = "Year of Birth:"
    }

    return template = 
    `<div class="tile">
        <img class="personImg" src="../placeholder75x75.png" alt="Picture of ${person.name}">
        <p class="personName">${person.name}</p>
        <p class="personHeight">Height: ${person.height} cm</p>
        <p class="personWeight">Weight: ${person.mass} kg</p>
        <p class="personHairColor">Hair Color: ${capitalizeSentence(person.hair_color)}</p>
        <p class="personSkinColor">Skin Color: ${capitalizeSentence(person.skin_color)}</p>
        <p class="personEyeColor">Eye Color: ${capitalizeSentence(person.eye_color)}</p>
        <p class="personBirthYear">${yearTitle} ${person.birth_year}</p>
        <p class="personGender">Gender: ${capitalizeSentence(person.gender)}</p>
    </div>`;
};