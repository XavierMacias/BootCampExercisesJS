const p$$ = document.createElement('p');
p$$.textContent = "Voy en medio!";

const div$$ = document.body.querySelectorAll('div')[1];
document.body.insertBefore(p$$,div$$);

//document.body.innerHTML = `<div></div>
//                            <p>Voy en medio!</p>
//                            <div></div>`;