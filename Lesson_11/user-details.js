// //---------------------через <form>--------------------------------
// let linkID_url = decodeURI(location.search.substring(1));//для позбавлення кодування encodeURI
let linkID_url = location.search.substring(1);
let userNumber = linkID_url.split("&")[0].split('=')[1];
console.log(userNumber);
let link = 'https://jsonplaceholder.typicode.com/users/XXX';
let linkID = link.replace('XXX', userNumber);
// // ----------------------через URL <a> <button>------------------------
// let linkID_url = location.search.substring(1);
// console.log(linkID_url);
// let link = 'https://jsonplaceholder.typicode.com/users/XXX';
// let linkID = link.replace('XXX', String(linkID_url));


// // --------------------через localStorage---------------
// let link = 'https://jsonplaceholder.typicode.com/users/XXX';
// let linkID = link.replace('XXX', localStorage.getItem('userId'));
// // -------------------------------------------------------

fetch(linkID)
    .then(res => res.json())
    .then((info) => {
        let wrap = document.createElement('section');
        document.body.appendChild(wrap);
        //----------------------------1 рівень значень------------------------------
        for (let infoKey in info) {
            let obj1 = info[infoKey];
            if (typeof obj1 !== 'object') {
                let infoElem1 = document.createElement('div');
                wrap.appendChild(infoElem1);
                infoElem1.innerHTML = `<b>${infoKey}:</b> <i>${obj1}</i>`;
            } else {
                let infoElem1 = document.createElement('div');
                wrap.appendChild(infoElem1);
                infoElem1.innerHTML = `<b>${infoKey}:</b>`;
                //----------------------------2 рівень значень------------------------------
                for (let obj1Key in obj1) {
                    let obj2 = obj1[obj1Key];
                    if (typeof obj2 !== 'object') {
                        let infoElem2 = document.createElement('ul');
                        infoElem1.appendChild(infoElem2);
                        infoElem2.innerHTML = `<b>${obj1Key}:</b> <i>${obj2}</i>`;
                    } else {
                        let infoElem2 = document.createElement('ul');
                        infoElem1.appendChild(infoElem2);
                        infoElem2.innerHTML = `<b>${obj1Key}:</b>`;
                        //----------------------------3 рівень значень------------------------------
                        for (let obj2Key in obj2) {
                            let obj3 = obj2[obj2Key];
                            if (typeof obj3 !== 'object') {
                                let infoElem3 = document.createElement('ul');
                                infoElem2.appendChild(infoElem3);
                                infoElem3.innerHTML = `<b>${obj2Key}:</b> <i>${obj3}</i>`;
                            }
                        }
                    }
                }
            }
        }
    })




