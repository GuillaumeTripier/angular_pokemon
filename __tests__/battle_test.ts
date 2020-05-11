
import Pokemon from '../src/pokemon';
import Battle from '../src/battle';

describe('who must attack', () => {

    it('should return Pikachu when Pukachu speed is higher than Bulbizarre', () => {
        //given
        var pikachu:Pokemon = new Pokemon("Pikachu", 20);
        var bulbizarre: Pokemon = new Pokemon("Bulbizarre", 10);

        //when
        var result: Pokemon = Battle.whoMustAttack(pikachu, bulbizarre);

        //then
        expect(result.name).toBe(pikachu.name);
    });

    it('should return Bulbuzarre when Bulbizarre speed is higher than Pikachu', () => {
        //given
        var pikachu:Pokemon = new Pokemon("Pikachu", 10);
        var bulbizarre: Pokemon = new Pokemon("Bulbizarre", 20);

        //when
        var result: Pokemon = Battle.whoMustAttack(pikachu, bulbizarre);

        //then
        expect(result.name).toBe(bulbizarre.name);
    });

    it('should return Pikachu when Pikachu speed is equals to Bulbizarre speed', () => {
        //given
        var pikachu:Pokemon = new Pokemon("Pikachu", 10);
        var bulbizarre: Pokemon = new Pokemon("Bulbizarre", 10);

        //when
        var result: Pokemon = Battle.whoMustAttack(pikachu, bulbizarre);

        //then
        expect(result.name).toBe(pikachu.name);
    });
  
  });