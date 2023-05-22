const questionsType = [
    {
      title: "Gender",
      key: "gender",
      questions: ["Man", "Woman"],
    },
    {
      title: "Hair Color",
      key: "hairColor",
      questions: ["Blonde", "Red", "Pink", "Brown", "White", "Black"],
    },
    {
      title: "Moustache",
      key: "moustache",
      questions: ["Yes", "No"],
    },
    {
      title: "Glasses",
      key: "glasses",
      questions: ["Yes", "No"],
    },
    {
      title: "Hat or Cap",
      key: "hatOrCap",
      questions: ["Yes", "No"],
    },
    {
      title: "Clothes color",
      key: "clothesColor",
      questions: ["Red", "Orange", "Green", "White", "Black", "Pink"],
    },
    {
      title: "Skin color",
      key: "skinColor",
      questions: ["Light", "Dark"],
    },
    {
      title: "Long Hair",
      key: "longHair",
      questions: ["Yes", "No"],
    },
  ];
  
  const persons = [
    {
      img: "public/exercise-3/001-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/002-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/003-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/004-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "Yes",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/005-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/006-man.svg",
      gender: "Man",
      hairColor: "Brown",
      moustache: "Yes",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/007-man.svg",
      gender: "Man",
      hairColor: "Red",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/008-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/009-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/010-woman.svg",
      gender: "Woman",
      hairColor: "Brown",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/011-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/012-woman.svg",
      gender: "Woman",
      hairColor: "Red",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/013-woman.svg",
      gender: "Woman",
      hairColor: "White",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/014-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/015-woman.svg",
      gender: "Woman",
      hairColor: "Brown",
      moustache: "No",
      glasses: "Yes",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/016-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "Yes",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/017-woman.svg",
      gender: "Woman",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/018-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/019-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/020-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/021-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "Yes",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/022-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "Yes",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/023-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/024-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/025-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/026-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/027-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/028-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/029-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/030-woman.svg",
      gender: "Woman",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/031-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/032-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "Yes",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/033-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/034-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/035-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/036-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/037-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "Yes",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/038-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/039-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "Yes",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/040-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/041-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/042-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/043-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/044-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/045-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
    },
  ];

const boardgame$$ = document.body.querySelector('.b-board-game');
const questions$$ = document.body.querySelector('.b-questions');
const clues$$ = document.body.querySelector('[data-function="clueCount"]');
const chosenPerson = Math.floor(Math.random()*persons.length);

function checkPerson(event) {
  if(event.target.getAttribute('index') == chosenPerson) {
    alert('Congratulations! You won the game!');
  } else {
    alert('You lost...');
  }
  location.reload();
}

function checkClue(event) {
  event.target.disabled = true;
  event.target.style.pointerEvents = "none";
  event.target.style.opacity = '0.2';
  const chosen = persons[chosenPerson];
  const key = event.target.getAttribute('key');
  const text = event.target.textContent;
  for(let k=0;k<persons.length;k++) {
    if(((text == chosen[key]) && persons[k][key] != text) ||
    ((text != chosen[key]) && persons[k][key] == text)) {
      const pers$$ = document.body.querySelector('[index="' + k + '"]');
      pers$$.style.pointerEvents = "none";
      pers$$.style.opacity = '0.2';
    }
  }
  clues$$.textContent++;
}

for(let i=0;i<persons.length;i++) {
  const person = persons[i];
  const person$$ = document.createElement('img');
  person$$.setAttribute('src',person.img);
  person$$.setAttribute('index',i);
  person$$.setAttribute('gender',person.gender);
  person$$.setAttribute('hairColor',person.hairColor);
  person$$.setAttribute('moustache',person.moustache);
  person$$.setAttribute('glasses',person.glasses);
  person$$.setAttribute('hatOrCap',person.hatOrCap);
  person$$.setAttribute('clothesColor',person.clothesColor);
  person$$.setAttribute('skinColor',person.skinColor);
  person$$.setAttribute('longHair',person.longHair);
  person$$.className = 'b-board-game img';
  boardgame$$.appendChild(person$$);

  person$$.addEventListener('click',checkPerson);
}

for(let i=0;i<questionsType.length;i++) {
  const question = questionsType[i];
  const text$$ = document.createElement('h2');

  text$$.textContent = question.title;
  text$$.className = 'title';

  questions$$.appendChild(text$$);
  for(let j=0;j<question.questions.length;j++) {
    const button$$ = document.createElement('button');
    button$$.textContent = question.questions[j];
    button$$.className = 'questions';
    button$$.setAttribute('key',question.key);
    questions$$.appendChild(button$$);

    button$$.addEventListener('click',checkClue);
  }
}
