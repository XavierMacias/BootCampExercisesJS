
function removeEntry(event) {
    event.target.parentNode.remove();
}

function createPages(array) {
    for(let i=0;i<array.length;i++) {
        const h3$$ = document.createElement('h3');
        const h5$$ = document.createElement('h5');
        const p$$ = document.createElement('p');
        const button$$ = document.createElement('button');
        const div$$ = document.createElement('div');

        h3$$.textContent = array[i].title;
        h5$$.textContent = array[i].date;
        p$$.textContent = array[i].description;
        button$$.textContent = 'X'

        div$$.appendChild(h3$$);
        div$$.appendChild(h5$$);
        div$$.appendChild(p$$);
        div$$.appendChild(button$$);
        document.body.appendChild(div$$);

        button$$.addEventListener('click',removeEntry);
    }
}


function sortArray(array) {
    createPages(array.sort((a, b) => new Date(a.date) - new Date(b.date)));
}

fetch('http://localhost:3000/diary')
    .then(res => res.json())
    .then((myJson) => {
        sortArray(myJson);
    });



//diary.sort((a,b) => Date.parse(b) - Date.parse(a));