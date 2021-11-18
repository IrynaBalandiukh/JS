// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function concat () {
   let result = arguments[0];
   for (let i=1; i<arguments.length; i++){
       result = result+arguments[i]
   }
   console.log(result)
}
concat (5);
concat (1, 6);
concat ('ok');
concat ('ok', 'ten');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
let numbers1 = [1, 2, 3, 4];
let numbers2 = [2, 3, 4, 5];
function sumArrays (arr1, arr2) {
    let sumnumbers = [];
    for (let i=0; i<arr1.length; i++) {
        sumnumbers[i] = arr1[i] + arr2[i]
    }
    return sumnumbers
}
let numbers3 = sumArrays(numbers1, numbers2);
console.log(numbers3);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let users = [{name: 'Dima', age: 13}, {model: 'Camry'}];
function keysOfObjects (arr) {
    let keys =[];
    j=0;
    for (let i=0; i<arr.length; i++) {
        for (let key in arr[i]) {
            keys[j]=key;
            j++
        }
    }
    return keys;
}
let keysOfUsers = keysOfObjects(users);
console.log(keysOfUsers);

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function valueOfObjects (arr) {
    let value =[];
    j=0;
    for (let i=0; i<arr.length; i++) {
        for (let item in arr[i]) {
            value[j]=arr[i][item];
            j++
        }
    }
    return value;
}
let valueOfUsers = valueOfObjects(users);
console.log(valueOfUsers);