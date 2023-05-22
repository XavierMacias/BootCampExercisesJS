const baseUrl = 'https://api.nationalize.io?name=';
const input$$ = document.body.querySelector('input');
const button$$ = document.body.querySelector('button');

const getData = async () => {
    const response = await fetch(baseUrl+input$$.value);
    const res = await response.json();
    return res;
}

const drawLine = (array) => {
    let text = "";
    const p$$ = document.createElement('p');
    document.body.appendChild(p$$);
    for(let i=0;i<array.length;i++) {
        let countryCd = array[i].country_id;
        let prob = array[i].probability;
        if(i==0) {
            text += 'El nombre de ' + input$$.value + ' tiene un ' + prob*100 + ' por ciento de ser de ' + countryCd;
        } else {
            text += ' y un ' + prob*100 + ' por ciento de ser de ' + countryCd;
        }
    }
    p$$.textContent = text;
}

const consultAPI = async () => {
    const country = await getData();
    const infoArray = country.country;
    drawLine(infoArray);
}

button$$.addEventListener('click',consultAPI);