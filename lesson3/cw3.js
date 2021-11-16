// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
let i=0;
while (i<array.length){
    console.log(array[i]);
    i++
}

// 2. перебрати його циклом for
for (let i=0; i<array.length; i++) {
    console.log(array[i])
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let j=0;
while (j<array.length) {
    if (j%2 !== 0) {
        console.log(array[j])
    }
    j++
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i=0; i<array.length; i++) {
    if (i%2 !==0) {
        console.log(array[i])
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let m=0;
while (m<array.length) {
    if (array[m]%2 ===0) {
        console.log(array[m])
    }
    m++
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i=0; i<array.length; i++) {
    if (array[i]%2 === 0){
        console.log(array[i])
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let item of array) {
    if (item%3===0) {
        item = 'okten'
    }
}
console.log(array)

// 8. вивести масив в зворотньому порядку.
for (i=array.length-1; i>=0; i--){
    console.log(array[i])
}
console.log('---------------------')
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let array1 = [2,17,13,6,22,31,45,66,100,-18];
// перебрати його циклом while ззаду наперед
let n=array1.length-1;
while (n>=0){
    console.log(array1[n]);
    n--
}

// перебрати його циклом for ззаду наперед
for (let i=array1.length-1; i>=0; i--) {
    console.log(array1[i])
}

// перебрати циклом while та вивести  числа тільки з непарним індексом ззаду наперед
let g=array1.length-1;
while (g>=0) {
    if (g%2 !== 0) {
        console.log(array1[g])
    }
    g--
}

// перебрати циклом for та вивести  числа тільки з непарним індексом ззаду наперед
for (let i=array1.length-1; i>=0; i--) {
    if (i%2 !==0) {
        console.log(array1[i])
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let f=array1.length-1;
while (f>=0) {
    if (array1[f]%2 ===0) {
        console.log(array1[f])
    }
    f--
}

//перебрати циклом for та вивести  числа тільки парні  значення ззаду наперед
for (let i=array1.length-1; i>=0; i--) {
    if (array1[i]%2 === 0){
        console.log(array1[i])
    }
}

// замінити кожне число кратне 3 на слово "okten" ззаду наперед
for (let i=array1.length-1; i>=0; i--) {
    if (array1[i]%3===0) {
        array1[i] = 'okten'
    }
}
console.log(array1)
