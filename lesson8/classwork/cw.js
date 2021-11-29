// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює (колір елемнту)? з ід main_header на назву групи в якій ви вчитесь (mon-year)
document.getElementById('main_header').id='sep-2021';
console.log(document.getElementById('sep-2021'));

// b) робить шириниу елементу ul 400px
let ulElements = document.getElementsByTagName('ul');
for (let element of ulElements) {
    element.style.width='400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkListElements = document.getElementsByClassName('linkList');
for (let element of linkListElements) {
    element.style.width='50%'
}

// d) отримує текст який зберігається в елементі з класом listElement2
let listElements = document.getElementsByClassName('listElement2');
for (let element of listElements) {
    console.log(element.innerText)
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liList = document.getElementsByTagName('li');
for (let element of liList) {
    element.style.backgroundColor='gray'
}

// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aList = document.getElementsByTagName('a');
for (let element of aList) {
    element.classList.add('anchor');
    console.log(element);
}
for (let element of aList){
    if (element.innerText === 'link3') {
        element.style.fontSize = '40px'
    }
}
for (let element of aList){
    let text = element.innerText;
    element.classList.add(`element_${text}`);
    console.log(element)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subHeaderList = document.getElementsByClassName('sub-header');
for (let element of subHeaderList){
    element.style.backgroundColor = prompt('set background color')
}
for (let element of subHeaderList){
    if (element.innerText === 'content 2 segment') {
        element.style.color = prompt('set text color')
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let contentList = document.getElementsByClassName('content_1');
for (let element of contentList) {
    element.innerText = prompt('new text')
}

// l) отримати елементи p та змінити їм padding на 20px
let pList = document.getElementsByTagName('p');
for (let element of pList) {
    element.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let textList = document.getElementsByClassName('text2');
for (let element of textList) {
    element.innerText = 'sep-2021'
}