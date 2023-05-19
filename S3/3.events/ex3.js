const input$$ = document.body.querySelector('input');

function inputHandler(event) {
    console.log(event.target.value);
}

input$$.addEventListener('input',inputHandler);