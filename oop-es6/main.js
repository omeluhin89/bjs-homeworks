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
const arm = new Weapon('Рука', 1, Infinity, 1);
console.log(arm);
const bow = new Weapon('Лук', 10, 200, 3);
console.log(bow);
const sword = new Weapon('Меч', 25, 500, 1);
console.log(sword);
const knife = new Weapon('Нож', 5, 300, 1);
console.log(knife);
const staff = new Weapon('Посох', 8, 300, 2);
console.log(staff);
const longBow = new Weapon('Длинный лук', 15, bow.durability, 4);
console.log(longBow);
const axe = new Weapon('Секира', 27, 800, sword.range);
console.log(axe);
const staffStorm = new Weapon('Посох Бури', 10, staff.durability, 3);
console.log(staffStorm);


/*Задание 2*/

class Bow extends Weapon{
    constructor (){
        super()
        this.name = 'Лук';
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
        this.startDurability = this.durability;
    }
}

class Arm extends Weapon{
    constructor (){
        super()
        this.name = 'Рука';
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1;
        this.startDurability = this.durability;
    }
}

class Sword extends Weapon{
    constructor (){
        super()
        this.name = 'Меч';
        this.attack = 25;
        this.durability = 500;
        this.range = 1;
        this.startDurability = this.durability;
    }
}

class Knife extends Weapon{
    constructor (){
        super()
        this.name = 'Нож';
        this.attack = 5;
        this.durability = 300;
        this.range = 1;
        this.startDurability = this.durability;
    }
}

class Staff extends Weapon{
    constructor (){
        super()
        this.name = 'Посох';
        this.attack = 8;
        this.durability = 300;
        this.range = 2;
        this.startDurability = this.durability;
    }
}

class BowLong extends Bow{
    constructor (){
        super()
        this.name = 'Длинный Лук';
        this.attack = 15;
        this.range = 4;
        this.startDurability = this.durability;
    }
}

class Axe extends Sword{
    constructor (){
        super()
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
        this.startDurability = this.durability;
    }
}

class StormStaff extends Staff{
    constructor (){
        super()
        this.name = 'Посох бури';
        this.attack = 10;
        this.range = 3;
        this.startDurability = this.durability;
    }
}

/*Закомментил чтобы можно было вначале первое задание проверить
* а то переменные также назвал*/
// const bow = new Bow();
// const sword = new Sword();
// const arm = new Arm();
// const knife = new Knife;
// const staff = new Staff();
// const bowLong = new BowLong();
// const axe = new Axe();
// const stormStaff = new Staff();
//
// console.log(bow);
// console.log(arm);
// console.log(sword);
// console.log(knife);
// console.log(staff);
// console.log(bowLong);
// console.log(axe);
// console.log(stormStaff);


/*Задание 3*/

class StudentLog {
    constructor(name) {
        this.name = name;
        this.subject = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (grade > 5 || grade <= 0 || !Number(grade)) {
            console.log(`Вы пытались поставить оценку \"${grade}\" по предмету \"${subject}\". Допускаются только числа от 1 до 5.`);
            return this.subject[subject] ? this.subject[subject].length : 'Оценок нет'
        } else {
            if (!this.subject[subject]) {
                this.subject[subject] = []
                this.subject[subject].push(grade)
            } else {
                this.subject[subject].push(grade)
            }
            return this.subject[subject].length;
        }

    }

    getAverageBySubject(subject) {
        let sumGrade = 0;
        let average = 0;
        if (this.subject[subject]) {
            for (let grade of this.subject[subject]) {
                sumGrade += grade;
            }
            average = sumGrade / this.subject[subject].length;
        }
        return average;
    }
    getTotalAverage() {
        let newData = {};
        for (let subject in this.subject) {
            newData[subject] = this.getAverageBySubject(subject)
        }
        let sumTotalAverageGrade = 0;
        for (let averageSubject in newData) {
            sumTotalAverageGrade += newData[averageSubject]
        }
        let total = sumTotalAverageGrade / Object.keys(newData).length;
        if ((total.toString() === 'NaN' || 'undefined') && !Number(total)) {
            total = 0;
        }
        return total;
    }
}
const log = new StudentLog('Олег Никифоров');
log.addGrade(2, 'geometry');
log.addGrade(4, 'geometry');
log.addGrade(4, 'algebra');
log.addGrade(5, 'algebra');
console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('geometry'));

console.log(log.getTotalAverage());
console.log(log);


