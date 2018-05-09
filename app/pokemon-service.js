function PokemonService() {
    var baseUrl = "https://pokeapi.co/api/v2/"

    this.getPokemon = function getPokemon(pokemon, cb) {
        $.get(baseUrl + pokemon)
        .then(data =>{
            var res = data.results
            cb(res)
        })
}
this.getPokeInfo = function getPokeInfo(url, cb){
    $.get(url)
    .then(data =>{
        var res = data
        cb(res)
    })
}
}