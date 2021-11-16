// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.
let arr1 =[];
let x=2;
for (let i=0; i<50; i++){
    arr1[i] = x;
    x= x+2
}
console.log(arr1)

// b. заповнити його 50 непарними числами за допомоги циклу.
let arr2 = [];
let y = 1;
for (let i=0; i<50; i++) {
    arr2[i] = y;
    y=y+2
}
console.log(arr2)

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let arr3 = [];
for (let i=0; i<20; i++) {
    arr3[i] = Math.floor(Math.random()*10)
}
console.log(arr3)

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arr4 = [];
for (let i=0; i<20; i++) {
    arr4[i] = Math.floor(Math.random()*(732-8)+8)
}
console.log(arr4)

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i=0; i<arr4.length; i+=3) {
        console.log(arr4[i])
}
console.log('---------')

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i=0; i<arr4.length; i+=3) {
    if (arr4[i]%2===0) {
        console.log(arr4[i])
    }
}
console.log('----------')

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arr5=[];
let q=0;
for (let i=0; i<arr4.length; i+=3) {
    if (arr4[i]%2===0) {
        console.log(arr4[i])
        arr5[q] = arr4[i]
        q++
    }
}
console.log(arr5)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let arr6 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let i=0; i<arr6.length; i++) {
    if (arr6[i+1]%2===0) {
        console.log(arr6[i])
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arr7 = [100,250,50,168,120,345,188];
let sum = 0;
for (let item of arr7) {
    sum = sum+item;
}
let result = sum/ (arr7.length);
console.log(result)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr8 = [Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10),Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
let arr9 = [];
let w = 0;
for (let item of arr8) {
    arr9[w] = item*5;
    w++;
}
console.log(arr8 , arr9 )

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arr10 = [67, 'hello', 'okten', true, 13, 5, false];
let arr11 = [];
let e = 0;
for (let item of arr10) {
    if (typeof item =='number'){
        arr11[e] = item;
        e++
    }
}
console.log(arr11)

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
for (let i=0; i<usersWithId.length; i++) {
    for (let j=0; j<citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            Object.assign(usersWithId[i], {address: citiesWithId[j]})
        }
    }
}
console.log(usersWithId)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr12 = [6, 3, 1, 6, 3, 8, 9, 1, 5, 2];
for (let item of arr12) {
    if (item%2 === 0) {
        console.log(item)
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arr13 = [];
for (let i=0; i<arr12.length; i++) {
    arr13[i]=arr12[i]
}
console.log(arr13)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let arr14 =[ 'a', 'b', 'c'];
let str = '';
for (let item of arr14) {
    str = `${str}${item}`
}
console.log(str);

let str2 = '';
let i=0;
while (i<arr14.length) {
    str2 = `${str2}${arr14[i]}`
    i++
}
console.log(str2);

let str3 = '';
for (let i=0; i<arr14.length; i++){
    str3 = `${str3}${arr14[i]}`
}
console.log(str3)