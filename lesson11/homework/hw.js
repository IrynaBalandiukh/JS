// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
let form = document.forms.form1;
form1.onsubmit = function (e) {
    let name = this.name.value;
    let age = this.age.value;
    localStorage.setItem('name', JSON.stringify({name}));
    localStorage.setItem('age', JSON.stringify({age}));
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let carsForm = document.forms.carsForm;
carsForm.onsubmit = function () {
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;
    let car = [model, type, volume];
    let cars = JSON.parse(localStorage.getItem('cars'));
    if (!cars) {
        cars = [];
        cars.push(car);
        localStorage.setItem('cars', JSON.stringify(cars));
    } else {
        cars.push(car);
        localStorage.setItem('cars', JSON.stringify(cars))
    }
}