const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const dynamicList$$ = document.createElement('ul');
const div$$ = document.body.querySelector('[data-function="printHere"]');

div$$.appendChild(dynamicList$$);
for(let i=0;i<cars.length;i++) {
    const liElement$$ = document.createElement('li');
    liElement$$.textContent = cars[i];
    dynamicList$$.appendChild(liElement$$);
}