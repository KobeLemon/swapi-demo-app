
export const headerRender = (location) => {
    const parentLocation = document.querySelector('header');

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

export async function renderApiInfo(url, templateFunc) {
    const parentLocation = document.querySelector('.contentBox');
    parentLocation.innerHTML = '<em>Loading...</em>';
    const apiInfo = await apiFetch(url);
    parentLocation.innerHTML = '',

    apiInfo.results.forEach((person) => {
        console.log(person);
        const template = templateFunc(person);
        console.log(template);
        parentLocation.insertAdjacentHTML('beforeend', template);
    });
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