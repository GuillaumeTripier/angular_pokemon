import Pokemon from "./pokemon";

export enum Pokemons {
    Pikachu,
    Bulbizarre
};

export class Pokedex {
    static generate(pokemonName: Pokemons): Pokemon{
        var pokemon: Pokemon;
        switch (pokemonName){
            case Pokemons.Pikachu:
                pokemon = new Pokemon("Picachu", 100, 20, 13);
                break;
            case Pokemons.Bulbizarre:
                pokemon = new Pokemon("Bulbizarre", 100, 15, 10);
                break;
            default:
                pokemon = new Pokemon("looser", 1, 1, 1);
        }
        return pokemon;
    }
}

//export default Pokedex;