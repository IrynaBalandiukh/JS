// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = + prompt('Введіть число від 0 до 59');
if (time>= 0 && time<15) {
    console.log('перша четверть');
} else if (time>=15 && time<30){
    console.log('друга  четверть');
} else if (time>=30 && time<45){
    console.log('третя четверть');
}else if (time>=45 && time<=59){
    console.log('четверта четверть');
} else {
    console.log('невірне число')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Введіть число від 1 до 31');
if (day>= 1 && day<=10) {
    console.log('перша декада');
} else if (day>10 && day<=20){
    console.log('друга  декада');
} else if (day>20 && day<=31){
    console.log('третя декада');
}else {
    console.log('невірне число')
}


// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = confirm('test');
if (!test) {
    console.log('вірно')
} else {
    console.log('невірно')
};

let test2 = !confirm('test')?console.log('вірно'):console.log('неправильно');


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = -3;
if (a !== 0) {
    console.log('вірно')
} else {
    console.log('невірно')
};

let b = +prompt('write a number') !== 0 ? console.log('correct') : console.log('wrong');
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let dayOfTheWeek = prompt('Write day of the week');
switch (dayOfTheWeek){
    case 'Monday':
        console.log('work, lecture, homework');
        break;
    case 'Tuesday':
        console.log('work, classwork, joga');
        break;
    case 'Wednesday':
        console.log('work, lecture, homework');
        break;
    case 'Thursday':
        console.log('work, classwork, joga');
        break;
    case 'Friday':
        console.log('work, lecture, homework');
        break;
    case 'Saturday':
        console.log('duty, cleaning, english');
        break;
    case 'Sunday':
        console.log('rest');
        break;
    default:
        console.log('wrong');
};

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = +prompt('write year');
if (year%4) {
    console.log('not leap year')
} else console.log('leap year');


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let name = prompt('Яка "офіційна" назва JavaScript?');
if (name === 'ECMAScript') {
    console.log('Правильно!')
} else {
    console.log('Не знаєте? ECMAScript!')
};