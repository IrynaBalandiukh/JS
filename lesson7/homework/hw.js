// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id,name,surname,email,phone) {
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
let users=[];
users[0] = new User(6,'Iryna', 'Balandiukh', '123@gmail.com', 380984567182);
users[1] = new User(2,'Olha', 'Yurko', '234@gmail.com', 380986573892);
users[2] = new User(1,'Roman', 'Pavliukh', '345@gmail.com', 380675930809);
users[3] = new User(8,'Nazar', 'Tymkiv', '456@gmail.com', 380984538182);
users[4] = new User(5,'Yulia', 'Ivanenko', '567@gmail.com', 38096750962);
users[5] = new User(3,'Iryna', 'Balandiukh', '123@gmail.com', 380984567182);
users[6] = new User(9,'Olha', 'Yurko', '234@gmail.com', 380986573892);
users[7] = new User(11,'Roman', 'Pavliukh', '345@gmail.com', 380675930809);
users[8] = new User(7,'Nazar', 'Tymkiv', '456@gmail.com', 380984538182);
users[9] = new User(14,'Yulia', 'Ivanenko', '567@gmail.com', 38096750962);
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = arr => {
    let filteredArr = arr.filter(value => {
        return value.id%2===0
    })
    return filteredArr
};
console.log(filteredUsers(users));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = arr => {
    let sortedArray = arr.sort((user1, user2) => {
        return user1.id - user2.id
    })
    return sortedArray
};
console.log(sortedUsers(users));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{
    constructor(id,name,surname,email,phone,...orders) {
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.phone=phone;
        this.email=email;
        this.order=[...orders]
    }
}
let clients = [];
clients[0]= new Client(4, 'Ivan', 'Ivanov', 'tyu@gmail.com', 380679354457, 'item1', 'item2', 'item3', 'item4', 'item5');
clients[1]= new Client(7, 'Ilona', 'Ivanov', 'tyu@gmail.com', 380679354457, 'item1', 'item2');
clients[2]= new Client(1, 'Yurii', 'Ivanov', 'tyu@gmail.com', 380679354457, 'item1', 'item2', 'item3');
clients[3]= new Client(5, 'Sasha', 'Ivanov', 'tyu@gmail.com', 380679354457, 'item1', 'item2', 'item3', 'item4', 'item5','item6');
clients[4]= new Client(6, 'Roman', 'Ivanov', 'tyu@gmail.com', 380679354457, 'item1');
clients[5]= new Client(8, 'Ivan', 'Ivanov', 'tyu@gmail.com', 380679354457, 'item1', 'item2', 'item3', 'item4');
clients[6]= new Client(9, 'Ilona', 'Ivanov', 'tyu@gmail.com', 380679354457, 'item1', 'item2');
clients[7]= new Client(2, 'Yurii', 'Ivanov', 'tyu@gmail.com', 380679354457, 'item1', 'item2', 'item3');
clients[8]= new Client(3, 'Sasha', 'Ivanov', 'tyu@gmail.com', 380679354457, 'item1', 'item2', 'item3', 'item4');
clients[9]= new Client(10, 'Roman', 'Ivanov', 'tyu@gmail.com', 380679354457, 'item1');

console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClients = arr => {
    let sortedArray = arr.sort((client1, client2) => {
        return client1.order.length - client2.order.length
    })
    return sortedArray
};
console.log(sortedClients(clients));