import { Pokedex, Pokemons } from "./pokedex";
import Battle from "./battle";
import Pokemon from "./pokemon";

var pikachu: Pokemon = Pokedex.generate(Pokemons.Pikachu);
var bulbizarre: Pokemon = Pokedex.generate(Pokemons.Bulbizarre);
var battle: Battle = new Battle(pikachu, bulbizarre);
battle.start();