
import Pokemon from '../src/pokemon';
import Battle from '../src/battle';
import {Pokedex, Pokemons } from '../src/pokedex';

describe('who must attack', () => {

    it('should return Pikachu when Pukachu speed is higher than Bulbizarre', () => {
        //given
        var pikachu:Pokemon = Pokedex.generate(Pokemons.Pikachu);
        var bulbizarre: Pokemon = Pokedex.generate(Pokemons.Bulbizarre);
        var battle: Battle = new Battle(pikachu, bulbizarre);

        //when
        var result: Pokemon = battle.whoMustAttack();

        //then
        expect(result.name).toBe(pikachu.name);
    });

    it('should return Bulbuzarre when Bulbizarre speed is higher than Pikachu', () => {
        //given
        var pikachu:Pokemon = Pokedex.generate(Pokemons.Pikachu);
        var bulbizarre: Pokemon = Pokedex.generate(Pokemons.Bulbizarre);
        bulbizarre.speed = pikachu.speed * 2;
        var battle: Battle = new Battle(pikachu, bulbizarre);

        //when
        var result: Pokemon = battle.whoMustAttack();

        //then
        expect(result.name).toBe(bulbizarre.name);
    });

    it('should return Pikachu when Pikachu speed is equals to Bulbizarre speed', () => {
        //given
        var pikachu:Pokemon = Pokedex.generate(Pokemons.Pikachu);
        var bulbizarre: Pokemon = Pokedex.generate(Pokemons.Bulbizarre);
        var battle: Battle = new Battle(pikachu, bulbizarre);

        //when
        var result: Pokemon = battle.whoMustAttack();

        //then
        expect(result.name).toBe(pikachu.name);
    });
  
});

describe('attack proceed', () => {

    it('should remove Bulbizarre PV according to the Pikachu attack points', () => {
        //given
        var pikachu:Pokemon = Pokedex.generate(Pokemons.Pikachu);
        var bulbizarre: Pokemon = Pokedex.generate(Pokemons.Bulbizarre);
        var battle: Battle = new Battle(pikachu, bulbizarre);

        //when
        var result: Pokemon = battle.proceedAttack(pikachu, bulbizarre);

        //then
        expect(result.pv).toBe(100 - 13);
    });

    it('should return 0 for Bulbizarre PV when Pikachu attack points is higher thant Bulbuzarre PV', () => {
        //given
        var pikachu:Pokemon = Pokedex.generate(Pokemons.Pikachu);
        var bulbizarre: Pokemon = Pokedex.generate(Pokemons.Bulbizarre);
        bulbizarre.pv = 1;
        var battle: Battle = new Battle(pikachu, bulbizarre);

        //when
        var result: Pokemon = battle.proceedAttack(pikachu, bulbizarre);

        //then
        expect(result.pv).toBe(0);
    });
  
});

describe('is my pokemon dead', () => {

    it('should return true when Pukachu PV is = 0', () => {
        //given
        var pikachu:Pokemon = Pokedex.generate(Pokemons.Pikachu);
        pikachu.pv = 0;

        //when
        var result: boolean = pikachu.isDead();

        //then
        expect(result).toBe(true);
    });
    
    it('should return true when Pukachu PV is < 0', () => {
        //given
        var pikachu:Pokemon = Pokedex.generate(Pokemons.Pikachu);
        pikachu.pv = -1;

        //when
        var result: boolean = pikachu.isDead();

        //then
        expect(result).toBe(true);
    });

    it('should return false when Pukachu PV is > 0', () => {
        //given
        var pikachu:Pokemon = Pokedex.generate(Pokemons.Pikachu);
        pikachu.pv = 1;

        //when
        var result: boolean = pikachu.isDead();

        //then
        expect(result).toBe(false);
    });
  
});