// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let form = document.forms.itemForm;
localStorage.clear();
form.onsubmit = function (e) {
    e.preventDefault();
    let item = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let cost = document.getElementById('cost').value;
    let picture = document.getElementById('picture').value;
    let itemObj = {item, number,cost,picture};
    console.log(itemObj);
    let itemArray = JSON.parse(localStorage.getItem('items'));
    if (!itemArray) {
        itemArray = [];
        itemArray.push(itemObj);
        localStorage.setItem('items', JSON.stringify(itemArray));
    } else {
        itemArray.push(itemObj);
        localStorage.setItem('items', JSON.stringify(itemArray));
    }
}