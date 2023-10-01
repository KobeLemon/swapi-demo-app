export function renderWithTemplate (parentIDClass, dataArray, callLocation = "No callLocation given") {
    console.log(`Entered ${callLocation} renderWithTemplate ${parentIDClass}`);

    if (!parentIDClass) {
        alert(`${callLocation} renderWithTemplate Wrong ID or Class: ${parentIDClass}`);
    }
    const parentLocation = document.querySelector(parentIDClass);

    // If the parentLocation already has something displayed, this clears that so we can start over with a blank page
    // parentLocation.innerHTML = "";
    // console.log(`${callLocation} renderWithTemplate parentLocation cleared`);

    parentLocation.insertAdjacentHTML('afterbegin', dataArray);
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