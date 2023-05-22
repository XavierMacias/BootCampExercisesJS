const baseUrl = 'https://api.nationalize.io?name=';
const input$$ = document.body.querySelector('input');
const button$$ = document.body.querySelector('button');

function consultAPI() {
  fetch(baseUrl+input$$.value)
  .then(res => res.json())
  .then((myJson) => {
    console.log(myJson);
  });
}

button$$.addEventListener('click',consultAPI);