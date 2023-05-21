let cardArray = [
    {
      id: 1,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 2,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 3,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 4,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 5,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 6,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
    {
      id: 7,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 8,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 9,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 10,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 11,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 12,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
  ];

  const grid$$ = document.querySelector('.b-grid');
  const score$$ = document.querySelector('[data-function="score"]');
  const attempts$$ = document.querySelector('[data-function="attempts"]');
  let cardsMoved = 0;
  let move = null;
  let timeout = false;

  function shuffleFisherYates(array) {
    let i = array.length;
    while (i--) {
      const ri = Math.floor(Math.random() * i);
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
  }

  cardArray = shuffleFisherYates(cardArray);
  console.log(cardArray);

  function victoryMsg() {
    alert("Felicidades! Has ganado!");
  }

  function checkMove(img) {
    if(img.name == move.name) {
      score$$.textContent++;
      img.setAttribute('src',"public/exercise-1/tick.svg");
      move.setAttribute('src',"public/exercise-1/tick.svg");
      if(score$$.textContent >= cardArray.length/2) {
        setTimeout(victoryMsg,500);
      }
      
    } else {
      img.setAttribute('state','tapped');
      img.setAttribute('src',"public/exercise-1/universe.svg");
      move.setAttribute('state','tapped');
      move.setAttribute('src',"public/exercise-1/universe.svg");
    }
    move = null;
    timeout = false;
  }
  
  function clickCard(event) {
    if(!timeout) {
      let img = event.target;
      if(img.getAttribute('state') != 'destapped') {
        img.setAttribute('state','destapped');
        img.setAttribute('src','public/exercise-1/'+img.name+'.svg');

        if(cardsMoved == 0) {
          move = img;
          cardsMoved++;
        } else {
          attempts$$.textContent++;
          cardsMoved = 0;
          timeout = true;
          setTimeout(checkMove,1200,img);
        }
      }
    }
  }

  for(let i=0;i<cardArray.length;i++) {
    const card = cardArray[i];
    const card$$ = document.createElement('img');
    card$$.setAttribute('name',card.name);
    card$$.setAttribute('src',"public/exercise-1/universe.svg");
    card$$.setAttribute('state','tapped');

    //const divCard$$ = document.createElement('div');
    //divCard$$.appendChild(card$$);
    grid$$.appendChild(card$$);

    card$$.addEventListener('click',clickCard);
  }