const divClass$$ = document.body.querySelectorAll('.fn-insert-here');

for(div of divClass$$) {
    const p$$ = document.createElement('p');
    p$$.textContent = "Voy dentro!";
    div.appendChild(p$$);
}