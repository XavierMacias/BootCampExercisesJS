const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]
let deleteElements = [];

for(item of toys) {
    if(item.name.toLowerCase().includes("gato")) {
        deleteElements.push(item);
    }
}

for(item of deleteElements) {
    toys.splice(toys.indexOf(item),1);
}

console.log(toys);