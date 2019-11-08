"use strict";

/*Задание 1*/
class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurability = durability;
    }

    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability === 0) {
            return 0;
        } else if (this.durability >= (this.startDurability * 0.3) || this.durability === Infinity) {
            return this.attack;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        if (this.durability > 0) {
            return false;
        } else {
            return true;
        }
    }
}

/*Задание 2*/

class StudentLog {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        this.subject = [];
        if (!(grade <=5 && grade > 0)){
            console.log(`Вы пытались поставить оценку \"${grade}\" по предмету \"${subject}\". Допускаются только числа от 1 до 5.`);
            return this.subject.length;
        } else {
            this.subject.push(grade);
            return this.subject.length;
        }
    }
}
