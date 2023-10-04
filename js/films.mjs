import { headerRender, apiFetch, renderApiInfo, changePage } from './utils.mjs';
headerRender('Films');

let pageCounter = 1;

main(filmTemplateFunc);

async function main(template) {
    let apiURL = (pageNumber) => `https://swapi.dev/api/films/?page=${pageNumber}`;

    let firstApiInfo = await apiFetch(apiURL(1));
    renderApiInfo(firstApiInfo, filmTemplateFunc);

    document.querySelector('#nextPage').addEventListener('click', async () => {
        changePage(pageCounter += 1, apiURL, filmTemplateFunc);
    });

    document.querySelector('#previousPage').addEventListener('click', async () => {
        changePage(pageCounter -= 1, apiURL, filmTemplateFunc);
    });
}

function filmTemplateFunc(film) {
    return `<div class="tile">
    <!-- <img class="filmImg" src="../placeholder75x75.png" alt="Picture of ${film.name}"> -->
        <p class="itemName filmTitle"><strong>${film.title}</strong></p>
        <p class="filmEpisodeID">Episode # ${film.episode_id}</p>
        <p class="filmDirector">Director: ${film.director}</p>
        <p class="filmProducer">Producer(s): ${film.producer}</p>
        <p class="filmReleaseDate">Release Date: ${film.release_date}</p>
        <p class="filmOpeningCrawl">Opening Crawl: <br>${film.opening_crawl}</p>
    </div>`
}