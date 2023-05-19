const input$$ = document.body.querySelector('input');

function focusElement(event) {
    console.log(event.target.value);
    //input$$.value
}

input$$.addEventListener('focus',focusElement);