// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
let number = 1;
let arr = [];
while (arr.length < 50) {
    if (number % 2 !== 0) {
        number++;
    } else {
        arr[arr.length] = number;
        number++;
    }
}
console.log(arr);
//        b. заповнити його 50 непарними числами за допомоги циклу.
let number2 = 1;
let arr2 = [];
while (arr2.length < 50) {
    if (number2 % 2 !== 0) {
        arr2[arr2.length] = number2;
        number2++;
    } else {
        number2++;
    }
}
console.log(arr2);
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let arr3 = [];
while (arr3.length < 20) {
    arr3[arr3.length] = Math.ceil(Math.random() * 100)
}
console.log(arr3);
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arr4 = [];
while (arr4.length < 20) {
    let number3 = Math.ceil(Math.random() * 1000);
    if (number3 >= 8 && number3 <= 732) {
        arr4[arr4.length] = number3;
    }
}
console.log(arr4);

//  2. Вивести за допомогою console.log кожен третій елемент
for (let i = 2; i < arr4.length; i += 3) {
    console.log(arr4[i])
}

//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < arr4.length; i += 3) {
    if (arr4[i] % 2 === 0) {
        console.log(arr4[i])
    }
}
//  4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив
let arr5 = [];
for (let i = 2; i < arr4.length; i += 3) {
    if (arr4[i] % 2 === 0) {
        arr5[arr5.length] = arr4[i];
    }
}
console.log(arr5);

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let arr6 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < arr6.length; i++) {
    if (arr6[i + 1] % 2 === 0) {
        console.log(arr6[i]);
    }
}
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
//  Обрахувати середній чек.
let arr7 = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (let x of arr7) {
    sum += x;
}
let bill = sum / arr7.length;
console.log(Math.round(bill));
//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr8 = [];
let arr9 = [];
while (arr8.length < 10) {
    arr8[arr8.length] = Math.ceil(Math.random() * 100)
}
console.log(arr8);
for (let arr8Element of arr8) {
    arr9[arr9.length] = arr8Element * 5;
}
console.log(arr8);
console.log(arr9);

//  8. Створити масив з будь-якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arr10 = [];
let arr11 = [1, true, 3, "d4", "e5", true, "g7", "h8", false, "j10"];
for (let i = 0; i < arr7.length; i++) {
    if (typeof arr11[i] === "number") {
        arr10[arr10.length] = arr11[i];
    }
}
console.log(arr10);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id"
let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
    let usersWithIdElement = usersWithId[i];
    for (let i = 0; i < citiesWithId.length; i++) {
        let citiesWithIdElement = citiesWithId[i];
        if (usersWithIdElement.id === citiesWithIdElement.user_id) {
            let full_user_info = {
                id: usersWithIdElement.id,
                name: usersWithIdElement.name,
                age: usersWithIdElement.age,
                status: usersWithIdElement.status,
                address: {
                    user_id: citiesWithIdElement.user_id,
                    country: citiesWithIdElement.country,
                    city: citiesWithIdElement.city
                }
            }
            console.log(full_user_info);
            usersWithCities[usersWithCities.length] = full_user_info;
        }
    }
}
// Записати цей об'єкт в новий масив
console.log(usersWithCities);

// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr12 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let x of arr12) {
    if (x % 2 === 0) {
        console.log(x);
    }
}
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arr14 = [];
let arr13 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let x of arr13) {
    arr14[arr14.length] = x;
}
console.log(arr13);
console.log(arr14);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arr15 = ['a', 'b', 'c'];
let sumString = '';
for (let string of arr15) {
    sumString += string;
}
console.log(sumString);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let arr16 = ['a', 'b', 'c'];
let i = 0;
let sumString2 = '';
while (i < arr16.length) {
    sumString2 += arr16[i];
    i++;
}
console.log(sumString2);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let arr17 = ['a', 'b', 'c'];
let sumString3 = '';
for (let i = 0; i < arr17.length; i++) {
    sumString3 += arr17[i];
}
console.log(sumString3);
