const players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, index1, index2) {
    if(index1 < 0 || index1 >= array.length ||
        index2 < 0 || index2 >= array.length) {
            console.log("Index invalids!");
            return array;
        }
    let auxiliarEl = array[index1];
    array[index1] = array[index2];
    array[index2] = auxiliarEl;

    return array;
}

console.log(swap(players, 0, 2));
console.log(swap(players, 1, 4));

