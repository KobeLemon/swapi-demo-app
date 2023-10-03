import { headerRender, apiFetch, renderApiInfo, changePage, capitalizeSentence } from './utils.mjs';
headerRender('Species');

let template;
const contentBox = document.querySelector('.contentBox');
console.log(contentBox);

let pageCounter = 1;
let apiURL = (pageNumber) => `https://swapi.dev/api/species/?page=${pageNumber}`;

let firstApiInfo = await apiFetch(apiURL(1));
renderApiInfo(firstApiInfo, speciesTemplateFunc);

const previousPageBtn = document.querySelector('#previousPage');
const nextPageBtn = document.querySelector('#nextPage');

nextPageBtn.addEventListener('click', async () => {
    changePage(pageCounter += 1, apiURL, speciesTemplateFunc);
});

previousPageBtn.addEventListener('click', async () => {
    changePage(pageCounter -= 1, apiURL, speciesTemplateFunc);
});

function speciesTemplateFunc(species) {
    return template = 
    `<div class="tile">
        <img class="speciesImg" src="../placeholder75x75.png" alt="Picture of ${species.name}">
        <p class="speciesName">${capitalizeSentence(species.name)}</p>
        <p class="speciesClass">Class: ${capitalizeSentence(species.classification)}</p>
        <p class="speciesDesig">Designation: ${capitalizeSentence(species.designation)}</p>
        <p class="speciesAvgHeight">Average Height: ${species.average_height} cm</p>
        <p class="speciesSkinColors">Skin Colors: ${capitalizeSentence(species.skin_colors)}</p>
        <p class="speciesHairColors">Hair Colors: ${capitalizeSentence(species.hair_colors)}</p>
        <p class="speciesEyeColors">Eye Colors: ${capitalizeSentence(species.eye_colors)}</p>
        <p class="speciesAvgLifespan">Average Lifespan: ${species.average_lifespan} years</p>
        <p class="speciesLanguage">Language: ${capitalizeSentence(species.language)}</p>
    </div>`
}