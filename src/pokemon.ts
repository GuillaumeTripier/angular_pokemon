class Pokemon {
    get name() { return this._name };
    get speed() { return this._speed };
    constructor(private _name: string, private _speed: number){
    }
}

export default Pokemon;