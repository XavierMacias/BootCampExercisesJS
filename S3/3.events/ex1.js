const btn$$ = document.createElement('button');
btn$$.setAttribute('id','btnToClick');
btn$$.textContent = "Click me!";
document.body.appendChild(btn$$);

function handleClick(event) {
    console.log(event);
}

document.getElementById("btnToClick").addEventListener("click", handleClick);