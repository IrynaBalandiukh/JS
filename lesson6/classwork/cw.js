// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
let normaliseName = name => name
    .replaceAll('..',' ')
    .replaceAll('__',' ')
    .replaceAll('---',' ')
document.writeln(normaliseName(n1));
document.writeln(normaliseName(n2));
document.writeln(normaliseName(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomArray = length => {
    let arr = [];
    for (let i=0; i<length; i++) {
        arr.push(Math.floor(Math.random()*100))
    }
    return arr;
}
console.log(randomArray(10))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arr1 = randomArray(10);
arr1.sort((a,b)=>{
    return a-b
})
console.log(arr1);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let arr2 = randomArray(10);
let filter = arr2.filter(value => {
    if (value%2===0){
        return true
    } else {
        return false
    }
})
console.log(filter);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr3 = randomArray(10);
let stringArray = arr => arr.map(item=>String(item))
console.log(stringArray(arr3))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let nums = [11,21,3];
let sortNums = (direction, arr) => {
    if (direction =='ascending') {
        arr.sort((a,b)=>{
            return a-b
        })
    } else if (direction =='descending') {
        arr.sort((a,b)=>{
            return b-a
        })
    }
    return arr
}
console.log(sortNums('ascending', nums));
console.log(sortNums('descending', nums));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortedCourses = coursesAndDurationArray.filter(value => {
    return value.monthDuration>5
}).sort((c1,c2)=>{
    return c1.monthDuration - c2.monthDuration
})
console.log(sortedCourses)


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str,n) => {
    let arr = []
    while (str.length){
        arr.push(str.substr(0,n))
        str = str.slice(n)
    }
    return arr
}
document.writeln(cutString('наслаждение',3))