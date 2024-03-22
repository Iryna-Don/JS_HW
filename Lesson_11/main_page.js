// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

let lim = 3;
let skp = 0;

// // ------------------------------buttons prev and next------------------------------------------
let prev = document.createElement('button');
prev.innerText = `prev ${lim}`;
let next = document.createElement('button');
next.innerText = `next ${lim}`;
document.body.append(prev, next);
prev.setAttribute('disabled', 'false')
getInfo(lim, skp);
let cartsSection = document.createElement('section');
document.body.appendChild(cartsSection);


// ---------------------------------------click-------------------------------------------
next.addEventListener("click", function () {
    skp += lim;

    getInfo(lim, skp);
})
prev.addEventListener("click", function () {
    skp -= lim;
    getInfo(lim, skp);
})
// // ============================
// // ============================


function getInfo(limit, skip) {
    let url = new URL('https://dummyjson.com/carts')
    url.searchParams.set('limit', limit);
    url.searchParams.set('skip', skip);

    fetch(url)
        .then(res => res.json())
        .then(allCarts => {
            cartsSection.innerHTML = '';
            let {carts} = allCarts;
            let {total: lengthOfList} = allCarts;

            // // -----------------------------------------length--------------------------------------
            skip < lengthOfList - limit ? next.disabled = false : next.disabled = true;
            skip <= 0 ? prev.disabled = true : prev.disabled = false;
            // ---------------------------------------------------------------------------------------------


            for (let {discountedTotal, id, total, totalProducts, totalQuantity, userId, products} of carts) {
                let cartDiv = document.createElement('div');
                cartsSection.appendChild(cartDiv);
                cartDiv.classList.add('card');

                let wrapForInfoCart = document.createElement('div');
                cartDiv.appendChild(wrapForInfoCart);
                wrapForInfoCart.classList.add('infoCart');
                // --------------------------Info----------------------------------------
                let discountedTotal_p = document.createElement('p');
                discountedTotal_p.innerText = `Discounted Total: ${discountedTotal}€`;

                let id_p = document.createElement('p');
                id_p.innerText = `id: ${id}`;

                let total_p = document.createElement('p');
                total_p.innerText = `Total: ${total}€`;

                let totalProducts_p = document.createElement('p');
                totalProducts_p.innerText = `Total Products: ${totalProducts}`;

                let totalQuantity_p = document.createElement('p');
                totalQuantity_p.innerText = `Total Quantity: ${totalQuantity} pcs`;

                let userId_p = document.createElement('p');
                userId_p.innerText = `userId: ${userId}`;
                wrapForInfoCart.append(userId_p, id_p, totalProducts_p, totalQuantity_p, total_p, discountedTotal_p)

                // --------------------------------Products in Cart-------------------------------
                // ---------------------------------Wraps-------------------------------------------
                let wrapForProducts = document.createElement('div');
                wrapForProducts.classList.add('listOfProducts');
                cartDiv.appendChild(wrapForProducts);

                for (let {
                    id,
                    title,
                    price,
                    quantity,
                    thumbnail,
                    discountPercentage,
                    discountedPrice,
                    total
                } of products) {//cart
                    let wrapOfEachProduct = document.createElement('div');
                    wrapForProducts.appendChild(wrapOfEachProduct);
                    wrapOfEachProduct.classList.add('wrapOfEachProduct');
                    // ------------------------------Products----------------------------------------------
                    let productId = document.createElement('p');
                    productId.innerText = `Article №${id}`;

                    let productTitle = document.createElement('h2');
                    productTitle.innerText = `${title}`;

                    let productPrice = document.createElement('p');
                    productPrice.innerText = `Price: ${price}€`;

                    let productQuantity = document.createElement('p');
                    productQuantity.innerText = `Quantity: ${quantity} pcs`;

                    let productThumbnail = document.createElement('img');
                    productThumbnail.src = `${thumbnail}`;

                    let productDiscountPercentage = document.createElement('p');
                    productDiscountPercentage.innerText = `Discount Percentage: ${discountPercentage}%`;

                    let productDiscountedPrice = document.createElement('p');
                    productDiscountedPrice.innerText = `Discounted Price: ${discountedPrice}€`;

                    let productTotal = document.createElement('p');
                    productTotal.innerText = `Total: ${total}€`;

                    wrapOfEachProduct.append(productId, productTitle, productThumbnail, productPrice, productQuantity, productTotal, productDiscountPercentage, productDiscountedPrice)
                }

            }

        });

}
// дослідження структури body
function explorer(htmlElement) {
    let children = htmlElement.children;
    console.log(htmlElement)
    if (children.length !== 0) {
        for (const child of children) {
            explorer(child);
        }
    }
}

explorer(document.body);








