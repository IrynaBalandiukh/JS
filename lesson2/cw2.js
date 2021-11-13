// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let a = +prompt('number 1');
let b = +prompt('number 2');
if (a>b) {
    console.log(a)
} else if (b>a) {
    console.log(b)
} else {
    console.log('numbers are equal')
}


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let flat = +prompt('write flat number');
if (flat>=1 && flat<=20) {
    console.log('first entrance')
} else if (flat>=21 && flat<=48) {
    console.log('second entrance')
} else if (flat>=49 && flat<=90) {
    console.log('third entrance')
} else {
    console.log('wrong number')
}


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number = +prompt('write a number') === 10 ? console.log('correct') : console.log('wrong');


// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
let x = [0, 7];
if (typeof(x)== 'number') {
    console.log(1)
} else if (typeof(x) == 'string') {
    console.log(2)
}else if (typeof(x) == 'boolean') {
    console.log(3)
} else if (typeof(x) == 'object') {
    console.log(4)
} else {
    console.log('unknown')
}


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temp = +prompt('write what temperature');
if (temp>=10 && temp<=22) {
    console.log('Йдемо вчитися в OKTEN!')
} else {
    console.log('Сидимо вдома і вчимося онлайн')
}


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let num = +prompt('Введіть число від 1 до 5');
switch (num){
    case 1:
        console.log('Ви виграли автомобіль!!! Мої вітання))');
        break;
    case 2:
        console.log('Число не виграшне, спробуйте ще раз');
        break;
    case 3:
        console.log('Ви виграли смартфон!! Вітаю)');
        break;
    case 4:
        console.log('Число не виграшне, спробуйте ще раз');
        break;
    case 5:
        console.log('Ви виграли подорож до Єгипту!!! Крутої відпустки))');
        break;
    default:
        console.log('Ви ввели не те число(')
}