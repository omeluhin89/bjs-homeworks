"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;
    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (typeof percent === 'string' || typeof percent === "number") {
        percent = Number(percent);
    } else {
        console.log(`Параметр процентной ставки содержит неправильное значение ${percent}`);
        return
    }
    if (typeof contribution === 'string' || typeof contribution === "number") {
        contribution = Number(contribution)
    } else {
        console.log(`Параметр процентной ставки содержит неправильное значение ${contribution}`);
        return
    }
    if (typeof amount === 'string' || typeof amount === "number") {
        amount = Number(amount);
    } else {
        console.log(`Параметр процентной ставки содержит неправильное значение ${amount}`);
        return
    }
    if (typeof date !== 'string' && typeof date !== "number") {
        console.log(`Параметр процентной ставки содержит неправильное значение ${date}`);
        return
    }
    let dateEndCredit = +new Date(date);
    const dateNow = Date.now();
    let quantityMonth = ((dateEndCredit - dateNow) / (3600 * 24 * 1000 * 30)).toFixed();
    const sumReturnBank = Number(amount) - Number(contribution);
    const P = (percent/100) / 12;
    const pay = sumReturnBank * (P + P / (((1 + P) ** quantityMonth) - 1));
    const totalSum = contribution + sumReturnBank + (pay * quantityMonth) - amount;
    const totalAmount = Number(totalSum.toFixed(2));
    console.log(totalAmount);
    return totalAmount;
    // код для задачи №1 писать здесь
    //return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let greeting;
    if (Boolean(name)){
        greeting = `Привет, мир! Меня зовут ${name}`;
        console.log(greeting);
    } else {
        greeting = `Привет, мир! Меня зовут Аноним`;
        console.log(greeting);
    }
    return greeting
}