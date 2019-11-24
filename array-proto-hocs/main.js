
function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
        return true;
    } else {
        return false;
    }
}

compareArrays([8, 9], [6]); // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]); // true

function memoize(fn, limit) {
    const results = [];
    console.log(fn.arguments);
    return fn;
}

const sum = (a,b) => a + b;
const mSum = memoize(sum, 2);
console.log(sum(3,4));
console.log(mSum(3,4));
