// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// ------------------------------функція заокруглення чисел до десятих---------------------------
let roundingToTenths = (number) => +number.toFixed(2);

// -----------------------------------------or----------------------------------------------
let roundingToTenthsMath = (number) => Math.round(number * 100) / 100;

console.log(roundingToTenths(3.123342565676876));
console.log(roundingToTenthsMath(3.123342565676876));

// ---------------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами a і b
let areaOfARectangle = (a, b) => roundingToTenths(a * b);

console.log(areaOfARectangle(5.217, 12.032));
// ----------------------------------для усіх наступних результатів-----------------------
// можливо декларувати та ініціалізувати змінну з отриманим результатом для подальшого використання
// цієї змінної в розрахунках або інших функціях
let resultAreaOfARectangle_1 = areaOfARectangle(5.217, 12.032);
console.log(resultAreaOfARectangle_1);
let resultAreaOfARectangle_2 = areaOfARectangle(6, 5);
console.log(resultAreaOfARectangle_2);
// -----------------------------------------or----------------------------------------------
let areaOfARectangle1 = (a, b) => roundingToTenthsMath(a * b);

console.log(areaOfARectangle1(5.217, 12.032));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
let areaOfACircle = (r) => roundingToTenths(Math.PI * r ** 2);

console.log(areaOfACircle(4));

// -----------------------------------------or----------------------------------------------
let areaOfACircle1 = (r) => roundingToTenthsMath(Math.PI * r ** 2);

console.log(areaOfACircle1(4));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
let cylinderArea = (h, r) => roundingToTenths(2 * Math.PI * r * h);

console.log(cylinderArea(12, 4.2));

// -----------------------------------------or----------------------------------------------
let cylinderArea1 = (h, r) => roundingToTenthsMath(2 * Math.PI * r * h);

console.log(cylinderArea1(12, 4.2));


// - створити функцію яка приймає масив та виводить кожен його елемент
let ListOfUsers = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
];

let arrayOutputToConsole = (array) => {
    for (let arrayElement of array) {
        console.log(arrayElement)
    }
}
arrayOutputToConsole(ListOfUsers);
// -----------------------------------------or----------------------------------------------
ListOfUsers.forEach((arrayElement) => console.log(arrayElement));
// -----------------------------------------or----------------------------------------------
let arrayOutputToConsole1 = (array) => {
array.forEach((arrayElement) => console.log(arrayElement))};
arrayOutputToConsole1(ListOfUsers);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraphText = (text) => document.write(`<p>${text}</p>`);

paragraphText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam asperiores cupiditate, dicta doloremque eveniet exercitationem expedita ipsum iste maxime neque numquam quae quas quidem, rem unde, vero. Adipisci, soluta.');
paragraphText('Мо́ва програмува́ння (англ. Programming language) — це штучна мова, створена для передачі команд машинам, зокрема комп\'ютерам. Мови програмування використовуються для створення програм, які контролюють поведінку машин, та для запису алгоритмів.Суворіше визначення: мова програмування — це система позначень для опису алгоритмів і структур даних, певна штучна формальна система, засобами якої можна виражати алгоритми. Мову програмування визначає набір лексичних, синтаксичних і семантичних правил, що задають зовнішній вигляд програми та дії, які виконує виконавець (комп/`ютер) під її управлінням. З часу створення перших програмованих машин було створено понад дві з половиною тисячі мов програмування. Щороку до них додаються нові. Деякими мовами вміє користуватись тільки невелике число їхніх розробників, інші стають відомі мільйонам людей. Професійні програмісти зазвичай застосовують у своїй роботі декілька мов програмування.')


// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
let createUlWithThreeLi = (text) => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);

createUlWithThreeLi('text for &lt li &gt');


// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createUlWithNLi = (text, n) => {
    document.write('<ul>')
    for (let i = 0; i < n; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
};

