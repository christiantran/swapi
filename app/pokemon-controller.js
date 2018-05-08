/*function PokemonController() {
    //private
    var pokemonService = new PokemonService();


    function drawPokemon(people) {
        var template = "";
        people.forEach(pokemon => {
            template += `<div>
        <h5>${pokemon.name}</h5>
      </div>`;
        });
        document.getElementById("poke-people").innerHTML = template;
    }


    function drawPokeButton(res) {
        var template = ''
        if (res.previous) {
            template += `<button onclick="app.controllers.pokemonController.getPokemon('${res.previous}')">Previous</button>`
        }
        if (res.next) {
            template += `<button onclick="app.controllers.pokemonController.getPokemon('${res.next}')">Next</button>`
        }
        document.getElementById('poke-button').innerHTML = template
    }

    function handlePokemonResponse(res) {
        drawPokeButton(res);
        drawPokemon(res.results);
    }

    //public

    this.getPokemon = function (url) {
        pokemonService.getPokemon(url, handlePokemonResponse);
    };



}