 // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let str1 = 'hello';
let str2 = 'owu';
let str3 = 'com';
let str4 = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let bull1 = true;
let bull2 = false;


//     Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(bull1);
console.log(bull2);
alert(str1);
alert(str2);
alert(str3);
alert(str4);
alert(num1);
alert(num2);
alert(num3);
alert(num4);
alert(num5);
alert(num6);
alert(num7);
alert(bull1);
alert(bull2);
document.write(str1 +' ');
document.write(str2 +' ');
document.write(str3 +' ');
document.write(str4 +' ');
document.write(num1 +' ');
document.write(num2 +' ');
document.write(num3 +' ');
document.write(num4 +' ');
document.write(num5 +' ');
document.write(num6 +' ');
document.write(num7 +' ');
document.write(bull1 +' ');
document.write(bull2 +' ');


// - Переприсвоїти кожній змінній з завдання значення на довільне.
str1 = 'My';
str2 = 'name';
str3 = 'is';
str4 = 'Ira';
num1 = -9.467;
num2 = 8;
num3 = 6.78;
num4 = 4;
num5 = 0;
num6 = -34;
num7 = 7.3;
bull1 = false;
bull2 = 5>2;


//     Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(bull1);
console.log(bull2);
alert(str1);
alert(str2);
alert(str3);
alert(str4);
alert(num1);
alert(num2);
alert(num3);
alert(num4);
alert(num5);
alert(num6);
alert(num7);
alert(bull1);
alert(bull2);
document.write(str1 +' ');
document.write(str2 +' ');
document.write(str3 +' ');
document.write(str4 +' ');
document.write(num1 +' ');
document.write(num2 +' ');
document.write(num3 +' ');
document.write(num4 +' ');
document.write(num5 +' ');
document.write(num6 +' ');
document.write(num7 +' ');
document.write(bull1 +' ');
document.write(bull2 +' ');


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = 'Iryna';
let middleName = 'Ivanivna';
let lastName = 'Balandiukh';
let person;
person = (`${firstName} ${middleName} ${lastName}`);
console.log(person);


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
let firstName1 = prompt('Ім`я');
let middleName1 = prompt('По-батькові');
let age = prompt('Вік')

//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
alert(`Вітаю, ${firstName1} ${middleName1}. Тобі ${age} років`);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let aa = 100;
let bb = '100';
let cc = true;
console.log(typeof aa);
console.log(typeof bb);
console.log(typeof cc);


// - Визначити відповідний оператор в виразах щоб вийшов відповідний результат.

// 5 ? 6 -> true
let task1 = 5<6;
console.log(task1);

// 5 ? 6 -> false
let task2 = 5>6;
console.log(task2);

// 5 ? 6 -> false
let task3 = 5 == 6;
console.log(task3);

// 5 ? 6 -> false
let task4 = 5>=6;
console.log(task4);

// 10 ? 10 -> true
let task5 = 10 == 10;
console.log(task5);

// 10 ? 10 -> true
let task6 = 10>=10;
console.log(task6);

// 10 ? 10 -> false
let task7 = 10 != 10;
console.log(task7);

// 10 ? 10 -> false
let task8 = 10 !== 10;
console.log(task8);

// 10 ? 10 -> false
let task9 = 10 > 10;
console.log(task9);

// 123 ? '123' -> false
let task10 = 123 === '123';
console.log(task10);

// 123 ? '123' -> true
let task11 = 123 == '123';
console.log(task11);


// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");   Ответ: 205 + перенос строки, потому что если есть строчный элемент, то переменная а тоже станет строкой и произойдет конкатенация.
// document.write(str - a + "<br/>");   Ответ: 15, потому что при использовании вычитания тип элемента str меняется на числовой.
// document.write(str * "2" + "<br/>");   Ответ: 40, оператор умножения, строчные элементы становятся числовыми.
// document.write(str / 2 + "<br/>");   Ответ: 10, оператор деления, строчные элементы становятся числовыми.
