// ---створити масив з:
//     - з 5 числових значень
let arr_num = [0, 12, 3.14, 9.5, 44];
// - з 5 стрічкових значень
let arr_text = ['one', 'two', 'three', 'four', 'five'];
// - з 5 значень стрічкового, числового та булевого типу
let arr_mix = ['one', 2, 3, true, false];
// - та вивести його в консоль
console.log(arr_num);
console.log(arr_text);
console.log(arr_mix);
// ----------------------------------------or all together----------------
console.log(arr_num, arr_text, arr_mix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr = [];
arr[0] = 'one';
arr[1] = 'two';
arr[2] = 3;
arr[3] = true;
console.log(arr);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let i = 0;
while (i < arr1.length) {
    console.log(arr1[i])
    i++;
}
//     2. перебрати його циклом for
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}
// --------------------------------------or-----------------------------------------
for (let number of arr1) {
    console.log(number);
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let b = 0;
while (b < arr1.length) {
    if (b % 2 !== 0) {
        console.log(arr1[b]);
    }
    b++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < arr1.length; i++) {
    if (i % 2 !== 0) {
        console.log(arr1[i]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let d = 0;
while (d < arr1.length) {
    if (arr1[d] % 2 === 0) {
        console.log(arr1[d]);
    }
    d++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
    }
}
// --------------------------------------or-----------------------------------------
for (let number of arr1) {
    if (number % 2 === 0) {
        console.log(number);
    }

}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 3 === 0) {
        arr1[i] = 'okten';
    }
}
console.log(arr1);

// 8. вивести масив в зворотньому порядку.
for (let i = arr1.length - 1; i >= 0; i--) {
    console.log(arr1[i]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1---------------------------------------------------------------------------------------------
let i2 = arr1.length - 1;
while (i2 >= 0) {
    console.log(arr1[i2]);
    i2--;
}
// 2---------------------------------------------------------------------------------------------
for (let i = arr1.length - 1; i >= 0; i--) {
    console.log(arr1[i])
}
// 3---------------------------------------------------------------------------------------------
let b2 = arr1.length - 1;
while (b2 >= 0) {
    if (b2 % 2 !== 0) {
        console.log(arr1[b2]);
    }
    b2--;
}

// 4---------------------------------------------------------------------------------------------
for (let i = arr1.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(arr1[i]);
    }
}

// 5---------------------------------------------------------------------------------------------
let d2 = arr1.length - 1;
while (d2 >= 0) {
    if (arr1[d2] % 2 === 0) {
        console.log(arr1[d2]);
    }
    d2--;
}

// 6---------------------------------------------------------------------------------------------
for (let i = arr1.length - 1; i >= 0; i--) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
    }
}

// 7------------------------------------нічого не зміниться окрім порядку виводу, оскільки вже змінено--------------------------------------------------------
for (let i = arr1.length - 1; i >= 0; i--) {
    if (arr1[i] % 3 === 0) {
        arr1[i] = 'okten';
    }
    console.log(arr1[i])
}
// ---------------------------------------------------------------------------------------------
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}
// --------------------------------------or-----------------------------------------
for (let number of arr2) {
    console.log(number);
}
// - Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
let arr3 = ['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8', 'i9', 'j10'];
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}
// --------------------------------------or-----------------------------------------
for (let str of arr3) {
    console.log(str);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr4 = [1, NaN, 0, function () {
}, 5, "f6", [], {}, true, null];
for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}
// --------------------------------------or-----------------------------------------
for (let mix of arr4) {
    console.log(mix);
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr5 = [1, true, 3, "d4", "e5", true, "g7", "h8", false, "j10"];
for (let i = 0; i < arr5.length; i++) {
    if (typeof arr5[i] === 'boolean') {
        console.log(arr5[i]);
    }
}
// --------------------------------------or-----------------------------------------
for (let boo of arr5) {
    if (typeof boo === 'boolean') {
        console.log(boo);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arr6 = [1, true, 3, "d4", "e5", true, "g7", "h8", false, "j10"];
for (let i = 0; i < arr6.length; i++) {
    if (typeof arr6[i] === "number") {
        console.log(arr5[i]);
    }
}
// --------------------------------------or-----------------------------------------

for (let number of arr6) {
    if (typeof number === "number") {
        console.log(number);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr7 = [1, true, 3, "d4", "e5", true, "g7", "h8", false, "j10"];
for (let i = 0; i < arr7.length; i++) {
    if (typeof arr7[i] === "string") {
        console.log(arr7[i]);
    }
}
// --------------------------------------or-----------------------------------------
for (let str of arr6) {
    if (typeof str === "string") {
        console.log(str);
    }
}

//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr8 = [];
arr8[0] = 'text';
arr8[1] = 2;
arr8[2] = true;
arr8[3] = 0;
arr8[4] = {
    name: 'roma',
    age: 44,
    sex: 'male',
    status: false,
}
arr8[5] = [1, 2, 3, '4'];
arr8[6] = function () {
};
arr8[7] = NaN;
arr8[8] = null;
arr8[9] = false;
console.log(arr8)
for (let arr8Element of arr8) {
    console.log(arr8Element)
}
// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write(`<div> Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку: `);

for (let i = 1; i <= 10; i++) {
    document.write(`${i} `);
    console.log(i);
}
document.write('</div>');

// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write(`<div> Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку: `);


for (let i = 1; i <= 100; i++) {
    console.log(i);
    document.write(`${i} `);
}
document.write('</div>');

// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
document.write(`<div> Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку: `);

for (let i = 1; i <= 100; i += 2) {
    console.log(i);
    document.write(`${i} `);
}
document.write('</div>');

// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
document.write(`<div> Створити цикл for на 100 ітерацій. Вивести тільки парні кроки: `);

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`${i} `);
    }
}
document.write('</div>');

// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
document.write(`<div> Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки: `);

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(`${i} `);
    }
}
document.write('</div>');

