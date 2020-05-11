class Pokemon {
    get name(): string { return this._name };
    get speed(): number { return this._speed };
    set speed(newValue: number) {
        this._speed = newValue;
    };
    get attackDamages() { return this._attackDamages };
    set attackDamages(newValue: number) {
        this._attackDamages = newValue;
    };
    get pv(): number { return this._pv };
    set damages(attackdamages: number) {
        if (this._pv - attackdamages > 0){
            this._pv = this._pv - attackdamages;
        } else {
            this._pv = 0;
        }
    };
    set pv(newPV: number) {
        this._pv = newPV;
    };
    constructor(private _name: string, private _pv: number = 100, private _speed: number, private _attackDamages: number){
    }

    isDead(): boolean {
        if (this._pv > 0){
            return false
        }
        return true;
    }
}

export default Pokemon;