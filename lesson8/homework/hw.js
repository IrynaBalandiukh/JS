// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content"
console.log(document.getElementById('content').innerText);

// -- отримує текст з блоку з id "rules"
console.log(document.getElementById('rules').innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
let pContent = document.getElementById('content');
pContent.innerText='Элемент <!DOCTYPE> предназначен для указания типа текущего документа — DTD (document type definition, описание типа документа). Это необходимо, чтобы браузер понимал, как следует интерпретировать текущую веб-страницу, поскольку HTML существует в нескольких версиях, кроме того, имеется XHTML (EXtensible HyperText Markup Language, расширенный язык разметки гипертекста), похожий на HTML, но различающийся с ним по синтаксису. Чтобы браузер «не путался» и понимал, согласно какому стандарту отображать веб-страницу и необходимо в первой строке кода задавать <!DOCTYPE>.';
console.log(pContent.innerText);

// -- замініть текст параграфа з id 'rules' на будь-який інший
let pRules = document.getElementById('rules');
pRules.innerText = 'Элемент <body> предназначен для хранения содержания веб-страницы (контента), отображаемого в окне браузера. Информацию, которую следует выводить в документе, следует располагать именно внутри контейнера <body>. К такой информации относится текст, изображения, теги, скрипты JavaScript и т.д.';
console.log(pRules.innerText);

// -- змініть кожному елементу колір фону на червоний

function changeColor (initialElement) {
        if (initialElement.children.length) {
            for (let element of initialElement.children) {
                element.classList.add('bg-red')
            }
        }
}
changeColor(document.body);

// -- змініть кожному елементу колір тексту на синій
function changeTextColor (initialElement) {
    if (initialElement.children.length) {
        for (let element of initialElement.children) {
            element.classList.add('color-blue')
        }
    }
}
changeTextColor(document.body);

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classList = document.getElementById('rules').classList;
console.log(classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let elementsRules = document.getElementsByClassName('fc_rules');
for (let element of elementsRules) {
    element.classList.add('color-green')
}