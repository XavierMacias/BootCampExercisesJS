const arr = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    for(let i=0;i<array.length;i++) {
        if(array[i] === text) {
            return i;
        }
    }
    return -1;
}

console.log(findArrayIndex(arr,"Mosquito"));
console.log(findArrayIndex(arr,"Ajolote"));
console.log(findArrayIndex(arr,"Salamandra"));
console.log(findArrayIndex(arr,"Caracol"));
console.log(findArrayIndex(arr,"Lagartija"));