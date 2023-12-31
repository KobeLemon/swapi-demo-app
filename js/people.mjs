import { headerRender, apiFetch, renderApiInfo, changePage, capitalizeSentence } from './utils.mjs';
headerRender('People');

let yearTitle;
const naArray = ['n/a', 'N/a,', 'n/A', 'N/A', 'na', 'NA'];
let pageCounter = 1;

const nextPageBtn = document.querySelector('#nextPage');
const previousPageBtn = document.querySelector('#previousPage');

main(personTemplateFunc);

async function main(template) {
    let apiURL = (pageNumber) => `https://swapi.dev/api/people/?page=${pageNumber}`;

    let firstApiInfo = await apiFetch(apiURL(1));
    renderApiInfo(firstApiInfo, template);

    nextPageBtn.addEventListener('click', async () => {
        changePage(pageCounter += 1, apiURL, template);
    });

    previousPageBtn.addEventListener('click', async () => {
        changePage(pageCounter -= 1, apiURL, template);
    });
}


function personTemplateFunc(person) {
    if (naArray.includes(person.gender)) {
        yearTitle = "Creation:"
    } else {
        yearTitle = "Birth:"
    }

    return `<div class="tile fade-in">
    <!-- <img class="personImg" src="../images/placeholder75x75.png" alt="Picture of ${person.name}"> -->
        <p class="itemName personName"><strong>${person.name}</strong></p>
        <p class="personHeight">Height: ${person.height} cm</p>
        <p class="personWeight">Weight: ${person.mass} kg</p>
        <p class="personHairColor">Hair Color: ${capitalizeSentence(person.hair_color)}</p>
        <p class="personSkinColor">Skin Color: ${capitalizeSentence(person.skin_color)}</p>
        <p class="personEyeColor">Eye Color: ${capitalizeSentence(person.eye_color)}</p>
        <p class="personBirthYear">${yearTitle} ${person.birth_year}</p>
        <p class="personGender">Gender: ${capitalizeSentence(person.gender)}</p>
    </div>`;
};