"use strict";

/*Задание 1*/
function getSolutions( a, b, c ) {
    const D = Math.pow(b, 2) - (4 * a * c);
    let result = {};
    if (D === 0) {
        const x1 = -b / (2 * a);
        result.D = D;
        result.roots = [x1];
    } else if (D < 0) {
        result.D = D;
    } else if (D > 0) {
        const x1 = (-b + (Math.sqrt(D))) / (2 * a);
        const x2 = (-b - (Math.sqrt(D))) / (2 * a);
        result.D = D;
        result.roots = [x1, x2];
    }
    return result;
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions(a, b, c)
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

/*Задание 2*/
function getAverageScore(data) {
    let newData = {};
    for (let subject in data) {
        newData[subject] = getAverageMark(data[subject]);
    }
    let sumAverageSubject = 0;
    for (let averageSubject in newData) {
        sumAverageSubject += newData[averageSubject]
    }
    const averageSubject = sumAverageSubject / Object.keys(newData).length
    newData.average = averageSubject;
    return newData;
}

function getAverageMark(marks){
    let sumMarks = 0;
    for(let mark of marks) {
        sumMarks += mark;
    }
    const average = sumMarks / marks.length;
    return average;
}

getAverageScore({algebra:[1,2,3,4,5,6], geometry:[1,2,3,4,5,]});

/*Задание 3*/
function getPersonData(secretData) {
    let obj = {};
    obj.firstName = getName(secretData.aaa);
    obj.lastNmae = getName(secretData.bbb);
    return obj;
}

function getName(value) {
    if (value === 0) {
        return 'Родриго';
    } else {
        return 'Эмильо';
    }
}

console.log(getPersonData({aaa: 0, bbb:0}));
console.log(getPersonData({aaa: 1, bbb:0}));
console.log(getPersonData({aaa: 0, bbb:1}));
console.log(getPersonData({aaa: 1, bbb:1}));