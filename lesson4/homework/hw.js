// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaOfRectangle (a,b) {
    let result = a*b;
    return result
}
let s = areaOfRectangle(4,5);
console.log(s);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaOfCircle (r){
    let result = 3.14*Math.pow(r, 2);
    return result
}
let sCircle = areaOfCircle(6);
console.log(sCircle);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaOfCylinder (r,h) {
    let result = areaOfCircle(r) + areaOfCircle(r) + 2*3.14*r*h;
    return result
}
let sCylidner = areaOfCylinder(6,9);
console.log(sCylidner);

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [3, true, 'hello', 56, 8, 'okten', false, 2];
function outputArray (a) {
    for (let i=0; i<a.length; i++) {
        console.log(a[i])
    }
}
outputArray(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph (p) {
    document.write(`<p>${p}</p>`)
}
createParagraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores consequuntur cum perferendis repudiandae sequi veniam.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList (text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
createList('item');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createList2 (text, num) {
    document.write(`<ul>`);
    for (let i=0; i<num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createList2('item', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrayList (a) {
    document.write(`<ul>`);
    for (let i=0; i<a.length; i++) {
        document.write(`<li>${a[i]}</li>`);
    }
    document.write(`</ul>`);
}
arrayList(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arr2 = [
    {
        id: 1,
        name: 'Inna',
        age: 25
    },
    {
        id: 2,
        name: 'Oleh',
        age: 19
    },
    {
        id: 3,
        name: 'Julia',
        age: 24
    },
    {
        id: 4,
        name: 'Roman',
        age: 24
    }
];
function usersArray(arr) {
    for (let i=0; i<arr.length; i++) {
        document.write(`<div>${arr[i].id} - ${arr[i].name} - ${arr[i].age}</div>`)
    }
}
usersArray(arr2);
