// - створити блок,
//  - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let block = document.createElement('div');
block.innerText = 'hello okten';
block.style.backgroundColor = 'pink';
block.style.color = 'blue';
block.style.fontSize = '20px';
document.body.appendChild(block);
let block2 = block.cloneNode(true);
document.body.appendChild(block2);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let products = ['Main','Products','About us','Contacts'];
for (let item of products) {
    let product = document.createElement('li');
    product.innerText = `${item}`;
    document.getElementsByClassName('menu')[0].appendChild(product);
}


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let item of coursesAndDurationArray) {
    let block = document.createElement('div');
    block.innerText = `${item.title} - ${item.monthDuration}`;
    document.body.appendChild(block);
}

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (let course of coursesAndDurationArray) {
    let block = document.createElement('div');
    block.classList.add('item');
    let title = document.createElement('h1');
    title.classList.add('heading');
    title.innerText = `${course.title}`;
    let text = document.createElement('p');
    text.classList.add('description');
    text.innerText = `${course.monthDuration}`;
    document.body.appendChild(block);
    block.append(title, text);

}



