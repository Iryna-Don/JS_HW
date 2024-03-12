// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = []
users.push(
    new User(456, 'Julia', 'Judin', 'julia@gmail.com', '+380671112233'),
    new User(213, 'Marusja', 'Nosova', 'dog@gmail.com', '+380551999348'),
    new User(87, 'Fekla', 'Lolam', 'bird@gmail.com', '+380991154541'),
    new User(14, 'Olga', 'Dracon', 'goose@gmail.com', '+380666572333'),
    new User(1234, 'Vira', 'Dodik', 'camel@gmail.com', '+380631159844'),
    new User(765, 'Lisa', 'Pik', 'elephant@gmail.com', '+380991159800'),
    new User(669, 'Igor', 'Vlasov', 'shark@gmail.com', '+380991159111'),
    new User(234, 'Mila', 'Gutana', 'fish@gmail.com', '+380991159222'),
    new User(19, 'Valera', 'Katchen', 'monkey@gmail.com', '+380991345674'),
    new User(28, 'Inga', 'Zunami', 'lama@gmail.com', '+380991159098')
);
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let usersEvenFilter = users.filter(user => !(user.id % 2))//or user.id === 0
console.log(usersEvenFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let usersSort = users.sort((a, b) => a.id - b.id);
console.log(usersSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}

// -----------------------------------------------------------------------or------------------------------------------
function Client_1(id, name, surname, email, phone, order) {
    User.call(this, id, name, surname, email, phone);
    this.order = order;
}

// -----------------------------------------------------------------------or------------------------------------------
function Client_2(id, name, surname, email, phone, order) {
    User.apply(this, [id, name, surname, email, phone]);
    this.order = order;
}

// -----------------------------------------------------------------------or through arguments------------------------------------------
function Client_3(id, name, surname, email, phone, order) {
    User.apply(this, arguments);
    this.order = order;
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];
clients.push(
    new Client(2433, 'Ira', 'Vasiljeva', 'cat@gmail.com', '+380991159888', ['plate', 'mug', 'spoon', 'knife', 'cup', 'fork']),
    new Client(2418, 'Marusja', 'Nosova', 'dog@gmail.com', '+380551999348', ['plate', 'mug']),
    new Client(456, 'Fekla', 'Lolam', 'bird@gmail.com', '+380991154541', ['plate', 'mug', 'spoon']),
    new Client(12, 'Olga', 'Dracon', 'goose@gmail.com', '+380666572333', ['plate', 'mug', 'spoon', 'knife']),
    new Client(876, 'Vira', 'Dodik', 'camel@gmail.com', '+380631159844', ['plate', 'mug', 'spoon', 'knife', 'cup']),
    new Client(345, 'Lisa', 'Pik', 'elephant@gmail.com', '+380991159800', ['plate']),
    new Client(678, 'Igor', 'Vlasov', 'shark@gmail.com', '+380991159111', ['fork']),
    new Client(123, 'Mila', 'Gutana', 'fish@gmail.com', '+380991159222', ['plate', 'mug', 'cup', 'fork']),
    new Client(9870, 'Valera', 'Katchen', 'monkey@gmail.com', '+380991345674', ['plate', 'mug', 'knife', 'cup', 'fork']),
    new Client(2437, 'Inga', 'Zunami', 'lama@gmail.com', '+380991159098', ['plate', 'spoon', 'knife', 'cup', 'fork'])
);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientsQuantityOfGoods = clients.sort((a, b) => a.order.length - b.order.length);
console.log(clientsQuantityOfGoods);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, manufacturer, yearOfManufacture, maximumSpeed, engineVolume) {
    let driverOfCar;
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maximumSpeed = maximumSpeed;
    this.engineVolume = engineVolume;

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    this.drive = function (text1, text2) {
        console.log(`${text1} ${maximumSpeed} ${text2}`)
    }
    // ----------------------------------------------------------------------or---------------------------------
    // this.drive = function (){
    //     console.log(`летимо зі швидкістю ${maximumSpeed} км на годину`)
    // }


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    this.info = function () {
        for (let carInfo in this) {
            if (typeof this[carInfo] === 'function') {
                continue;
            }
            console.log(carInfo[0].charAt(0).toUpperCase() + carInfo.slice(1) + ': ' + this[carInfo])
            // console.log(`${carInfo.toUpperCase()} = ${this[carInfo]}`);
        }
        // -------------------------------------------------видача даних по водію авто---------------------------------------
        for (let driverOfCarInfo in driverOfCar) {
            console.log(`${driverOfCarInfo.toUpperCase()} : ${driverOfCar[driverOfCarInfo]}`);
        }
    }
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

    this.increaseMaxSpeed = function (newSpeed) {
        this.maximumSpeed += newSpeed;
        console.log(this.maximumSpeed);
    }

// -- changeYear (newValue) - змінює рік випуску на значення newValue

    this.changeYear = function (newValue) {
        this.yearOfManufacture = newValue;
        console.log(this.yearOfManufacture);
    }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    // this.addDriver = function (driver) {
    //     console.log(driver);
    // }

    // зі сталим набором полів з наступною видачею даних разом з даними по авто
    this.addDriver = function (name, age, drivingExperience, status) {
        driverOfCar = {};
        driverOfCar.driverName = name;
        driverOfCar.driverAge = age;
        driverOfCar.driverExperience = drivingExperience;
        driverOfCar.driverStatus = status;
        console.log(driverOfCar);
    }
}

