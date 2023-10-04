import { headerRender, apiFetch, renderApiInfo, changePage, capitalizeSentence } from './utils.mjs';
headerRender('Species');

let pageCounter = 1;

main(speciesTemplateFunc);

async function main(template) {
    let apiURL = (pageNumber) => `https://swapi.dev/api/species/?page=${pageNumber}`;

    let firstApiInfo = await apiFetch(apiURL(1));
    renderApiInfo(firstApiInfo, speciesTemplateFunc);

    document.querySelector('#nextPage').addEventListener('click', async () => {
        changePage(pageCounter += 1, apiURL, speciesTemplateFunc);
    });

    document.querySelector('#previousPage').addEventListener('click', async () => {
        changePage(pageCounter -= 1, apiURL, speciesTemplateFunc);
    });
}

function speciesTemplateFunc(species) {
    return `<div class="tile">
    <!-- <img class="speciesImg" src="../placeholder75x75.png" alt="Picture of ${species.name}"> -->
        <p class="itemName speciesName"><strong>${capitalizeSentence(species.name)}</strong></p>
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