createUlWithNLi('the best text for &lt li &gt', 10);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// ------------------------------------побудувала нумерований список-----------------------------------
let writeListOfItemsFromArray = (array) => {
    document.write('<ol>')
    for (let arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write('</ol>');
};

let arr = [1, true, 3, "d4", "e5", true, "g7", "h8", false, "j10"];

writeListOfItemsFromArray(arr);
// -----------------------------------------or----------------------------------------------
// -----------------------------------------ненумерований список----------------------------------------------

let writeListOfItemsFromArray1 = ((array) => {
    document.write('<ul>');
    array.forEach(arrayElement => document.write(`<li>${arrayElement}</li>`));
        document.write('</ul>');
})
writeListOfItemsFromArray1(arr);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrayWithObjectsWriteToDocument = (array) => {
    document.write('<div class="wrap">')
    for (let arrayElement of array) {
        document.write(`<div class="userCard">`)
        for (let arrayElementKey in arrayElement) {
            document.write(`<p>${arrayElementKey}: ${arrayElement[arrayElementKey]}</p>`);
        }
        document.write(`</div>`);
    }
    document.write('</div>')
};

let listOfUsers = [
    {id: 11, name: 'petya', age: 30},
    {id: 12, name: 'vasya', age: 31},
    {id: 13, name: 'kolya', age: 29},
    {id: 14, name: 'olya', age: 28},
    {id: 15, name: 'max', age: 30},
    {id: 16, name: 'anya', age: 31},
    {id: 17, name: 'oleg', age: 28},
    {id: 18, name: 'andrey', age: 29},
    {id: 19, name: 'masha', age: 30},
    {id: 20, name: 'olya', age: 31},
    {id: 21, name: 'max', age: 31}
];

arrayWithObjectsWriteToDocument(listOfUsers);
// -----------------------------------------or----------------------------------------------
let arrayWithObjectsWriteToDocument1 = (arr)=>{
    document.write('<div class="wrap">')
    arr.forEach((arrElement) =>{
        document.write(`<div class="userCard">`);
        for (let arrElementKey in arrElement) {
            document.write(`<p>${arrElementKey}: ${arrElement[arrElementKey]}</p>`)}
        document.write(`</div>`);
    })
    document.write('</div>')
};
arrayWithObjectsWriteToDocument1(listOfUsers);



// - створити функцію яка повертає найменьше число з масиву
let smallestNumberInTheArray = (arrayOfNumbers) => {
    let m = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (m >= arrayOfNumbers[i]) {
            m = arrayOfNumbers[i];
        }
    }
    return m;
}

let arr_numbers = [12, 33.1, -8, 64, -15.7, 333, -1000, 0];
console.log(smallestNumberInTheArray(arr_numbers));
// -----------------------------------------or----------------------------------------------
let smallestNumberInTheArray1 = (arrayOfNumbers) => {
    let newSortArrayOfNumbers =  arrayOfNumbers.sort((a,b) => a-b);
    console.log(newSortArrayOfNumbers[0])}

smallestNumberInTheArray1(arr_numbers);


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arrayOfNumbers) => {
    let n = 0;
    for (let arrayOfNumber of arrayOfNumbers) {
        n += arrayOfNumber;
    }
    return n;
}
console.log(sum(arr_numbers));
// -----------------------------------------or----------------------------------------------
let sum1 = (arrayOfNumbers) => {
    let sumOfArrayOfNumbers = arrayOfNumbers.reduce((acc, arrayOfNumbersElement)=> acc+arrayOfNumbersElement,0);
    console.log(sumOfArrayOfNumbers);
}
sum1(arr_numbers);


// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let firstNumber = arr[index1];
    let secondNumber = arr[index2];
    arr[index2] = firstNumber;
    arr[index1] = secondNumber;
    return console.log(arr);
}

swap([11, 22, 33, 44], 0, 1);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let currencyValuesArray = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42},
    {currency: 'GBP', value: 48.54},
    {currency: 'PLN', value: 9.64}
];

let exchange = (sumUAH, currencyValues, exchangeCurrency) =>{
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            let result = roundingToTenths(sumUAH / currencyValues[i].value) + ` ${exchangeCurrency}`;
            return console.log(result);
            //-----------------------------------------можливий запис-----------------------------------------
            // return console.log(roundingToTenths(sumUAH / currencyValues[i].value))
        }
    }
}

exchange(10000, currencyValuesArray, 'EUR');
