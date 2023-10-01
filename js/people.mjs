import { capitalizeSentence, renderApiInfo } from './utils.mjs';

let template = '';
let yearTitle = '';
const naArray = ['n/a', 'N/a,', 'n/A', 'N/A', 'na', 'NA']

const personPreviewTemplateFunc = (person) => {
    if (naArray.includes(person.gender)) {
        yearTitle = "Creation Year:"
    } else {
        yearTitle = "Birth Year:"
    }

    return template = 
    `<div class="tile">
        <img class="personImg" src="../placeholder75x75.png" alt="Picture of ${person.name}">
        <p class="personName">${person.name}</p>
        <p class="personBirthYear">${yearTitle} ${person.birth_year}</p>
        <p class="personGender">Gender: ${capitalizeSentence(person.gender)}</p>
        <button>Learn More!</button>
        <p id="swapiLink">${person.url}</p>
    </div>`;
};

const personFullTemplateFunc = (person) => {
    if (naArray.includes(person.gender)) {
        yearTitle = "Creation Year:"
    } else {
        yearTitle = "Birth Year:"
    }

    return template = 
    `<div class="tile">
        <img class="personImg" src="../placeholder75x75.png" alt="Picture of ${person.name}">
        <p class="personName">${person.name}</p>
        <p class="personHeight">${person.height}</p>
        <p class="personWeight">${person.mass}</p>
        <p class="personHairColor">${capitalizeSentence(person.hair_color)}</p>
        <p class="personSkinColor">${capitalizeSentence(person.skin_color)}</p>
        <p class="personEyeColor">${capitalizeSentence(person.eye_color)}</p>
        <p class="personBirthYear">${yearTitle} ${person.birth_year}</p>
        <p class="personGender">Gender: ${capitalizeSentence(person.gender)}</p>
        <button>Learn More!</button>
        <p id="swapiLink">${person.url}</p>
    </div>`
};

renderApiInfo('https://swapi.dev/api/people', personPreviewTemplateFunc)