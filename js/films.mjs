import { capitalizeSentence, renderApiInfo } from "./utils.mjs";

let template = '';

const filmTemplateFunc = (film) => {
    return template = 
    `<div class="tile">
        <img class="filmImg" src="../placeholder75x75.png" alt="Picture of ${film.name}">
        <p class="filmTitle">${film.title}</p>
        <p class="filmEpisodeID">Episode # ${film.episode_id}</p>
        <p class="filmDirector">Director: ${film.director}</p>
        <p class="filmProducer">Producer(s): ${film.producer}</p>
        <p class="filmReleaseDate">Release Date: ${film.release_date}</p>
        <p class="filmOpeningCrawl">Opening Crawl: <br>${film.opening_crawl}</p>
    </div>`
}

renderApiInfo('https://swapi.dev/api/films', filmTemplateFunc)