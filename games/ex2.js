const score$$ = document.body.querySelector('[data-function="score"]');
const timeRemain$$ = document.body.querySelector('[data-function="time-left"]');

const squares$$ = document.body.querySelectorAll('.b-square');
let previousPosition = -1;
let randPos = -1;
let intervalID, intervalID2;
let finished = false;

function getRandomSquare() {
    do {
        randPos = Math.floor(Math.random()*squares$$.length);
    } while(randPos == previousPosition);
    
    previousPosition = randPos;
    return squares$$[randPos];
}

function changeDiglettPos() {
    if(previousPosition != -1) {
        squares$$[previousPosition].classList.remove("b-mole");
    }
    getRandomSquare().classList.add('b-mole');
}

function showScore() {
    alert('Your score is ' + score$$.textContent);
}

function decreaseTimer() {
    timeRemain$$.textContent--;
    if(timeRemain$$.textContent == 0) {
        timeRemain$$.textContent = 0;
        finished = true;
        clearInterval(intervalID);
        clearInterval(intervalID2);
        setTimeout(showScore,1000);
    }
}

function createIntervalDiglett() {
	intervalID = setInterval(changeDiglettPos, 500); 
}

function createIntervalTimer() {
	intervalID2 = setInterval(decreaseTimer, 1000); 
}

function clickDiglett(event) {
    const diglett$$ = event.target;
    if(!finished) {
        if(diglett$$.classList.contains('b-mole')) {
            score$$.textContent++;
        }
    }   
}
  
createIntervalDiglett();
createIntervalTimer();

for(let i=0;i<squares$$.length;i++) {
    const square$$ = squares$$[i];
    square$$.addEventListener('click',clickDiglett);
}