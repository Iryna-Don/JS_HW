// =========================================================================Lesson_6
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arrStringFromNumberJSON = (JSON.stringify(numArr)).replace(']', '').replace('[', '');
console.log(arrStringFromNumberJSON);
// ================================================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
arrNew = [];
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let {monthDuration: coursesLast} = coursesAndDurationArray[i];
    if (coursesLast > 5) {
        arrNew.push(coursesAndDurationArray[i])
    }
}
console.log(arrNew)

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
let hasSassElement = [];
for (let coursesArrayElement of coursesArray) {
    let {modules} = coursesArrayElement;
    if (modules.includes('sass')) {
        hasSassElement.push(coursesArrayElement);
    }
}
console.log(hasSassElement);
// --написати пошук всіх об'єктів, в яких в modules є docker
let hasDockerElement = [];
for (let coursesArrayElement of coursesArray) {
    let {modules} = coursesArrayElement;
    if (modules.includes('docker')) {
        hasDockerElement.push(coursesArrayElement);
    }
}
console.log(hasDockerElement);
// =========================
let hasSass1 = [];
for (let coursesArrayElement of coursesArray) {
    let {modules} = coursesArrayElement;
    if (modules.find(value => value === 'sass')) {
        hasSass1.push(coursesArrayElement);
    }
}
console.log(hasSass1)
// =========================
let hasDocker1 = [];
for (let coursesArrayElement of coursesArray) {
    let {modules} = coursesArrayElement;
    if (modules.find(value => value === 'docker')) {
        hasDocker1.push(coursesArrayElement);
    }
}
console.log(hasDocker1)
// =========================
let hasSass2 = [];
for (let coursesArrayElement of coursesArray) {
    let {modules} = coursesArrayElement;
    if ((modules.indexOf('sass')) > 0) {
        hasSass2.push(coursesArrayElement);
    }
}
console.log(hasSass2)
// =========================
let hasDocker2 = [];
for (let coursesArrayElement of coursesArray) {
    let {modules} = coursesArrayElement;
    if ((modules.indexOf('docker')) > 0) {
        hasDocker2.push(coursesArrayElement);
    }
}
console.log(hasDocker2)
//========================================================
//========================================================
//================================================================= Lesson_3
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let i = 0; i < products.length; i++) {
    let {title} = products[i];
    let {price} = products[i];
    let {image} = products[i];
    document.write(`<div class="product-card"><h3 class="product-title">${title}. Price - ${price}</h3><img src="${image}" alt="${title}" class="product-image" width="200px"></div>`)
}
// --------------------------------------------------------or---------------------------------
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
// --------------------
//     є масив
let users = [
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
// за допомоги циклу вивести:
// - користувачів зі статусом true
// document.write(`<div> Користувачі зі статусом true: `);
for (let i = 0; i < users.length; i++) {
    let {name} = users[i];
    let {status} = users[i];

    if (status === true) {
        document.write(`${name} `);
        console.log(name);
    }
}
document.write(`</div>`)

// - користувачів зі статусом false
// document.write(`<div>Користувачі зі статусом false: `);
for (let i = 0; i < users.length; i++) {
    let {name} = users[i];
    let {status} = users[i];

    if (status === false) {
        document.write(`${name} `);
        console.log(name);
    }
}
document.write(`</div>`)
// - користувачів які старші за 30 років
document.write(`<div>Користувачі старші за 30 років: `);
for (let i = 0; i < users.length; i++) {
    let {name} = users[i];
    let {age} = users[i];

    if (age > 30) {
        document.write(`${name} `);
        console.log(name);
    }
}
document.write(`</div>`);
//=============================================
//=============================================
//============================================================================Lesson_4
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

function arrayOutputToConsole(array) {
    let [a, b, c, d, e, f, g, h, i, k, l] = array;
    console.log(a, b, c, d, e, f, g, h, i, k, l)
}

arrayOutputToConsole(ListOfUsers);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

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

function arrayWithObjectsWriteToDocument(array) {
    for (let i = 0; i < array.length; i++) {
        let {id} = array[i];
        let {name} = array[i];
        let {age} = array[i];
        document.write('<div class="wrap">')
        document.write(`<div class="userCard">`)
        document.write(`<p>id - ${id} ім'я - ${name} вік -  ${age}</p>`);
        document.write(`</div>`);
        document.write('</div>');
    }
}

arrayWithObjectsWriteToDocument(listOfUsers);

