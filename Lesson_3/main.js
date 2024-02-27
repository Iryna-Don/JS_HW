// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>Довільний текст</div>');
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Довільний текст - це індекс ${i}</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let n = 0;
while (n < 20) {
    document.write('<h1>Довільний текст заголовку h1</h1>')
    n++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let nn = 0;
while (nn < 20) {
    document.write(`<h1>Заголовок ${nn}</h1>`)
    nn++;
}
//
// - Використовуючи дані з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write('<ul>');
// for (let i = 0; i < listOfItems.length; i++) {
//     document.write(`<li>${listOfItems[i]}</li>`);
// }
// document.write('</ul>');
// --------------------------------------------------------or---------------------------------
// document.write('<ul>');
// for (let listOfItem of listOfItems) {
//     document.write(`<li>${listOfItem}</li>`);
// }
// document.write('</ul>');
// --------------------------------------------------------or---------------------------------
let i = 0;
document.write('<ul>');
while (i < listOfItems.length) {
    document.write(`<li>${listOfItems[i]}</li>`);
    i++;
}
document.write('</ul>');
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
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
    document.write(`<div class="product-card"><h3 class="product-title">${products[i].title}. Price - ${products[i].price}</h3><img src="${products[i].image}" alt="${products[i].title}" class="product-image" width="200px"></div>`)
}
// --------------------------------------------------------or---------------------------------
for (let product of products) {
    document.write(`<div class="product-card"><h3 class="product-title">${product.title}. Price - ${product.price}</h3><img src="${product.image}" alt="${product.title}" class="product-image" width="200px"></div>`)
}
// --------------------------------------------------------or---------------------------------
let index = 0;
while (index < products.length) {
    document.write(`<div class="product-card"><h3 class="product-title">${products[index].title}. Price - ${products[index].price}</h3><img src="${products[index].image}" alt="${products[index].title}" class="product-image" width="200px"></div>`)
    index++;
}
// --------------------------------------------------------or---------------------------------
let index1 = 0;
while (index1 < products.length) {
    document.write(`<div class="product-card"><h3 class="product-title">${products[index1]['title']}. Price - ${products[index1]['price']}</h3><img src="${products[index1]['image']}" alt="${products[index1]['title']}" class="product-image" width="200px"></div>`)
    index1++;
}
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
document.write(`<div> Користувачі зі статусом true: `);
for (let i = 0; i < users.length; i++) {

    // if (users[i].status === true) {
    //     document.write(`${users[i].name} `);
    //     console.log(users[i].name);
    // }
    // --------------------------------------------------------or---------------------------------
    if (users[i]['status'] === true) {
        document.write(`${users[i]['name']} `);
        console.log(users[i]['name']);
    }

}
document.write(`</div>`)

// - користувачів зі статусом false
document.write(`<div>Користувачі зі статусом false: `);
for (let i = 0; i < users.length; i++) {
    if (users[i].status === false) {
        document.write(`${users[i].name} `);
        console.log(users[i].name);
    }
}
document.write(`</div>`)
// - користувачів які старші за 30 років
document.write(`<div>Користувачі старші за 30 років: `);
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        document.write(`${users[i].name} `);
        console.log(users[i].name);
    }
}
document.write(`</div>`);