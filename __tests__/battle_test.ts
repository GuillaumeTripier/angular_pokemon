
import Pokemon from '../src/pokemon';
import Battle from '../src/battle';

describe('who must attack', () => {

    it('should return Pikachu when Pukachu speed is higher than Bulbizarre', () => {
        //given
        var pikachu:Pokemon = new Pokemon("Pikachu", 20, 0);
        var bulbizarre: Pokemon = new Pokemon("Bulbizarre", 10, 0);

        //when
        var result: Pokemon = Battle.whoMustAttack(pikachu, bulbizarre);

        //then
        expect(result.name).toBe(pikachu.name);
    });

    it('should return Bulbuzarre when Bulbizarre speed is higher than Pikachu', () => {
        //given
        var pikachu:Pokemon = new Pokemon("Pikachu", 10, 0);
        var bulbizarre: Pokemon = new Pokemon("Bulbizarre", 20, 0);

        //when
        var result: Pokemon = Battle.whoMustAttack(pikachu, bulbizarre);

        //then
        expect(result.name).toBe(bulbizarre.name);
    });

    it('should return Pikachu when Pikachu speed is equals to Bulbizarre speed', () => {
        //given
        var pikachu:Pokemon = new Pokemon("Pikachu", 10, 0);
        var bulbizarre: Pokemon = new Pokemon("Bulbizarre", 10, 0);

        //when
        var result: Pokemon = Battle.whoMustAttack(pikachu, bulbizarre);

        //then
        expect(result.name).toBe(pikachu.name);
    });
  
});

describe('attack proceed', () => {

    it('should remove Bulbizarre PV according to the Pikachu attack points', () => {
        //given
        var pikachu:Pokemon = new Pokemon("Pikachu", 20, 13);
        var bulbizarre: Pokemon = new Pokemon("Bulbizarre", 10, 13);

        //when
        var result: Pokemon = Battle.proceedAttack(pikachu, bulbizarre);

        //then
        expect(result.pv).toBe(100 - 13);
    });

    it('should return 0 for Bulbizarre PV when Pikachu attack points is higher thant Bulbuzarre PV', () => {
        //given
        var pikachu:Pokemon = new Pokemon("Pikachu", 20, 130);
        var bulbizarre: Pokemon = new Pokemon("Bulbizarre", 10, 13);

        //when
        var result: Pokemon = Battle.proceedAttack(pikachu, bulbizarre);

        //then
        expect(result.pv).toBe(0);
    });
  
});