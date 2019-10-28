"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    const D = Math.pow(b, 2) - (4 * a * c);
    let x = [];
    if (D === 0) {
        x.push(-b / (2 * a));
    } else if (D > 0) {
        x.push((-b + Math.sqrt(D)) / 2 * a);
        x.push((-b - Math.sqrt(D)) / 2 * a);
    }
    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    if (marks.length > 5) {
        console.log(`В массиве, кол-во оценок больше 5, лишние оценки будут удалены!`)
        marks = marks.slice(0, 5);
    }
    let sumMarks = 0;
    for(let mark of marks) {
        sumMarks += mark;
    }
    const averageMark = sumMarks / marks.length;
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    const yearToday = Date.now();
    dateOfBirthday = +new Date(dateOfBirthday);
    const differenceAge = yearToday - dateOfBirthday;
    let ageDate = new Date(differenceAge);
    let result = Math.abs(ageDate.getUTCFullYear() - 1970);
    if (result >= 18) {
        console.log(`Не желаете ли олд-фэшн, ${name}?`);
    } else {
        console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }
    return result;
}