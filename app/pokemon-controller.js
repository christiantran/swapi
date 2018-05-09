function PokemonController() {
    //private
    var pokemonService = new PokemonService();

    function drawPokemon(arr) {
        var template = "<ul>"
        for (var i = 0; i < arr.length; i++) {
            var poke = arr[i];
            template += `
            <li onclick="app.controllers.pokemoncontroller.getPokemon('${poke.url}')">${poke.name}</li>
            `
        }
        template += `</ul>`
        document.getElementById("Pokemon").innerHTML = template
    };

    function drawPokeInfo(info) {
        var template = `
        <img src="${info.sprites.front_default}">
        <h1>${info.name}</h1>
        <h3>Weight: ${info.weight}</h3>
        <h3>Height: ${info.height}</h3>
        <h3>Base Experience: ${info.base_experience}</h3>
        <h3>Types:</h3>
        <ul>
        `
        for (let i = 0; i < info.types.length; i++) {
            const type = info.types[i].type;
            template += `
            <li>${type.name}
            `
        }
        document.getElementById("pokeInfo").innerHTML = template
    }

    //public

    this.getPokeInfo = function getPokeInfo(url) {
        pokemonService.getPokeInfo(url, drawPokeInfo);
    };
    pokemonService.getPokemon("pokemon", drawPokemon)
}