// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function car (model, producer, year, speed, volume) {
    this.model=model;
    this.producer=producer;
    this.year=year;
    this.speed=speed;
    this.volume=volume;
    this.drive=function (){
        console.log(`Їдемо зі швидкістю ${this.speed} на годину.`)
    }
    this.info=function (){
       for (let key in this) {
           if (typeof this[key] !== "function"){
               console.log(`${key} - ${this[key]}`)
           }
       }
    }
    this.increaseMaxSpeed=function(newSpeed){
        this.speed=this.speed+newSpeed
    }
    this.changeYear=function(newValue){
        this.year=newValue
    }
    this.addDriver=function (driver){
        this.driver=driver
    }
}
let car1 = new car('Nissan Teana', 'Nissan Motor Co., Ltd.', 2015, 250, 2)
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(10);
car1.changeYear(2019);
car1.addDriver('Roman', 380675643262);
console.log(car1);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars {
    constructor(model, producer, year, speed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.speed = speed;
        this.volume = volume;
    }

    drive () {
            console.log(`Їдемо зі швидкістю ${this.speed} на годину.`)
        }

    info () {
            console.log(`Модель - ${this.model}`)
            console.log(`Виробник - ${this.producer}`)
            console.log(`Рік випуску - ${this.year}`)
            console.log(`Максимальна швидкість - ${this.speed}`)
            console.log(`Об'єм двигуна - ${this.volume}`)
        }

    increaseMaxSpeed (newSpeed) {
            this.speed = this.speed + newSpeed
        }

    changeYear (newValue) {
            this.year = newValue
        }

    addDriver (driver) {
            this.driver = driver
        }

}
let car2 = new Cars ('Cadillac Escalade', 'Cadillac', 2017, 270, 2)
console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(20);
car2.changeYear(2018);
car2.addDriver('Vasil', 380675643262);
console.log(car2);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name,age,footSize) {
        this.name=name;
        this.age=age;
        this.footSize=footSize
    }
}
let cinderellas = [];
cinderellas[0]=new Cinderella('Olya', 17, 39)
cinderellas[1]=new Cinderella('Kate', 23, 38)
cinderellas[2]=new Cinderella('Irene', 26, 37)
cinderellas[3]=new Cinderella('Julia', 18, 40)
cinderellas[4]=new Cinderella('Christina', 22, 39)
cinderellas[5]=new Cinderella('Sasha', 24, 37)
cinderellas[6]=new Cinderella('Natalia', 19, 35)
cinderellas[7]=new Cinderella('Iryna', 25, 36)
cinderellas[8]=new Cinderella('Tanya', 23, 37)
cinderellas[9]=new Cinderella('Oksana', 21, 38)
console.log(cinderellas)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name,age,shoeSize) {
        this.name=name;
        this.age=age;
        this.shoeSize=shoeSize
    }
}
let prince = new Prince('Sasha', 26, 36)
console.log(prince)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let cinderellaAndPrince = (cinderellas, prince) =>{
    for (let i of cinderellas) {
        if (i.footSize === prince.shoeSize) {
            return (`Принц знайшов туфельку попелюшки ${i.name}`)
        }
    }
}
console.log(cinderellaAndPrince(cinderellas,prince))



//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findCinderella = cinderellas.find((item)=> item.footSize===prince.shoeSize)
console.log(findCinderella)