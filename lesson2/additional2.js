// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length>=3) {
    console.log('великий масив, в якому 3 і більше елементів')
} else {
    console.log('маленький масив, в якому менше 3-х елементів')
}


// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
let c = 9;
let d = 1;
let e = 5;
if ((c<d && c>e) || (c<e && c>d)) {
    console.log(c)
} else if ((e<c && e>d) || (e<d && e>c)) {
    console.log(e)
} else if ((d<c && d>e) || (d<e && d>c)) {
    console.log(d)
}

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
let a = 6;
let b = 2;
let result;
 (a + b < 4) ? result = 'Мало': result = 'Багато';
console.log(result);


// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
let number = -20;

    number === 0 ? console.log('нуль') : number > 0 ? console.log('позитивне число') : console.log('від`ємне число');