const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];
const divs = [];

for(let i=0;i<countries.length;i++) {
    const country = countries[i];
    const div$$ = document.createElement('div');
    const h4$$ = document.createElement('h4');
    h4$$.textContent = country.title;
    const img$$ = document.createElement('img');
    img$$.setAttribute('src',country.imgUrl);
    const deleteBtn$$ = document.createElement('button');
    deleteBtn$$.textContent = "Remove";
    deleteBtn$$.setAttribute('class','btn-remove');

    div$$.appendChild(h4$$);
    div$$.appendChild(img$$);
    div$$.appendChild(deleteBtn$$);
    divs.push(div$$);
    document.body.appendChild(div$$);
}

const button$$ = document.body.querySelector('button');
const removeButtons$$ = document.body.querySelectorAll('.btn-remove');

function handleClickBtn(event) {
    event.target.parentElement.remove();
}

for(let i=0;i<removeButtons$$.length;i++) {
    removeButtons$$[i].addEventListener('click',handleClickBtn);
}

function handleClick() {
    if(countries.length > 0) {
        console.log('delete');
        document.body.removeChild(divs[divs.length-1]);
        divs.pop();
    }
}

button$$.addEventListener('click',handleClick);