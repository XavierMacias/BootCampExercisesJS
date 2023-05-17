const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

let smallMovie = [];
let midMovie = [];
let largeMovie = [];

for(let i=0;i<movies.length;i++) {
    const movie = movies[i];
    if(movie.durationInMinutes < 100) {
        smallMovie.push(movie.name);
    } else if(movie.durationInMinutes < 200) {
        midMovie.push(movie.name);
    } else {
        largeMovie.push(movie.name);
    }
}

console.log("Small movies: " + smallMovie);
console.log("Mid movies: " + midMovie);
console.log("Large movies: " + largeMovie);