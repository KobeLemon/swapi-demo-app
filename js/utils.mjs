const contentBox = document.querySelector('.contentBox');

export function headerRender(location) {
    const parentLocation = document.querySelector('#header');
    contentBox.innerHTML = '<em>Loading Page # 1...</em>';
    
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
    console.log('entered apiFetch');
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            throw new Error(await response.text);
        }
    } catch (error) {
        console.log(error);
    }
}

export function renderApiInfo(apiInfo, templateFunc) {
    console.log("entered renderApiInfo");
    console.log(apiInfo);
    console.log(`previous page: ${apiInfo.previous}`);
    console.log(`next page: ${apiInfo.next}`);

    contentBox.innerHTML = '';

    const nextPageBtn = document.querySelector('#nextPage'); 
    const previousPageBtn = document.querySelector('#previousPage');
    if (apiInfo.previous != null) {
        previousPageBtn.style.display = 'block'; 
    }  
    if (apiInfo.next != null) {
        nextPageBtn.style.display = 'block'; 
    }

    apiInfo.results.forEach((item) => {
        // console.log(item);
        const template = templateFunc(item);
        // console.log(template);
        contentBox.insertAdjacentHTML('beforeend', template);
    });
    const backToTopBtn = '<button>Back To Top</button>';
    contentBox.insertAdjacentHTML('beforeend', backToTopBtn);
    document.addEventListener('click', () => {document.querySelector('#header').scrollIntoView({behavior: "smooth"})});
}

// desiredPage arg must be 'previous' or 'next'
export async function changePage(pageCounter, apiURL, templateFunc) {
    let pageNum = pageCounter;
    console.log(`pageCounter: ${pageNum}`);
    document.querySelector('#previousPage').style.display = 'none';
    document.querySelector('#currentPage').innerText = pageNum;
    document.querySelector('#nextPage').style.display = 'none';
    contentBox.innerHTML = `<em>Loading Page # ${pageNum}...</em>`;
    const newApiInfo = await apiFetch(apiURL(pageNum));
    renderApiInfo(newApiInfo, templateFunc);
}

export function capitalizeSentence(sentence) {
    let string = sentence.split(' ');
    let newString = [];
    string.forEach(item => {
        let itemSplit = item.split('');
        itemSplit[0] = itemSplit[0].toUpperCase(); // this line has a bug with something in the planets api json. It thinks .toUpperCase() is undefined
        let itemJoin = itemSplit.join('');
        newString.push(itemJoin);
    })
    return newString = newString.join(' ');
}