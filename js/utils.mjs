const contentBox = document.querySelector('.contentBox');

export function headerRender(location) {
    const parentLocation = document.querySelector('#header');
    contentBox.innerHTML = `<p id="loadingPageNum"><em>Loading Page # 1...</em></p>`;
    
    let template =
        `<h1>${location} of Star Wars</h1>
        <nav>
            <a href="../index.html"><h2>Home</h2></a>
            <a href="../people/"><h2>People</h2></a>
            <a href="../planets/"><h2>Planets</h2></a>
            <a href="../films/"><h2>Films</h2></a>
            <a href="../species/"><h2>Species</h2></a>
            <a href="../vehicles/"><h2>Vehicles</h2></a>
            <a href="../starships/"><h2>Starships</h2></a>
        </nav>`;

    parentLocation.insertAdjacentHTML('afterbegin', template);
}

export async function apiFetch(url) {
    // console.log(url);
    // console.log('entered apiFetch');
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            return data;
        } else {
            throw new Error(await response.text);
        }
    } catch (error) {
        console.log(error);
    }
}

export function renderApiInfo(apiInfo, templateFunc) {
    // console.log("entered renderApiInfo");
    // console.log(apiInfo);
    // console.log(`previous page: ${apiInfo.previous}`);
    // console.log(`next page: ${apiInfo.next}`);

    contentBox.innerHTML = '';
    const backToTopBox = document.querySelector('.backToTopBox');
    backToTopBox.innerHTML = '';

    console.log(apiInfo);
    console.log(apiInfo.previous);
    console.log(document.querySelector('#previousPage'))

    if (apiInfo.previous == null) {
        document.querySelector('#previousPage').classList.add('displayNone');
    } else if (apiInfo.previous !== null) {
        document.querySelector('#previousPage').classList.remove('displayNone');
    } 
    if (apiInfo.next == null) {
        document.querySelector('#nextPage').classList.add('displayNone');
    } else if (apiInfo.next !== null) {
        document.querySelector('#nextPage').classList.remove('displayNone');
    }

    apiInfo.results.forEach((item) => {
        // console.log('apiInfoResults foreach:');
        // console.log(item.hair_color);
        const template = templateFunc(item);
        // console.log(template);
        contentBox.insertAdjacentHTML('beforeend', template);
    });
    backToTopBox.insertAdjacentHTML('beforeend', '<button class="backToTopBtn">Back To Top</button>');
    document.addEventListener('click', () => {document.querySelector('#header').scrollIntoView({behavior: "smooth"})});
}

export async function changePage(pageCounter, apiURL, templateFunc) {
    if (pageCounter <= 0) {
        pageCounter = 1;
    }
    let pageNum = pageCounter;
    // console.log(`pageCounter: ${pageNum}`);
    document.querySelector('#currentPage').innerText = pageNum;
    contentBox.innerHTML = `<p id="loadingPageNum"><em>Loading Page # ${pageNum}...</em></p>`;
    const newApiInfo = await apiFetch(apiURL(pageNum));
    renderApiInfo(newApiInfo, templateFunc);
}

export function capitalizeSentence(sentence) {
    let string = sentence.split(' ');
    let newString = []
    string.forEach( (item) => {
        let itemSplit = item.split('');
        itemSplit[0] = itemSplit[0].toUpperCase();
        let itemJoin = itemSplit.join('')
        newString.push(itemJoin)
    })
    return newString = newString.join(' ');
}