let car = new Car('stupa-Turbo-24', 'KazkaLand', 2024, 250, 13.8);
console.log(car);
// car.addDriver({name: 'Jadviga', age:232, drivingExpierence:7, status:true});//довільні дані про водія
car.addDriver('Baba-Jaga', 825, 601, false);
car.drive('летимо зі швидкістю', 'км на годину');
car.info();
car.increaseMaxSpeed(18);
car.changeYear(2013);
console.log(car);

// let metla = new Car('metla', 'PrimaMetla', 2021, 130, 1.3);
// console.log(metla);
// metla.addDriver('Hexe', 132, 43, true);
// metla.info();

// =============================================================================================================================================================
// =============================================================================================================================================================
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class Cars {
    constructor(model, manufacturer, yearOfManufacture, maximumSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maximumSpeed = maximumSpeed;
        this.engineVolume = engineVolume;
    }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    drive() {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} км на годину`)
    }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    info() {
        for (let carInfo in this) {
            if (typeof this[carInfo] === 'function') {
                continue;
            }
            console.log(`${carInfo.toUpperCase()} = ${this[carInfo]}`);
        }
    }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

    increaseMaxSpeed(newSpeed) {
        this.maximumSpeed += newSpeed;
        console.log(this.maximumSpeed);
    }

// -- changeYear (newValue) - змінює рік випуску на значення newValue

    changeYear(newValue) {
        this.yearOfManufacture = newValue;
        console.log(this.yearOfManufacture);
    }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    addDriverCars(driver) {
        this.driver = driver;
        console.log(this.driver);
    }
}

let newCars = new Cars('Berlingo VTi 95 Multispace Selection', 'Citroën', 2017, 170, 1.6);
console.log(newCars);
newCars.drive();
newCars.info();
newCars.increaseMaxSpeed(13);
newCars.changeYear(2024);
newCars.addDriverCars({nameOfDriver: 'Mykhailo', birthYear: 2010});
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let listOfCinderellas = [
    new Cinderella('nata', 32, 38),
    new Cinderella('sveta', 18, 36.5),
    new Cinderella('olja', 23, 37),
    new Cinderella('masha', 21, 36.5),
    new Cinderella('valja', 21, 40),
    new Cinderella('maria', 38, 38),
    new Cinderella('vira', 17, 35),
    new Cinderella('rita', 26, 37),
    new Cinderella('ira', 24, 39),
    new Cinderella('inga', 22, 38),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }
}

let prince = new Prince('Arsen', 25, 37);
let listOfCinderellasWithFoundShoeSize = [];

for (cinderella of listOfCinderellas) {
    // можна додати відбір за віком й т.п. &&cinderella.age<25
    if (cinderella.footSize === prince.foundShoeSize) {
        listOfCinderellasWithFoundShoeSize.push(cinderella);
    }
}
console.log(listOfCinderellasWithFoundShoeSize)
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// ----------------------------------------------тільки ПЕРША з переліку Попелюшок ----------------------------------------------------
let cinderellaFirst = listOfCinderellas.find(x => x.footSize === prince.foundShoeSize);
console.log(cinderellaFirst);
//----------------------------------------------------------------------------------------------------
let listOfSuitableCinderellas = listOfCinderellas.filter(x => x.footSize === prince.foundShoeSize).map(girl => `${girl.name}, age - ${girl.age}`)
console.log(listOfSuitableCinderellas);
