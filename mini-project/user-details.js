let qtyOfPosts = 5;
let slcFrom = 0;
let slcTo = qtyOfPosts;

let wrapForUser = document.createElement('section');
document.body.appendChild(wrapForUser);
wrapForUser.classList.add('wrapForUser', 'lora');

let wrapForPosts = document.createElement('section');
wrapForPosts.id = 'wrapForPosts';
wrapForPosts.classList.add('lora');
document.body.appendChild(wrapForPosts);

getInfoAboutUserAndPosts(slcFrom, slcTo)

let divForButtonsPrevAndNext = document.createElement('div');
divForButtonsPrevAndNext.id = 'buttons';
let buttonPrev = document.createElement('button');
buttonPrev.classList.add('prevNext');
let buttonNext = document.createElement('button');
buttonNext.classList.add('prevNext');
divForButtonsPrevAndNext.append(buttonPrev, buttonNext);
buttonNext.innerText = 'Next';
buttonPrev.innerText = 'Previous';

let buttonFlag = document.createElement('button');
buttonFlag.id = 'buttonFlag';
document.body.appendChild(buttonFlag);

buttonNext.addEventListener('click', function () {
    slcFrom += qtyOfPosts;
    slcTo += qtyOfPosts;
    wrapForUser.innerHTML = '';
    wrapForPosts.innerHTML = '';
    getInfoAboutUserAndPosts(slcFrom, slcTo);
})
buttonPrev.addEventListener('click', function () {
    slcFrom -= qtyOfPosts;
    slcTo -= qtyOfPosts;
    wrapForUser.innerHTML = '';
    wrapForPosts.innerHTML = '';
    getInfoAboutUserAndPosts(slcFrom, slcTo);
})

function getInfoAboutUserAndPosts(sliceFrom, sliceTo) {
    let linkID_url = location.search.substring(1);
    let linkForUser = 'https://jsonplaceholder.typicode.com/users/XXX';
    let linkUser = linkForUser.replace('XXX', String(linkID_url));
    let linkForPosts = linkUser + '/posts';

    Promise.all([
        fetch(linkUser).then(value => value.json()),
        fetch(linkForPosts).then(value => value.json())])
        .then(value => {
            let user = value[0];
            let posts = value[1];
            // --------------------------------------User-----------------------------------------
            for (let infoKey in user) {
                let obj1 = user[infoKey];
                if (typeof obj1 !== 'object') {
                    let infoElem1 = document.createElement('div');
                    wrapForUser.appendChild(infoElem1);
                    infoElem1.innerHTML = `<b>${infoKey}:</b> <i>${obj1}</i>`;
                } else {
                    let infoElem1 = document.createElement('div');
                    wrapForUser.appendChild(infoElem1);
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
            // ---------------------------Posts-------------------------------------------
            wrapForPosts.style.display = 'none';
            let divForPost = document.createElement('div');
            divForPost.classList.add('divForPost');
            wrapForPosts.appendChild(divForPost);
            // --------------------------slice----------------------------------------
            let slicePosts = posts.slice(sliceFrom, sliceTo);
            sliceFrom <= 0 ? buttonPrev.setAttribute('disabled', 'true') : buttonPrev.removeAttribute('disabled');
            sliceTo >= posts.length ? buttonNext.setAttribute('disabled', 'true') : buttonNext.removeAttribute('disabled');

            for (const post of slicePosts) {
                console.log(post);
                let titlePostP = document.createElement('p');
                let {id: postId, title, userId, body:postBody} = post;
                titlePostP.innerText = title;
                titlePostP.classList.add('postTitle');
                divForPost.appendChild(titlePostP);

                titlePostP.addEventListener('click', function () {
                    window.location.href = `post-details.html`;
                    localStorage.setItem('postId', postId);
                    localStorage.setItem('title', title);
                    localStorage.setItem('postBody', postBody);
                    localStorage.setItem('userId', userId);
                });
                // -------------------------або за допомогою кнопки---------------------------------
                // let btnComments = document.createElement('button');
                // btnComments.classList.add('btnComments');
                // titlePostP.appendChild(btnComments);
                // btnComments.innerText = 'Read Comments';
                // //     -------------------------------Waiting For A Click-------------------------
                // btnComments.addEventListener('click', function () {
                //     window.location.href = `post-details.html`;
                // });
            }
            // -----------------------------------Button For Posts------------------------------
            if (buttonFlag.innerText === 'Hide All Posts') {
                wrapForPosts.style.display = 'flex';
                wrapForPosts.appendChild(divForButtonsPrevAndNext);
            } else {
                let flag = 0;
                wrapForPosts.appendChild(divForButtonsPrevAndNext);
                buttonFlag.innerText = 'Show All Posts';
                buttonFlag.addEventListener('click', function () {
                    if (flag === 0) {
                        flag = 1;
                        buttonFlag.innerText = 'Hide All Posts';
                        wrapForPosts.style.display = 'flex';
                    } else {
                        flag = 0;
                        buttonFlag.innerText = 'Show All Posts';
                        wrapForPosts.style.display = 'none';
                    }
                })
            }
        })
}


