// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [3.14, 0, 'text', true, false, null, undefined, [], {}, function () {
}];
console.log(arr);
// -----------------------------------------------якщо кожен окремо-------------------------------------------
console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);
// --------------------------------------------------------ітерація масиву------------------------------------
let i;
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Вечірка на Геловін',
    pageCount: 304,
    genre: 'Детектив'
};
let book2 = {
    title: 'Я бачу, вас цікавить пітьма',
    pageCount: 664,
    genre: 'Трилер',
};
let book3 = {
    title: 'Не гарчіть на собаку! Книга про дресування людей, тварин і самого себе',
    pageCount: 320,
    genre: 'Психологія',
};
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// ------------------------------------------------додавання до раніше створеного об'єкту----------------------------------------------------------
book1.authors = [{name: 'Агата Крісті', age: '1890 - 1976'}];
book2.authors = [{name: 'Ілларіон Павлюк', age: 43}];
book3.authors = [{name: 'Карен Прайор', age: 91}];
// ---------------------------------------------------створення нового об'єкту----------------------------------------------------------------------------
let book4 = {
    title: 'Коли Ніцше плакав',
    pageCount: 464,
    genre: 'Психологія',
    authors: [{name: 'Ірвін Ялом', age: 92}],
};
let book5 = {
    title: '11/22/63',
    pageCount: 976,
    genre: 'Фантастика',
    authors: [{name: 'Стівен Кінг', age: 76}],
};
let book6 = {
    title: 'Народження Сталевого Щура',
    pageCount: 288,
    genre: 'Фантастика',
    authors: [{name: 'Гаррі Гаррісон', age: 87}],
};
let books = [book1, book2, book3, book4, book5, book6];
console.log(books);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user1 = {name: 'Inga1', username: 'IngaIT_1', password: '1Inga'};
let user2 = {name: 'Inga2', username: 'IngaIT_2', password: '2Inga'};
let user3 = {name: 'Inga3', username: 'IngaIT_3', password: '3Inga'};
let user4 = {name: 'Inga4', username: 'IngaIT_4', password: '4Inga'};
let user5 = {name: 'Inga5', username: 'IngaIT_5', password: '5Inga'};
let user6 = {name: 'Inga6', username: 'IngaIT_6', password: '6Inga'};
let user7 = {name: 'Inga7', username: 'IngaIT_7', password: '7Inga'};
let user8 = {name: 'Inga8', username: 'IngaIT_8', password: '8Inga'};
let user9 = {name: 'Inga9', username: 'IngaIT_9', password: '9Inga'};
let user10 = {name: 'Inga10', username: 'IngaIT_10', password: '10Inga'};
let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(users[0].password, users[1].password, users[2].password, users[3].password, users[4].password, users[5].password, users[6].password, users[7].password, users[8].password, users[9].password);
// ------------------------------------------------------або-----------------------------------------------
let index;
for (index = 0; index < users.length; index++) {
    console.log(`${users[index].name} - ${users[index].password}`);
}
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x;
x = 1;
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
//     -----------------------------------------------------або (без перевірки, що це взагалі число)-------------------------------------------------
// let xx = +prompt('Enter a number: ');
// xx !== 0 ? console.log("Вірно") : console.log("Невірно");
//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time;
// ---------------------------------------------примушаю вводити саме числові дані, які підходять під умову завдання---------------------------------
// do {
//     time = prompt('Вкажіть кількість секунд від 0 до 59');
// }
// --------------------------------------------щоб число не виходило з діапазона й мало відповідний тип даних (зациклюю, якщо невірно)------------------------
// while(isNaN(time) === true || time === '' || time === null || time < 0 || time > 59);
//
//         if(time >=0 && time <16){
//         alert('Це перша чверть години')
//         }
//         else if (time >=16 && time <31){
//             alert('Це друга чверть години')
//         }
//         else if (time >=31 && time <46){
//             alert('Це третя чверть години')
//         }
//         else {
//             alert('Це четверта чверть години')
//         }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).
let day = 35;
// ----------------------------------якщо через prompt (без перевірки введеного)-----------------------------------------------
// let day = +prompt('Enter a number:')
if (day >= 1 && day < 11) {
    console.log('Це перша декада місяця')
} else if (day >= 11 && day < 21) {
    console.log('Це друга декада місяця')
} else if (day >= 21 && day < 32) {
    console.log('Це третя декада місяця')
} else {
    console.log('Ви вийшли за межі місяця')
}
// --------------------------------------------------або-------------------------------------
// else if (day <0){
//     console.log('Ви ввели негативне число або намагаєтесь повернутися у минуле :)')}
// else {
//     console.log('Ви вийшли за межі місяця')
//     }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і
// на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let numberOfDayOfWeek = 6;
//----------------------------------------------------або-----------------------------------------
//let numberOfDayOfWeek = +prompt('Вкажіть номер дня тижня');
let monday = {
    first: 'D',
    second: 'SU',
    third: 'Ma',
    fourth: 'DaZ',
}
let tuesday = {
    first: 'D',
    second: 'Eth',
    third: 'Sp',
    fourth: 'Sp',
}
let wednesday = {
    first: 'D',
    second: 'SU',
    third: 'Ma',
    fourth: 'D',
    fifth: 'G',
}
let thursday = {
    first: 'DaZ',
    second: 'Mu',
    third: 'Ma',
    fourth: 'Ma',
}
let friday = {
    first: 'D',
    second: 'SU',
    third: 'Ma',
    fourth: 'D',
}
// ----------------------------------------задля можливого планування дій на вихідні----------------------------
let saturday = {
    first: 'прогулянка у парку',
}
let sunday = {
    first: 'басейн',
    second: 'заняття танцями',
}
// let planner = [monday, tuesday, wednesday, thursday, friday, saturday, sunday ]
// console.log(planner)

