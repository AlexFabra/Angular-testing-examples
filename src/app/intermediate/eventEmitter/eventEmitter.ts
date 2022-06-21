import { EventEmitter } from "@angular/core";

export class Cat {
    
    lives: number;
    name: string;
    meow = new EventEmitter<string>();

    constructor(name: string) {
        this.name = name;
        this.lives=7;
    }

    getLives(): number {
        return this.lives;
    }
    setLives(lifes: number) {
        this.lives = lifes;
    }
    fall(){
        this.lives--;
        this.meow.emit("Meow!");
    }
}