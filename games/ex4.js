let rows = 0;
let columns = 0;
let attempts = 0;
const attempts$$ = document.body.querySelector('[data-function="attempts"]')
const table$$ = document.body.querySelector('[data-function="board"]')
const reset$$ = document.body.querySelector('.resetBtn');

const imgXUrl = './public/exercise-4/x.png';
const imgChestUrl = './public/exercise-4/chest.png';
const imgSkullUrl = './public/exercise-4/skull.png';

do {
    rows = window.prompt('Escribe el numero de filas');
} while(rows == null || rows == "");

do {
    columns = window.prompt('Escribe el numero de columnas');
} while(columns == null || columns == "");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const treasureX = getRandomInt(0,rows-1);
const treasureY = getRandomInt(0,columns-1);

function finishGame() {
    alert("¡Felicidades! ¡Has encontrado el One Piece!");
}

function clickBox(event) {
    let box$$ = event.target;
    if(box$$.getAttribute('state') == 'hide') {
        attempts++;
        attempts$$.textContent = attempts;
        if(box$$.getAttribute('coordx') == treasureX && box$$.getAttribute('coordy') == treasureY) {
            box$$.setAttribute('src',imgChestUrl);
            const boxes$$ = document.body.querySelectorAll('.box');
            boxes$$.forEach(element => {
                element.setAttribute('state','shown');
            });
            setTimeout(finishGame, 1000);
        } else {
            box$$.setAttribute('src',imgSkullUrl);
        }
        box$$.setAttribute('state','shown');
    }
}

for(let i=0;i<rows;i++) {
    const row$$ = document.createElement('tr');
    table$$.appendChild(row$$);
    for(let j=0;j<columns;j++) {
        const column$$ = document.createElement('td');
        const img$$ = document.createElement('img');
        img$$.setAttribute('src',imgXUrl); 
        column$$.appendChild(img$$);
        row$$.appendChild(column$$);

        img$$.setAttribute('coordx',i);
        img$$.setAttribute('coordy',j);
        img$$.setAttribute('state','hide');
        img$$.className = "box";

        img$$.addEventListener('click',clickBox);
    }
}

function resetGame() {
    location.reload();
}

reset$$.addEventListener('click',resetGame);