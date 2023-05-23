const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const input$$ = document.body.querySelector('[data-function="toFilterStreamers"]');
const button$$ = document.body.querySelector('[data-function="toShowFilterStreamers"]');

const filterArray = () => {
    let inputValue = input$$.value.toLowerCase();
    const filteredStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes(inputValue));
    console.log(filteredStreamers);
}

button$$.addEventListener('click',filterArray);