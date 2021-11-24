// - Дано натуральное число n. Выведите все числа от 1 до n.
let numb = n => {
    for (let i=0; i<=n; i++) {
        console.log(i)
    }
}
numb(7);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let numbsWithin = (a,b) => {
    if (a<b) {
        for (let i = a; i<=b; i++) {
            console.log(i)
        }
    } else if (a>b) {
        for (let i=a; i>=b; i--) {
            console.log(i)
        }
    } else {
        console.log('numbers are equal')
    }
}
numbsWithin(4,7);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let indexChange = (arr, i) => {
    let x = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = x;
    console.log(arr)
}
indexChange([9, 8, 0, 4], 1);

//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


let arrFilter = (arr) => {
    for (let i=0; i<arr.length-1; i++) {
        if (arr[i]===0) {
            let y
            for (let j=i+1; j<arr.length; j++) {
                if (arr[j] !==0) {
                    y = arr[i];
                    arr[i] = arr[j];
                    arr[j] = y;
                    break;
                }
            }
        }
    }
    console.log(arr)
}
arrFilter([8, 0, 4, 0 ,5, 9, 0 ,1]);