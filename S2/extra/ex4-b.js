const arr = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    for(let i=0;i<array.length;i++) {
        if(array[i] === text) {
            return i;
        }
    }
    return -1;
}

function removeItem(array, text) {
    let index = findArrayIndex(array, text);
    if(index != -1) {
        array.splice(index,1);
    } else {
        console.log("This element isn't in the array!");
    }
    return array;
}

console.log(removeItem(arr,"Mosquito"));
console.log(removeItem(arr,"Ajolote"));
console.log(removeItem(arr,"Lagartija"));