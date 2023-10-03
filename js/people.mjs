import { headerRender, apiFetch, renderApiInfo, changePage, capitalizeSentence } from './utils.mjs';
headerRender('People');

let template;
let yearTitle;
const naArray = ['n/a', 'N/a,', 'n/A', 'N/A', 'na', 'NA'];
const contentBox = document.querySelector('.contentBox');
console.log(contentBox);

let pageCounter = 1;
let apiURL = (pageNumber) => `https://swapi.dev/api/people/?page=${pageNumber}`;

let firstApiInfo = await apiFetch(apiURL(1));
renderApiInfo(firstApiInfo, personTemplateFunc);

const previousPageBtn = document.querySelector('#previousPage');
const nextPageBtn = document.querySelector('#nextPage');

nextPageBtn.addEventListener('click', async () => {
    changePage(pageCounter += 1, apiURL, personTemplateFunc);
});

previousPageBtn.addEventListener('click', async () => {
    changePage(pageCounter -= 1, apiURL, personTemplateFunc);
});

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