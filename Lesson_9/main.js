// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta

let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');


// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// -------------------------------------------inline-style------------------------------------------
// div.style.backgroundColor = 'blue';
// div.style.color = 'darkgreen';
// div.style.fontSize = '22px';

// -----------------------------------------------------OR-----------------------

let style = document.createElement('style');
style.innerHTML = '.wrap{background-color: green; color: darkblue; font-size: 40px;} li{font-size: 20px; color:red;} p{font-size: 18px;}';
// style.innerText = '.wrap {background-color: green; color: white; font-size: 45px;}';
document.head.appendChild(style);


// - додати цей блок в body.

div.innerText = 'Будь-який текст';
document.body.appendChild(div);


// - клонувати його повністю, та додати клон в body.

let clone = div.cloneNode(true);
clone.style.backgroundColor = 'yellow'; //колір буде змінено, оскільки прописано inline
// -----------------------------------------------------------OR------------------------
document.body.append(clone);
document.body.append(div.cloneNode(true));//другий клон без зміни кольору фону


// - Є масив:
let arr = ['Main', 'Products', 'About us', 'Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let ul = document.createElement('ul');
document.body.appendChild(ul)
for (let arrElement of arr) {
    let li = document.createElement('li');
    li.innerText = arrElement;
    ul.appendChild(li);
}


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -------------------------------------------створюю обгортку-------------------------
let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (let course of coursesAndDurationArray) {
    let block = document.createElement('div');
    block.classList.add('card');
    let p = document.createElement('p');
    block.innerHTML = `<h2>${course.title}</h2>`;
    wrapper.appendChild(block);
    block.appendChild(p)
    if (String(course.monthDuration).includes('4')) {
        p.innerText = `Тривалість лікбезу - ${course.monthDuration} місяці`
    } else {
        p.innerText = `Тривалість лікбезу - ${course.monthDuration} місяців`
    }
}

// =========================
//
//     - Є масив
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let wrapping = document.createElement('div');
wrapping.classList.add('wrapping');
document.body.appendChild(wrapping);
for (let coursesAndDurationArray1Element of coursesAndDurationArray1) {
    let divInfo = document.createElement('div');
    let h1 = document.createElement('h1');
    let pInfo = document.createElement('p');
    wrapping.appendChild(divInfo);
    divInfo.classList.add('item');
    h1.classList.add('heading');
    pInfo.classList.add('description');
    divInfo.append(h1, pInfo);
    h1.innerText = coursesAndDurationArray1Element.title;
    pInfo.innerText = coursesAndDurationArray1Element.monthDuration;
}
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png',
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png',
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png',
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
for (let simpsonMember of simpsons) {
    let memberOfSimpsons = document.createElement('section');
    memberOfSimpsons.classList.add('member');
    document.body.appendChild(memberOfSimpsons);
    let nameOfMember = document.createElement('h2');
    let surnameOfMember = document.createElement('h2');
    let ageOfMember = document.createElement('span');
    let infoOfMember = document.createElement('p');
    let photoOfMember = document.createElement('img');
    nameOfMember.innerText = simpsonMember.name;
    surnameOfMember.innerText = simpsonMember.surname;
    ageOfMember.innerText = simpsonMember.age;
    infoOfMember.innerText = simpsonMember.info;
    photoOfMember.setAttribute('src', `${simpsonMember.photo}`);
    memberOfSimpsons.append(nameOfMember, surnameOfMember, ageOfMember, infoOfMember, photoOfMember);
}
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png який лежить в папці з поточним фйлом
let courseInfoLists = document.createElement('div');
document.body.appendChild(courseInfoLists);
courseInfoLists.classList.add('general');
for (let coursesArrayElement of coursesArray) {
    let blockElement = document.createElement('section')
    courseInfoLists.appendChild(blockElement);
    blockElement.classList.add('blockInfo');
    blockElement.innerHTML = `<h1>${coursesArrayElement.title}</h1>`;

    let divDuration = document.createElement('div');
    blockElement.appendChild(divDuration);
    divDuration.classList.add('duration');

    let spanMonthDuration = document.createElement('span');
    let spanHourDuration = document.createElement('span');
    divDuration.append(spanMonthDuration, spanHourDuration);

    spanMonthDuration.innerText = `Кількість місяців - ${coursesArrayElement.monthDuration}`;
    spanHourDuration.innerText = `Кількість годин - ${coursesArrayElement.hourDuration}`;

    let ulModules = document.createElement('ul');
    blockElement.appendChild(ulModules);

    for (let module of coursesArrayElement.modules) {
        let liModules = document.createElement('li');
        ulModules.appendChild(liModules);
        liModules.classList.add('module');
        liModules.innerText = module;
    }
}
// ------------------
// ------------------
// ------------------
// https://mixkit.co/free-stock-music/
let array = document.querySelectorAll('.item-grid__item');
// ------------NodeList----------
// let array = Array.from(document.querySelectorAll('.item-grid__item'));
console.log(array);
let result = [];
for (let i= 0; i < array.length; i++) {
    let title = document.querySelectorAll('.item-grid-card__title')[i].innerText;
    let author = document.querySelectorAll('.item-grid-music-preview__author')[i].innerText;
    let attribute = document.querySelectorAll('[data-audio-player-preview-url-value]')[i];
    let mp3 = attribute.getAttribute('data-audio-player-preview-url-value');
    let object = {
        title,
        author,
        mp3,
    }
    result.push(object)
}
console.log(result);
