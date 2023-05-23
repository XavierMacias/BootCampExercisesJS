const planets$$ = document.body.querySelector('[data-function="planets"]');
const characters$$ = document.body.querySelector('[data-function="characters"]');
const search$$ = document.body.querySelector('[data-function="search"]');
let charArray = [];

function getDescription(event) {
    let img = event.target;
    if(img.nextSibling.textContent == '') {
        img.nextSibling.textContent = img.getAttribute('description');
    } else {
        img.nextSibling.textContent = '';
    }
}

function listCharacters(array) {
    characters$$.innerHTML = '';
    for(let i=0;i<array.length;i++) {
        let character = array[i];
        let img$$ = document.createElement('img');
        img$$.setAttribute('src', character.avatar);
        img$$.width = "120";
        img$$.setAttribute('description', character.description);
        let name$$ = document.createElement('p');
        name$$.textContent = character.name;
        let desc$$ = document.createElement('p');
        desc$$.textContent = '';

        characters$$.appendChild(name$$);
        characters$$.appendChild(img$$);
        characters$$.appendChild(desc$$);

        img$$.addEventListener('click',getDescription);
    }
}

function searchCharacter(event) {
    characters$$.innerHTML = '';
    let value = event.target.value.toLowerCase();
    filterArray = charArray.filter(char => char.name.toLowerCase().includes(value));
    listCharacters(filterArray);
}

function printCharacters(array) {
    search$$.innerHTML = '';
    let input$$ = document.createElement('input');
    search$$.appendChild(input$$);
    charArray = array;
    listCharacters(array);

    input$$.addEventListener('input',searchCharacter);
}

function getCharacters(event) {
    let id = event.target.getAttribute('planetID');
    fetch('http://localhost:3000/characters?idPlanet=' + id)
        .then(res => res.json())
        .then((myJson) => {
            printCharacters(myJson);
    });
}

function getPlanets(array) {
    for(let i=0;i<array.length;i++) {
        let planet = array[i];
        let img$$ = document.createElement('img');
        img$$.setAttribute('src', planet.image);
        img$$.setAttribute('planetID', planet.id);
        img$$.width = "300";
        let name$$ = document.createElement('p');
        name$$.textContent = planet.name;

        planets$$.appendChild(name$$);
        planets$$.appendChild(img$$);

        img$$.addEventListener('click',getCharacters);
    }
}

fetch('http://localhost:3000/planets')
    .then(res => res.json())
    .then((myJson) => {
        getPlanets(myJson);
});
