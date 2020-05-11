import Pokemon from "./pokemon";

class Battle{
    static whoMustAttack(pokemon1: Pokemon, pokemon2: Pokemon): Pokemon{
        if(pokemon1.speed >= pokemon2.speed){
            return pokemon1;
        }
        return pokemon2;
    }
}

export default Battle;