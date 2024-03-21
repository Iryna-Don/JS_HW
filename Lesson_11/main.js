// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts?limit=0')
    .then(res => res.json())
    .then(({carts}) => {
        // -------------------------------Cart and User Info--------------------------------------
        // -----------------------------Wraps For Info-------------------------------------
        let cartsSection = document.createElement('section');
        document.body.appendChild(cartsSection);
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

            for (let {id, title, price, quantity, thumbnail, discountPercentage, discountedPrice, total} of products) {//cart
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

// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes?limit=0')
    .then(res => res.json())
    .then(({recipes}) => {
        // --------------------------------Wrap---------------------------------------
        let wrapForRecipes = document.createElement('section');
        document.body.appendChild(wrapForRecipes);

        //-----------------------------------Recipes---------------------------------------
        for (let {
            userId,
            rating,
            reviewCount,
            id,
            name,
            image,
            mealType,
            cuisine,
            difficulty,
            cookTimeMinutes,
            prepTimeMinutes,
            caloriesPerServing,
            servings,
            ingredients,
            instructions,
            tags
        } of recipes) {
            let wrapRecipe = document.createElement('div');
            wrapRecipe.classList.add('cardRecipe');
            wrapForRecipes.appendChild(wrapRecipe);


            let blockInfoRecipe = document.createElement('div');
            blockInfoRecipe.id = 'blockInfoRecipe';
            let blockInfoUser = document.createElement('div');
            blockInfoUser.id = 'blockInfoUser';
            let blockIngredients = document.createElement('ul');
            let blockInstructions = document.createElement('ol');
            let blockTags = document.createElement('div');

            wrapRecipe.append(blockInfoUser, blockInfoRecipe, blockIngredients, blockInstructions, blockTags);

            // -----------------------------------------------------------------------------------

            let userId_span = document.createElement('span');
            userId_span.innerText = `User Id: ${userId}`;

            let rating_span = document.createElement('span');
            rating_span.innerText = `Rating: ${rating}`;

            let reviewCount_span = document.createElement('span');
            reviewCount_span.innerText = `Review Count: ${reviewCount}`;

            blockInfoUser.append(userId_span, rating_span, reviewCount_span);


            let recipeId = document.createElement('p');
            recipeId.innerText = `Recipe Id: ${id}`;

            let recipeName = document.createElement('h2');
            recipeName.innerText = name;

            let imageRecipe = document.createElement('img');
            imageRecipe.src = image;
            // ---------------------------------------------------------------------------------------
            let blockMealType = document.createElement('ul');
            blockMealType.classList.add('blockMealType');
            for (let type of mealType) {
                let mealType = document.createElement('li');
                blockMealType.appendChild(mealType);
                mealType.innerText = type;
            }

            let spanDiv = document.createElement('div')
            spanDiv.id = 'spanDiv';

            let cuisine_p = document.createElement('p');
            cuisine_p.innerText = `Cuisine: ${cuisine}`;

            let difficulty_p = document.createElement('p');
            difficulty_p.innerText = `Difficulty: ${difficulty}`;

            let cookTimeMinutes_p = document.createElement('p');
            cookTimeMinutes_p.innerText = `Cook Time Minutes: ${cookTimeMinutes} min`;

            let prepTimeMinutes_p = document.createElement('p');
            prepTimeMinutes_p.innerText = `Prep Time Minutes: ${prepTimeMinutes} min`;

            let caloriesPerServing_p = document.createElement('p');
            caloriesPerServing_p.innerText = `Calories Per Serving: ${caloriesPerServing} kcal`;

            let servings_p = document.createElement('p');
            servings_p.innerText = `Servings: ${servings}`;


            blockInfoRecipe.append(recipeId, recipeName, imageRecipe, blockMealType, spanDiv)
            spanDiv.append(cuisine_p, difficulty_p, cookTimeMinutes_p, prepTimeMinutes_p, caloriesPerServing_p, servings_p)


            let titleIngredients = document.createElement('h3');
            blockIngredients.appendChild(titleIngredients);
            titleIngredients.innerText = 'Ingredients:'

            for (let ingredient of ingredients) {
                let ingredients = document.createElement('li');
                blockIngredients.appendChild(ingredients);
                ingredients.innerText = ingredient;
            }

            let titleInstructions = document.createElement('h3');
            blockInstructions.appendChild(titleInstructions);
            titleInstructions.innerText = 'Instructions:'

            for (let instruction of instructions) {
                let instructions = document.createElement('li');
                blockInstructions.appendChild(instructions);
                instructions.innerText = instruction;
            }
            let tagTitle = document.createElement('h4');
            blockTags.appendChild(tagTitle);
            tagTitle.innerText = 'Tags:'
            for (let tag of tags) {
                let tags = document.createElement('span');
                blockTags.appendChild(tags);
                tags.innerText = tag;
            }
        }
    });
// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX
//     (замість ХХХ - айді юзера) при кліку на посилання перехід на відповідну сторінку,
//     на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX
// де ХХХ - айді користувача)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((users) => {
        console.log(users)
        let wrapUsers = document.createElement('section');
        document.body.appendChild(wrapUsers);
        wrapUsers.id = 'wrapUsers';
        //--------Те, що закоментовано - формувала можливість побачити на очі лінку----------
        // let linkID = '';
        for (let {id, name} of users) {
            let cardOfUser = document.createElement('div');
            cardOfUser.classList.add('cardOfUser');
            wrapUsers.appendChild(cardOfUser);
            // function creatALinkWithId() {
            //     let link = 'href = user-details.html?id=XXX';
            //     linkID = link.replace('XXX', String(id));
            //     return linkID;
            // }
            let userInfo = document.createElement('p');
            userInfo.innerText = `User ID = #${id}  User name = ${name}`;
            let aUser = document.createElement('a');
            cardOfUser.append(userInfo, aUser);
            // creatALinkWithId();


            // // ----------------------передаю через <a href> URL дані на іншу сторінку----------------------
            // aUser.href = `user-details.html?${id}`;
            // aUser.innerText = `Get Full Info about ${name}`;
            // // aUser.innerText = linkID;


            // //-------------те ж саме з <button> window.location.href ---------------------
            // let infoUserButton = document.createElement('button')
            // infoUserButton.innerText = 'Get full info';
            // cardOfUser.appendChild(infoUserButton);
            // infoUserButton.addEventListener('click',function () {
            //     window.location.href=`user-details.html?${id}`;
            // });


            // // ----------------------передаю через localStorage дані на іншу сторінку----------------------
            // aUser.href = `user-details.html`;
            // aUser.innerText = `Get Full Info about ${name}`;
            // aUser.addEventListener('click', function () {
            //     localStorage.setItem('userId', `${id}`);
            // })
            // cardOfUser.append(userInfo, aUser)


            // -------------------------передаю дані через form  <input type="submit">--------------------
            let form = document.createElement('form');
            cardOfUser.appendChild(form);
            let inputId = document.createElement('input');
            let inputSubmit = document.createElement('input');
            //----------name та value обов'язкові, прописуються в URL через & парами name:value----------
            inputId.name = 'textInput';
            inputId.type = 'text';
            inputId.value = `${id}`;
            inputId.style.display = 'none'
            inputSubmit.name='submitInput';
            inputSubmit.type = 'submit';
            inputSubmit.value = 'Click For Full Info';
            form.action = 'user-details.html';
            form.method = 'GET';
            form.append(inputId, inputSubmit);
        }
    })






