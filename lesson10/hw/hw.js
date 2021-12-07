// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let btn1 = document.createElement('button');
btn1.innerText = 'button';
document.body.appendChild(btn1);
let text = document.getElementById('text');
btn1.onclick =function () {
    text.style.display='none'
};

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn2 = document.createElement('button');
btn2.innerText = 'button';
document.body.appendChild(btn2);
btn2.onclick = function () {
    btn2.style.display = 'none';
};

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form = document.createElement('form');
document.body.appendChild(form);
let input = document.createElement('input');
input.placeholder = 'enter age';
let submit = document.createElement('button');
submit.innerText = 'submit';
form.append(input, submit);
submit.onclick = function () {
    if (input.value < 18) {
        alert('Ваш вік менше 18');
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.createElement('div');
menu.innerText = 'menu';
document.body.appendChild(menu);
let menuList = document.createElement('ul');
document.body.appendChild(menuList);
menuList.style.display = 'none';
for (let i=0; i<5; i++) {
    let item = document.createElement('li');
    item.innerText = `item ${i+1}`;
    menuList.appendChild(item);
}
menu.onclick = function () {
    menuList.style.display = 'block';
    menu.style.display = 'none';
}
menuList.onclick = function () {
    menu.style.display = 'block';
    menuList.style.display = 'none';
}

// -Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {title : 'comment1', body:'lorem ipsum dolo sit ameti'},
    {title : 'comment2', body:'lorem ipsum dolo sit ameti'},
    {title : 'comment3', body:'lorem ipsum dolo sit ameti'},
    {title : 'comment5', body:'lorem ipsum dolo sit ameti'},
    {title : 'comment5', body:'lorem ipsum dolo sit ameti'}
];
for (let item of comments) {
    let comment = document.createElement('div');
    document.body.appendChild(comment);
    let title = document.createElement('h3');
    title.innerText = `${item.title}`;
    let text = document.createElement('p');
    text.innerText = `${item.body}`;
    let button = document.createElement('button');
    button.innerText = 'hide text';
    comment.append(title, text, button);
    button.onclick = function () {
        text.style.display = 'none';
    }
}
