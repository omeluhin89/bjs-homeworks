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


