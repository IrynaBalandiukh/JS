// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let min = (a,b,c) => {
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
let max = (a,b,c) => {
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
let maxArray = arr => {
    let result = arr[0];
    for (let i=1; i<arr.length; i++) {
        if (arr[i]>result) {
            result = arr[i]
        }
    }
    return result;
}
console.log(maxArray(array));

// - створити функцію яка повертає найменьше число з масиву
let minArray = arr => {
    let result = arr[0];
    for (let i=1; i<arr.length; i++) {
        if (arr[i]<result) {
            result = arr[i]
        }
    }
    return result;
}
console.log(minArray(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumArray = arr => {
    let result=0;
    for (let item of arr) {
        result = result + item;
    }
    return result
}
console.log(sumArray(array));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let averageArray = arr =>  sumArray(arr)/arr.length;
console.log(averageArray(array));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let maxMin = (...num) => {
    let resultMin = num[0];
    let resultMax = num[0];
    for (let i=1; i<num.length; i++) {
        if (num[i]<resultMin) {
            resultMin = num[i]
        }
        if (num[i]>resultMax) {
            resultMax = num[i];
            console.log(resultMax);
        }
    }
    return resultMin;

}
console.log(maxMin(3,9,1,4,6,3,8));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let  arr1 = [];
let arrayRandom = (arr, l) => {
    for (let i=0; i<l; i++) {
        arr[i] = Math.round(Math.random()*100)
    }
    console.log(arr)
}
arrayRandom(arr1,20);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let  arr2 = [];
let arrayRandomLimit = (arr, l, d) => {
    for (let i=0; i<l; i++) {
        arr[i] = Math.round(Math.random()*d)
    }
    console.log(arr)
}
arrayRandomLimit(arr2,20, 7);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arr3 = [4, 6, 8];
let arrayReverse = arr => {
    let result =[];
    let j=0;
    for (let i=arr.length-1; i>=0; i--){
        result[j] = arr[i];
        j++;
    }
    return result
}
console.log(arrayReverse(arr3));