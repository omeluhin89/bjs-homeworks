function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
    const now = Date.now();
    birthday = +new Date(birthday);
    console.log(birthday);
    console.log(typeof birthday);
    const diff = now - birthday;
    const age = diff / 31622400000;
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    if (typeof animal === 'undefined') {
        return null;
    }
    let sound = animal.sound;
    if (typeof animal !== 'undefined') {
        return sound;
    }
    // код для задачи №2 писать здесь
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
    let sumMarks = 0;
    for (let mark of marks) {
        sumMarks += Number(mark);
    }
    const average = sumMarks / marks.length;
    const roundedAverage = Math.round(average);
    return roundedAverage;
}