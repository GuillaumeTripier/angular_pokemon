import Pokemon from "./pokemon";

class Battle{
    constructor(private _pokemon1: Pokemon, private _pokemon2: Pokemon){};

    get pokemon1() { return this._pokemon1 };
    get pokemon2() { return this._pokemon2 };

    get winner() {
        if(this.isBattleFinished){
            if (this.pokemon1.isDead) {
                return this.pokemon2;
            }
            return this.pokemon1;
        }
    }

    whoMustAttack(): Pokemon{
        if(this._pokemon1.speed >= this._pokemon2.speed){
            return this.pokemon1;
        }
        return this.pokemon2;
    }

    proceedAttack(attacker: Pokemon, defender: Pokemon): Pokemon{
        defender.damages = attacker.attackDamages;
        return defender;
    }

    isBattleFinished(): boolean{
        if (this.pokemon1.isDead() || this.pokemon2.isDead()){
            return true;
        } else {
            return false;
        }
    }

    endTurn(pokemon1: Pokemon, pokemon2: Pokemon): void{
        var pokemonTemp = pokemon1;
        this._pokemon1 = pokemon2;
        this._pokemon2 = pokemonTemp;
    }

    start(): void{
        //var attacker: Pokemon;
        //var defender: Pokemon;
        if(this.whoMustAttack() == this.pokemon2){
            var pokemonTemp = this.pokemon1;
            this._pokemon1 = this.pokemon2;
            this._pokemon2 = pokemonTemp;
        }
        console.log(this.isBattleFinished());
        while(this.isBattleFinished() === false){
            console.log(`Le pokemon "${this.pokemon1.name}" va attaquer`);
            this._pokemon2 = this.proceedAttack(this.pokemon1, this.pokemon2);
            console.log(`Le pokemon "${this.pokemon2.name}" à reçu ${this.pokemon1.attackDamages} point de dégats\nIl lui reste ${this.pokemon2.pv} PV.`);
            this.endTurn(this.pokemon1, this.pokemon2);
        }
        console.log(`Le gagnant est : ${this.winner.name} !`);
    }
}

export default Battle;