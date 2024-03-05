// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// наступні 3 стрілкові функції написані "у порядку маячні" - лише для тренування (сенсу використання у них немає)
let lengthOfString = (text) => text.length;

console.log(lengthOfString('hello world'));
console.log(lengthOfString('lorem ipsum'));
console.log(lengthOfString('javascript is cool'));
// для усіх наступних функцій - звісно, результат можна запакувати у змінну
let resultLengthOfString = lengthOfString('javascript is cool');
console.log(resultLengthOfString);

// -----------------------------------------or-----------------------------------
let str0 = 'hello world';
console.log(str0.length);

let str1 = 'lorem ipsum';
console.log(str1.length);

let str2 = 'javascript is cool';
console.log(str2.length);

// -----------------------------------------or-----------------------------------
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

// -----------------------------------------or-----------------------------------
// ------------------------------------------------------------------------------
console.log(str0.toUpperCase());
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
// -----------------------------------------or-----------------------------------
let str3 = str0.toUpperCase();
let str4 = str1.toUpperCase();
let str5 = str2.toUpperCase();

console.log(str3);
console.log(str4);
console.log(str5);
// ------------------------------------------------------------------------------
// -----------------------------------------or-----------------------------------
let stringToUpperCase = (text) => text.toUpperCase();

console.log(stringToUpperCase('hello world'));
console.log(stringToUpperCase('lorem ipsum'));
console.log(stringToUpperCase('javascript is cool'));


// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());
// -----------------------------------------or-----------------------------------
console.log(str3.toLowerCase());
console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
// -----------------------------------------or-----------------------------------
let stringToLowerCase = (text) => text.toLowerCase();

console.log(stringToLowerCase('HELLO WORLD'));
console.log(stringToLowerCase('LOREM IPSUM'));
console.log(stringToLowerCase('JAVASCRIPT IS COOL'));
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// робила з заміною даних у змінній (можна було вивести у іншу)
let str6 = ' dirty string   ';
arrStr = [];
for (let i = 0; i < str6.length; i++) {
    if ((str6[i] !== ' ' && str6[i + 1] !== ' ') || (str6[i] === ' ' && str6[i + 1] !== ' ') || (str6[i] !== ' ' && str6[i + 1] === ' ')) {
        arrStr.push(str6[i]);
    }
}
let newString = '';
for (let arrStrElement of arrStr) {
    newString += arrStrElement;
}
str6 = newString.trim();

console.log(arrStr);
console.log(newString);
console.log(str6);


// з іншою змінною
let newVariable = newString.trim();
console.log(newVariable);
// -----------------------------------------or with arrow function-----------------------------------
// let cleanTheStringFromExtraSpaces = (str) =>{
//     let arrStr = [];
//     for (let i = 0; i < str.length; i++) {
//         if ((str[i] !== ' ' && str[i + 1] !== ' ') ||
//             (str[i] === ' ' && str[i + 1] !== ' ') ||
//             (str[i] !== ' ' && str[i + 1] === ' ')) {
//             arrStr.push(str[i]);
//         }
//     }
//     let newString = '';
//     for (let arrStrElement of arrStr) {
//         newString += arrStrElement;
//     }
//     str = newString.trim();
//     // return console.log(str);
// // можна
// return str;
// }
// // тоді
// let newString = cleanTheStringFromExtraSpaces(str6);
//          console.log(newString);
// // cleanTheStringFromExtraSpaces(str6);

// --------------------------------------------------------------------------------

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str7 = 'Ревуть воли як ясла повні';
let stringToArray = (str) => str.split(' ');
let arr = stringToArray(str7);
console.log(arr);

// -----------------------------------------or-------------------------------------
function stringToArray_2(str) {
    return console.log(str.split(' '));
}

stringToArray_2('Ревуть воли як ясла повні');


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let arrStringFromNumberMapped = numArr.map(value => value.toString());
console.log(arrStringFromNumberMapped);
// -----------------------------------------or-------------------------------------
let arrStringFromNumberMapped1 = numArr.map(value => `${value}`);
console.log(arrStringFromNumberMapped1);


// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
function sortNums(arr, direction) {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    }
    if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    }
}

console.log(sortNums(nums, 'descending'));

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let monthDurationDescending = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(monthDurationDescending);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterCourseArrMoreThan5Month = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(filterCourseArrMoreThan5Month);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
function getId(lengthOfID) {
    let characterSet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < lengthOfID; i++) {
        result += characterSet[Math.floor(Math.random() * characterSet.length)];
    }
    return result;
}

