// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let str1 = 'hello';
let str2 = 'owu';
let str3 = 'com';
let str4 = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let boo1 = true;
let boo2 = false;
console.log(str1, str2, str3, str4, num1, num2, num3, num4, num5, num6, num7, boo1, boo2);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Iryna';
let middleName = 'Grygorivna';
let lastName = 'Donets';
// ----------------------------------------------------------за допомогою інтерполяції--------------------------------------------
// змінна носить одне й те саме ім'я, оскільки повинна використовуватися лише одна варіація коду
// let person = `${firstName} ${middleName} ${lastName}`;
// ----------------------------------------------------------за допомогою контакенації--------------------------------------------
let person = firstName + " " + middleName + " " + lastName;
// ------------------------------------------------------------------або----------------------------------------------------------
let space = ' ';
person = firstName + space + middleName + space + lastName;
console.log(person);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;
console.log(typeof a, typeof b, typeof c);
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let firstName1 = prompt('Enter your first name:');
let middleName1 = prompt('Enter your middle name:');
let age = +prompt('Enter your age:');
let person1 = `${firstName1} ${middleName1} - ${age}`;
console.log(person1);
// ------------------------------------------------------------------або----------------------------------------------------------
console.log(firstName1 + ' ' + middleName1 + ' ' + '-' + ' ' + age);
// ------------------------------------------------------------------або----------------------------------------------------------
console.log(firstName1 + space + middleName1 + space + '-' + space + age);
