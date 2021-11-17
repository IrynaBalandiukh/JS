// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min (a,b,c) {
    if (a<b &&a<c) {
        console.log(a)
    } else if (b<c && b<a) {
        console.log(b)
    } else {
        console.log(c)
    }
}
min(5,2,8);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function max (a,b,c) {
    if (a>b &&a>c) {
        console.log(a)
    } else if (b>c && b>a) {
        console.log(b)
    } else {
        console.log(c)
    }
}
max(1,2,7);

// - створити функцію яка повертає найбільше число з масиву
let array = [3, 7, 2, 9, 4, 5, 8];
function maxArray (arr) {
    let result = arr[0];
    for (let i=1; i<arr.length; i++) {
        if (arr[i]>result) {
            result = arr[i]
        }
    }
    return result;
}
let arrayMax = maxArray(array);
console.log(arrayMax);

// - створити функцію яка повертає найменьше число з масиву
function minArray (arr) {
    let result = arr[0];
    for (let i=1; i<arr.length; i++) {
        if (arr[i]<result) {
            result = arr[i]
        }
    }
    return result;
}
let arrayMin = minArray(array);
console.log(arrayMin);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].