let coursesAndDurationArrayPlusID = coursesAndDurationArray.map((value) => {
    return {id: getId(8), ...value}
});
// -----------------------------------------or-------------------------------------
//// let coursesAndDurationArrayPlusID = coursesAndDurationArray.map((value, index) =>{return{id:index+1, ...value}});
console.log(coursesAndDurationArrayPlusID);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {cardName: "6", point: 6},
    {cardName: "7", point: 7},
    {cardName: "8", point: 8},
    {cardName: "9", point: 9},
    {cardName: "10", point: 10},
    {cardName: "jack", point: 11},
    {cardName: "queen", point: 12},
    {cardName: "king", point: 13},
    {cardName: "ace", point: 14},
];
let cardSuits = [
    'spade',
    'diamond',
    'heart',
    'clubs',
];

let cardDeck = [];
for (let cardSuit of cardSuits) {
    for (let card of cards) {
        if (cardSuit === 'spade' || cardSuit === 'clubs') {
            cardDeck.push({...card, suit: cardSuit, color: 'black'});
        }
        if (cardSuit === 'diamond' || cardSuit === 'heart') {
            cardDeck.push({...card, suit: cardSuit, color: 'red'});
        }
    }
}
console.log(cardDeck);

// - знайти піковий туз
let aceSpade = cardDeck.filter(value => value.cardName === 'ace' && value.suit === 'spade');
console.log(aceSpade);

// - всі шістки
let sixs = cardDeck.filter(value => value.cardName === '6');
console.log(sixs)
// - всі червоні карти
let redCards = cardDeck.filter(value => value.color === 'red');
console.log(redCards)

// - всі бубни
let diamondCards = cardDeck.filter(value => value.suit === 'diamond');
console.log(diamondCards)

// - всі трефи від 9 та більше
let clubsCards = cardDeck.filter(value => value.suit === 'clubs' && value.point >= 9);
console.log(clubsCards);
// ============================
let clubsCards1 = cardDeck.filter(value => value.suit === 'clubs' && (value.cardName === '9' || value.cardName === '10' || value.cardName === 'jack' || value.cardName === 'queen' || value.cardName === 'king' || value.cardName === 'ace'));
console.log(clubsCards1)


// {
//     cardSuit: '', // 'spade'&#9824;, 'diamond' &#9830;,'heart'&#9829;, 'clubs'&#9827;
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let suitDivide = cardDeck.reduce((result, value) => {
    if (value.suit === 'spade') {
        result.spades.push(value)
    } else if (value.suit === 'diamond') {
        result.diamonds.push(value)
    } else if (value.suit === 'heart') {
        result.hearts.push(value)
    } else {
        result.clubs.push(value)
    }
    return result;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
})
console.log(suitDivide)
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в яких в modules є sass


let hasSass = [];
for (let coursesArrayElement of coursesArray) {
    if (coursesArrayElement.modules.includes('sass')) {
        hasSass.push(coursesArrayElement);
    }
}
console.log(hasSass);


// --написати пошук всіх об'єктів, в яких в modules є docker
let hasDocker = [];
for (let coursesArrayElement of coursesArray) {
    if (coursesArrayElement.modules.includes('docker')) {
        hasDocker.push(coursesArrayElement);
    }
}
console.log(hasDocker);


// =========================
let hasSass1 = [];
for (let coursesArrayElement of coursesArray) {
    if (coursesArrayElement.modules.find(value => value === 'sass')) {
        hasSass1.push(coursesArrayElement);
    }
}
console.log(hasSass1)
// =========================
let hasDocker1 = [];
for (let coursesArrayElement of coursesArray) {
    if (coursesArrayElement.modules.find(value => value === 'docker')) {
        hasDocker1.push(coursesArrayElement);
    }
}
console.log(hasDocker1)
// =========================
let hasSass2 = [];
for (let coursesArrayElement of coursesArray) {
    if ((coursesArrayElement.modules.indexOf('sass')) > 0) {
        hasSass2.push(coursesArrayElement);
    }
}
console.log(hasSass2)
// =========================
let hasDocker2 = [];
for (let coursesArrayElement of coursesArray) {
    if ((coursesArrayElement.modules.indexOf('docker')) > 0) {
        hasDocker2.push(coursesArrayElement);
    }
}
console.log(hasDocker2)
// =========================
let hasSass3 = [];
for (let coursesArrayElement of coursesArray) {
    let arrSass = (coursesArrayElement.modules.filter(value => value === 'sass'))
    if (arrSass.includes('sass')) {
        hasSass3.push(coursesArrayElement);
    }
}
console.log(hasSass3);
// =========================

let hasDocker3 = [];
for (let coursesArrayElement of coursesArray) {
    let arrDocker = (coursesArrayElement.modules.filter(value => value === 'docker'))
    console.log(arrDocker)
    if (arrDocker.includes('docker')) {
        hasDocker3.push(coursesArrayElement);
    }
}
console.log(hasDocker3);
// =========================
let hasSass4 = coursesArray.filter((coursesArrayElement) => coursesArrayElement.modules.includes('sass'));
console.log(hasSass4);
let hasDocker4 = coursesArray.filter((coursesArrayElement) => coursesArrayElement.modules.includes('docker'));
console.log(hasDocker4);
