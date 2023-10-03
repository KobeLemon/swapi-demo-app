
export function headerRender(location) {
    const parentLocation = document.querySelector('#header');
    const contentBox = document.querySelector('.contentBox');
    contentBox.innerHTML = '<em>Loading...</em>';
    
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
    // console.log(apiInfo);
    const contentBox = document.querySelector('.contentBox');

    contentBox.innerHTML = '';

    // FROM WORD DOC, ADD PAGESBOX W/ BTNS CODE HERE & TO ALL INDEX.HTMLS EXCEPT HOME PAGE

    apiInfo.results.forEach((item) => {
        console.log(item);
        const template = templateFunc(item);
        console.log(template);
        contentBox.insertAdjacentHTML('beforeend', template);
    });
    const backToTopBtn = '<button>Back To Top</button>';
    contentBox.insertAdjacentHTML('beforeend', backToTopBtn);
    document.addEventListener('click', () => {document.querySelector('#header').scrollIntoView({behavior: "smooth"})});
}

export function capitalizeSentence(sentence) {
    let string = sentence.split(' ');
    let newString = [];
    string.forEach(item => {
        let itemSplit = item.split('');
        itemSplit[0] = itemSplit[0].toUpperCase();
        let itemJoin = itemSplit.join('');
        newString.push(itemJoin);
    })
    return newString = newString.join(' ');
}