const getData = async () => {
    const response = await fetch('https://digimon-api.vercel.app/api/digimon');
    const res = await response.json();
    return res;
}

const printCharacters = (characters) => {
    for(let i=0;i<10;i++) {
        const digimon = characters[i];
        const div$$ = document.createElement('div');
        const p$$ = document.createElement('p');
        const img$$ = document.createElement('img');

        img$$.setAttribute('src',digimon.img);
        p$$.textContent = digimon.name;
        div$$.appendChild(p$$);
        div$$.appendChild(img$$);
        document.body.appendChild(div$$);
    }
}

const consultAPI = async () => {
    const characters = await getData();
    printCharacters(characters);
}

consultAPI();