class Pokemon {
    _pv: number = 100;
    get name() { return this._name };
    get speed() { return this._speed };
    get attackDamages() { return this._attackDamages };
    get pv() { return this._pv };
    set damages(attackdamages: number) {
        if (this._pv - attackdamages > 0){
            this._pv = this._pv - attackdamages;
        } else {
            this._pv = 0;
        }
    };
    constructor(private _name: string, private _speed: number, private _attackDamages: number){
    }
}

export default Pokemon;