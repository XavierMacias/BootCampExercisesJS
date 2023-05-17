const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

const sellCount = products.reduce((accumulated,currentValue) => {
    return accumulated + currentValue.sellCount;
},0);

console.log(sellCount);
console.log(sellCount/products.length);