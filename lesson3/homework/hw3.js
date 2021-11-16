// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arrNum = [4,6,1,3,5];
console.log(arrNum);
let arrStr = ['name', 'age', 'grade', 'town', 'nickname'];
console.log(arrStr);
let array = [3, 'hello', 'okten', true, 8, false];
console.log(array);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr1 = [];
arr1[0] = 4;
arr1[1] = true;
arr1[2] = 'hello';
arr1[3] = 52;
arr1[4] = 'world';
arr1[5] = false;
console.log(arr1);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i=0; i<10; i++) {
    document.write(`<div>box X</div>`)
}
document.write("-------------");
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i=0; i<10; i++) {
    document.write(`<div>box ${i}</div>`)
}
document.write("-------------");

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i=0;
while (i<20) {
    document.write(`<h1>item X</h1>`);
    i++;
}
document.write("-------------");

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j=0;
while (j<20) {
    document.write(`<h1>item ${j}</h1>`);
    j++;
}
document.write("-------------");

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i of array1) {
    console.log(i)
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let array2 = ['Olya', 'Max', 'Kolya', 'Julia', 'Alex', 'Iruna', 'Roman', 'Oleh', 'Nazar', 'Andriy'];
for (let i of array2) {
    console.log(i)
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let array3 = [6, true, 'hello', false, 351, 76, 'world', 'okten', true, 57];
for (let i of array3) {
    console.log(i)
}
console.log('-----------')

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let array4 = [1, 3, 'my', 'name', 'is', 'Ira', true, 5, false, 4];
for (let i of array4) {
    if (typeof i =='boolean') {
        console.log(i)
    }
}
for (let i of array4) {
    if (typeof i =='number') {
        console.log(i)
    }
}
for (let i of array4) {
    if (typeof i =='string') {
        console.log(i)
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let array5 =[];
array5[0] = true;
array5[1] = 'Lisa';
array5[2] = 465;
array5[3] = -123;
array5[4] = 0.154;
array5[5] = 'hi';
array5[6] = 'ok10';
array5[7] = false;
array5[8] = 87;
array5[9] = true;
for (let i of array5) {
    console.log(i)
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i=0; i<10; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i=0; i<100; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i=0; i<200; i=i+2) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i=0; i<200; i++) {
    if (i%2 === 0) {
        console.log(i);
        document.write(`<div>${i}</div>`);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i=0; i<200; i++) {
    if (i%2 !== 0) {
        console.log(i);
        document.write(`<div>${i}</div>`);
    }
}