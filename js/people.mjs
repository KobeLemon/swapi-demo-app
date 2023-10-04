import { headerRender, buildContent, apiFetch, renderApiInfo, changePage, capitalizeSentence } from './utils.mjs';
headerRender('People');

let yearTitle;
const naArray = ['n/a', 'N/a,', 'n/A', 'N/A', 'na', 'NA'];
let pageCounter = 1;
let firstApiInfo;
let wookieeInfo = {};
let basicApiURL = (pageNumber) => `https://swapi.dev/api/people/?page=${pageNumber}`;
let wookieeApiURL = (pageNumber) => `https://swapi.dev/api/people/?format=wookiee&?page=${pageNumber}`;

document.querySelector(`#basicformatBtn`)
    .addEventListener('click', () => {
        document.querySelector('.contentBox').innerHTML = '<em>Loading Page # 1...</em>';
        main('basic');
})

document.querySelector(`#wookieeformatBtn`)
    .addEventListener('click', () => {
        document.querySelector('.contentBox').innerHTML = '<em>Loading Page # 1...</em>';
        main('wookiee');
})

async function main(format) {
    if (format === 'basic') {
        buildContent(basicApiURL, firstApiInfo, basicPersonTemplateFunc, pageCounter)
    } else if (format === 'wookiee') {
        buildContent(wookieeApiURL, firstApiInfo, wookieePersonTemplateFunc, pageCounter)
    } else {
        alert('Format from basic and/or wookiee buttons is incorrect. Check the buttons code')
    }
}

function basicPersonTemplateFunc(person) {
    // console.log(person)
    if (naArray.includes(person.gender)) {
        yearTitle = "Year of Creation:"
    } else {
        yearTitle = "Year of Birth:"
    }

    return `<div class="tile">
    <!-- <img class="personImg" src="../placeholder75x75.png" alt="Picture of ${person.name}"> -->
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

function wookieePersonTemplateFunc(person) {
    // console.log(person);
    // ALL OF THE "person.WookieeWordHere" VARIABLES NEED TO BE CHANGED TO ACTUAL WOOKIE WORDS INSTEAD
    wookieeInfo = {
        name: person.WookieeWordHere,
        height: person.WookieeWordHere,
        mass: person.WookieeWordHere,
        hair_color: person.WookieeWordHere,
        skin_color: person.WookieeWordHere,
        eye_color: person.WookieeWordHere,
        birth_year: person.WookieeWordHere,
        gender: person.WookieeWordHere,
    }
    if (naArray.includes(wookieeInfo.gender)) {
        yearTitle = "Year of Creation:"
    } else {
        yearTitle = "Year of Birth:"
    }
    return `<div class="tile">
        <img class="personImg" src="../placeholder75x75.png" alt="Picture of ${wookieeInfo.name}">
        <p class="personName">${wookieeInfo.name}</p>
        <p class="personHeight">Height: ${wookieeInfo.height} cm</p>
        <p class="personWeight">Weight: ${wookieeInfo.mass} kg</p>
        <p class="personHairColor">Hair Color: ${capitalizeSentence(wookieeInfo.hair_color)}</p>
        <p class="personSkinColor">Skin Color: ${capitalizeSentence(wookieeInfo.skin_color)}</p>
        <p class="personEyeColor">Eye Color: ${capitalizeSentence(wookieeInfo.eye_color)}</p>
        <p class="personBirthYear">${yearTitle} ${wookieeInfo.birth_year}</p>
        <p class="personGender">Gender: ${capitalizeSentence(wookieeInfo.gender)}</p>
    </div>`;
};