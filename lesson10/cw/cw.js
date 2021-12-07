// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let form1 = document.createElement('form');
form1.setAttribute('name', 'form1');
document.body.appendChild(form1);
let form2 = document.createElement('form');
form2.setAttribute('id', 'form2');
document.body.appendChild(form2);
let input1 = document.createElement('input');
input1.setAttribute('id', 'input1');
let input2 = document.createElement('input');
input2.setAttribute('id', 'input2');
let input3 = document.createElement('input');
input3.setAttribute('id', 'input3');
let input4 = document.createElement('input');
input4.setAttribute('id', 'input4');
form1.append(input1, input2);
form2.append(input3, input4);
let button = document.createElement('button');
button.innerText = 'submit';
document.body.appendChild(button);
button.onclick = function () {
    console.log(document.forms.form1.input1.value)
    console.log(document.forms.form1.input2.value)
    console.log(document.forms.form2.input3.value)
    console.log(document.forms.form2.input4.value)
}

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//  При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
let rows = document.createElement('input');
let cells = document.createElement('input');
let text = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = 'submit';
document.body.append(rows, cells, text, btn);
btn.onclick = function () {
    let table = document.createElement('table')
    document.body.appendChild(table);
    for (let i=0; i<rows.value; i++) {
        let row = document.createElement('tr');
        table.appendChild(row);
        for (let y=0; y<cells.value; y++) {
            let cell = document.createElement('td');
            cell.innerText = text.value;
            row.appendChild(cell);
        }
    }
}


// - Сворити масив не цензцрних слів. Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням. Перевірку робити при натисканні на кнопку
let array = ['word1', 'word2', 'word3'];
let yourText = document.createElement('input');
yourText.type = 'text';
document.body.appendChild(yourText);
let check = document.createElement('button');
check.innerText = 'submit';
document.body.appendChild(check);
check.onclick = function () {
    for (let i of array) {
        if (i === yourText.value) {
            alert('Не використовуйте нецензурну лексику');
        }
    }
}
// - Сворити масив не цензцрних слів. Сворити інпут текстового типу. Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить. Перевірку робити при натисканні на кнопку

let checkSentence = document.createElement('button');
checkSentence.innerText = 'submit sentence';
document.body.appendChild(checkSentence);
checkSentence.onclick = function () {
    for (let i of array) {
        if (yourText.value.includes(i)) {
            alert('Не використовуйте нецензурну лексику');
        }
    }
}

