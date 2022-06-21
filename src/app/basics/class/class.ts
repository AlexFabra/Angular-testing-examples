export class Person {

    private hp: number;

    constructor(hp: number) {
        this.hp = hp;
    }

    getDamage(damage: number) {
        if (damage >= this.hp) {
            this.hp = 0;
        }
        else {
            this.hp -= damage;
        }
        return this.hp;
    }

    getHp() {
        return this.hp;
    }

    resetHp(hp:number){
        this.hp = hp;
    }
    
}