switch (numberOfDayOfWeek) {
    case 1:
        console.log(monday);
        break;
    case 2:
        console.log(tuesday);
        break;
    case 3:
        console.log(wednesday);
        break;
    case 4:
        console.log(thursday);
        break;
    case 5:
        console.log(friday);
        break;
    case 6:
        if (saturday.first === '') {
            console.log('Today is Saturday')
        } else (console.log(saturday));
        break;
    case 7:
        if (sunday.first === '') {
            console.log('Today is Sunday')
        } else (console.log(sunday));
        break;
    default:
        console.log('There are only 7 days in a week. Check your number');
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// ------------------------------------------можливо введення через prompt---------------------------------------
// let a = +prompt('Enter a number:')
// let b = +prompt('Enter a number:')
let a = 12;
let b = 13;
if (a > b) {
    console.log(`Найбільше з чисел ${a} та ${b} - ${a}`)
} else if (a < b) {
    console.log(`Найбільше з чисел ${a} та ${b} - ${b}`)
} else {
    console.log('Ці числа рівні')
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let xxx = 100500;
if (
    xxx === false || xxx === null || xxx === undefined || xxx === 0 || xxx === -0 || xxx === 0n || xxx === "") {
    xxx = "default";
}
console.log(xxx);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4},
]
// ----------------------------------------------------if--------------------------------------------------------
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[0].title} - super!`)
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[1].title} - super!`)
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[2].title} - super!`)
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[3].title} - super!`)
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[4].title} - super!`)
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[5].title} - super!`)
}
// ------------------------------------------------з ітерацією----------------------------------------------
//---------------створення елементу document.createElement(tag) або текстовий вузол з текстом text - document.createTextNode(text)
//--------------------------------------newElement. setAttribute('id','idName') або newElement. id = 'idName'
let div_wrapper = document.createElement('div');
div_wrapper.id = 'wrapper';
document.body.append(div_wrapper);


for (let y = 0; y < coursesAndDurationArray.length; y++) {
    if (coursesAndDurationArray[y].monthDuration > 5) {
        console.log(`${coursesAndDurationArray[y].title} - super!`);
        let card = document.createElement('div');
        card.className = 'card';
        let h2 = document.createElement('h2');
        h2.innerText = coursesAndDurationArray[y].title;
        let p = document.createElement('p');
        p.innerText = `${coursesAndDurationArray[y].monthDuration} місяців драйву :)`;
        let button = document.createElement('button');
        button.innerText = 'Хочу на курс!';
        // -------------------------------------------вивести у документ document.body.append(div)--------------------------------------------
        div_wrapper.append(card);
        card.append(h2);
        card.append(p);
        card.append(button);
    }
}












