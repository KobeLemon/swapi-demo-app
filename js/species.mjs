import { headerRender, apiFetch, renderApiInfo, capitalizeSentence } from './utils.mjs';
headerRender('Species');

let template = '';

const apiInfo = await apiFetch('https://swapi.dev/api/species');
// console.log(apiInfo);

renderApiInfo(apiInfo, speciesTemplateFunc);

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