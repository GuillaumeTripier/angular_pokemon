class Pokemon {
    _name;
    get name() { return this._name };
    constructor(name){
        this._name = name;
    }
}

var pikachu = new Pokemon("Pikachu");
console.log(pikachu.name);