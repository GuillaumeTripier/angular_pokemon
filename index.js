class Pokemon {
    get name() { return this._name };
    constructor(name){
        this._name = name;
    }
}

const pikachu = new Pokemon("Pikachu");
console.log(pikachu.name);