//
// створити масив книжок (назва, кількість сторінок, автори , жанри).
let book1 = {
    title: "Вечірка на Геловін",
    pageCount: 304,
    genre: ["Детектив"],
    authors: [
        {name: "Агата Крісті", age: 85},
    ],
};
let book2 = {
    title: "Я бачу, вас цікавить пітьма",
    pageCount: 664,
    genre: ["Трилер"],
    authors: [
        {name: "Ілларіон Станіславович Павлюк", age: 43},
    ],
};
let book3 = {
    title:
        "Не гарчіть на собаку! Книга про дресирування людей, тварин і самого себе",
    pageCount: 320,
    genre: ["Психологія"],
    authors: [
        {name: "Карен Прайор", age: 91},
    ],
};
let book4 = {
    title: "Коли Ніцше плакав",
    pageCount: 464,
    genre: ["Психологія"],
    authors: [{name: "Ірвін Ялом", age: 92}, {name: 'noName', age: null}],
};
let book5 = {
    title: "11/22/63",
    pageCount: 976,
    genre: ["Фантастика"],
    authors: [{name: "Стівен Кінг", age: 76}],
};
let book6 = {
    title: "Народження Сталевого Щура",
    pageCount: 288,
    genre: ["Фантастика", 'Пригоди'],
    authors: [{name: "Гаррі Гаррісон", age: 87}],
};
let books = [book1, book2, book3, book4, book5, book6];

// -знайти найбільшу книжку
// -------------------------------------------- найбільше значення pageCount-------------------------
let biggestPageCountBooks = [];
let m = 0;
for (let i = 0; i < books.length; i++) {
    if (m <= books[i].pageCount) {
        m = books[i].pageCount;
    }
}
// -------------------------------------------- назви книг з найбільшим значенням pageCount-------------------------
for (let i = 0; i < books.length; i++) {
    if (books[i].pageCount === m) {
        biggestPageCountBooks[biggestPageCountBooks.length] = books[i].title;
    }
}
console.log(biggestPageCountBooks);
console.log(`${biggestPageCountBooks} - кількість сторінок - ${m}`);

// - знайти книжку/ки з найбільшою кількістю жанрів
let biggestGenreBooks = [];
let m2 = 0;
for (let i = 0; i < books.length; i++) {
    if (m2 <= books[i].genre.length) {
        m2 = books[i].genre.length;
    }
}
for (let i = 0; i < books.length; i++) {
    if (books[i].genre.length === m2) {
        biggestGenreBooks[biggestGenreBooks.length] = books[i].title;
    }
}
console.log(biggestGenreBooks);
console.log(`${biggestGenreBooks} - кількість жанрів - ${m2}`);

// - знайти книжку/ки з найдовшою назвою
let longestTitleBooks = [];
let m3 = 0;
for (let i = 0; i < books.length; i++) {
    if (m3 <= books[i].title.length) {
        m3 = books[i].title.length;
    }
}
for (let i = 0; i < books.length; i++) {
    if (books[i].title.length === m3) {
        longestTitleBooks[longestTitleBooks.length] = books[i].title;
    }
}
console.log(longestTitleBooks);
console.log(`${longestTitleBooks} - кількість жанрів - ${m3}`);

// - знайти книжку/ки які писали 2 автори
let twoAuthorsBooks = [];
let m4 = 2;
for (let i = 0; i < books.length; i++) {
    if (m4 === books[i].authors.length) {
        twoAuthorsBooks[twoAuthorsBooks.length] = books[i].title;
    }
}
console.log(twoAuthorsBooks);
console.log(`${twoAuthorsBooks} - кількість авторів - ${m4}`);

// - знайти книжку/ки які писав 1 автор 
// будь-яка кількість авторів, треба тільки підставити кількість в змінну n
let nAuthorsBooks = [];
let n = 1;
for (let i = 0; i < books.length; i++) {
    if (n === books[i].authors.length) {
        nAuthorsBooks[nAuthorsBooks.length] = books[i].title;
    }
}
console.log(nAuthorsBooks);
console.log(`${nAuthorsBooks} - кількість авторів - ${n}`);