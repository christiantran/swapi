/*function PokemonService() {
    var baseUrl = 'https://pokeapi.co/api/v2/'

    /*this.getPokemon = function getPokemon(url, cb) {
        if (typeof cb != "function") {
            return console.error("[getPokemon] requires a callback", url, cb);
        }
        url = url || "https://pokeapi.co/";
        //console.log(1);
        // @ts-ignore
        $.get(url).then(cb);
        //console.log(2);
    };

    this.handlePokemonResponse = function handlePokemonResponse(collection, cb) {
        $.get(baseUrl + collection)
            .then(data => {
                var res = JSON.parse(data).results
                cb(res)
            })
    }

    this.getPokemon = function getPokemon(url, cb) {
        $.get(url)
            .then(data => {
                var res = JSON.parse(data)
                cb(res)
            })
    }

}