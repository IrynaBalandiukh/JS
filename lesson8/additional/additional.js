// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let arrayOfClasses = [];
function recFunction (initialElement) {
    let arr = initialElement.classList
    for (let item of arr) {
        arrayOfClasses.push(item)
    }
    if (initialElement.children.length) {
        for (let element of initialElement.children) {
            recFunction(element)
        }
    }
    return arrayOfClasses
}
console.log(recFunction(document.body))