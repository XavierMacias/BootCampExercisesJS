const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const dynamicList$$ = document.createElement('ul');
document.body.appendChild(dynamicList$$);

for(let i=0;i<countries.length;i++) {
    const country$$ = document.createElement('li');
    country$$.textContent = countries[i];
    dynamicList$$.appendChild(country$$);
}