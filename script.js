// Am creat variabilele pentru ingredientele de sus
const buns = document.querySelector('.bread');
const meats = document.querySelector('.meat');
const cheeses = document.querySelector('.cheese');
const salad = document.querySelector('.salad');
const vegetable = document.querySelector('.tomato');
const sauce = document.querySelector('.sauce');
const divLeft = document.querySelector('div.left');
const removeBtn = document.querySelector('button.btn-remove');
const btnPlus = document.querySelectorAll('button.btn-plus');
const summaryUL = document.querySelector('ul.summary');
let selectedProducts = [];
let suma = 0;
let totalWeight = 0;
let selectedProductsImages =[];
const divBurgerImages =document.querySelector('div.burger-images-craft');
const imgBun1 =document.createElement('img');
imgBun1.classList.add('burger-ingredient');
imgBun1.setAttribute('src', 'imgs/bulkatop-removebg-preview.png');
const imgBun2 =document.createElement('img');
imgBun2.setAttribute('src', 'imgs/bulkabotpng-removebg-preview.png');
imgBun2.classList.add('burger-ingredient');
const imgBurgerMeat = document.createElement('img');
imgBurgerMeat.setAttribute('src','imgs/burger_meat.png');
imgBurgerMeat.classList.add('burger-ingredient');
const imgCheeseSlice = document.createElement('img');
imgCheeseSlice.setAttribute('src','imgs/cheese_slice.png');
imgCheeseSlice.classList.add('burger-ingredient');
const imgTomatoSlice = document.createElement('img');
imgTomatoSlice.setAttribute('src', 'imgs/tomato_slice.png');
imgTomatoSlice.classList.add('burger-ingredient');
const imgSaladLeaf = document.createElement('img');
imgSaladLeaf.setAttribute('src', 'imgs/salad_leaf.png');
imgSaladLeaf.classList.add('burger-ingredient');
//Creez un array de obiecte
const ingrediente = [
    {
    name:'Bun1',
    price: 5,
    order: 1,
    weight: 45,
        img : imgBun1

    },
    {
        name:'Meat',
        price: 15,
        order: 5,
        weight: 35,
        img: imgBurgerMeat
     },
    {
        name:'Cheese',
        price:10,
        order: 4,
        weight: 20,
        img : imgCheeseSlice
    },
    {
        name:'Salad',
        price: 5,
        order: 3,
        weight: 15,
        img: imgSaladLeaf
    },
    {
        name:'Tomato',
        price: 5,
        order: 2,
        weight: 10,
        img: imgTomatoSlice
    },
    {
        name: 'Bun2',
        price: 5,
        order: 6,
        weight: 45,
        img: imgBun2

    },
    {
        name: 'Sauce',
        price : 5,
        weight: 15
    },
    {
        name: 'Buns',
        price: 10,
        weight: 90
    }
    ]




//Am creat un eventListner pentru imaginea de sus cu 'Buns'
buns.addEventListener('click', () => {
    //Stergerea elementelor existente pentru a nu crea probleme atunci cind creem alte elemente
    const lastHeading = document.querySelector("h3.title");
    lastHeading.remove();
    const lastUl = document.querySelector('ul.ingredients-list');
    lastUl.remove();
    //Crearea elementelor h3 atribuirea textului si a clasei class-list
    const heading = document.createElement('h3');
    divLeft.append(heading)
    heading.classList.add('title');
    heading.textContent = 'Buns: Choose one of'
    //Crearea listei nenumerotate si atribuirea clasei ingredients-list
    const unorderedList = document.createElement('ul');
    divLeft.append(unorderedList);
    unorderedList.classList.add('ingredients-list');
    //Crearea list itemului si atribuirea lui in unordered list creat anterior
    const listItem = document.createElement('li');
    unorderedList.append(listItem);
    const divListImage = document.createElement('div');
    listItem.append(divListImage);
    divListImage.classList.add('ingredients-list-image')
    const imageForBread = document.createElement('img');
    divListImage.append(imageForBread);
    imageForBread.setAttribute('id','bread1');
    imageForBread.setAttribute('src','imgs/burgher_white.png');
    imageForBread.style.width = '60px';
    const textIngredients = document.createElement('div');
    listItem.append(textIngredients);
    textIngredients.classList.add('text-ingredients');
    const paragraphName = document.createElement('p');
    textIngredients.append(paragraphName);
    paragraphName.textContent = 'Buns';
    const paragraphPrice = document.createElement('p');
    textIngredients.append(paragraphPrice);
    paragraphPrice.textContent = '10 MDl';
    const containerForButton = document.createElement('div');
    listItem.append(containerForButton);
    containerForButton.classList.add('btn-ingredients');
    const button = document.createElement('button');
    containerForButton.append(button);
    button.classList.add('btn-plus');
    button.textContent = '+';
 const obj = ingrediente[7];
button.addEventListener("click", () => {
    selectedProductsImages.push(ingrediente[0],ingrediente[5]);
    console.log(selectedProductsImages);
    selectedProductsImages.sort((a,b) => {
        return a.order - b.order
    }).forEach(item => {
       divBurgerImages.append(item['img']);
    })

    selectedProducts.push(ingrediente[7]);
    let headingSumOfAll = document.querySelector('h2.sum-of-all');
    let paragraphForWeight = document.querySelector('p.sum-of-weight');
    selectedProducts.forEach(item => {
        suma += item.price;
        totalWeight += item.weight;
        headingSumOfAll.textContent =`Suma : ${suma} MDL`;
        paragraphForWeight.textContent =`Weight : ${totalWeight}gr`;
    })
    suma = 0;
    totalWeight = 0;
    let {name,price,weight,order} = obj;
    const listItem = document.createElement('li');
    summaryUL.append(listItem);
    listItem.classList.add('buns');
    const divSumIngedients = document.createElement('div');
    listItem.append(divSumIngedients);
    divSumIngedients.classList.add('sum-ingredients');
    const paragraphSum = document.createElement('p');
    divSumIngedients.append(paragraphSum);
    const firstSpan = document.createElement('span');
    paragraphSum.append(firstSpan);
    firstSpan.classList.add('color-grey');
    firstSpan.textContent = name + ' / ' + weight + 'gr';
    const secondSpan = document.createElement('span');
    paragraphSum.append(secondSpan);
    secondSpan.classList.add('text-right');
    secondSpan.textContent = price + ' MDl';
    const divBtnMinus = document.createElement('div');
    listItem.append(divBtnMinus);
    divBtnMinus.classList.add('btn-minus');
    const removeButton = document.createElement("button");
    divBtnMinus.append(removeButton);
    removeButton.classList.add('btn-remove');
    removeButton.textContent = 'X';
    removeButton.addEventListener('click', () => {
        //Stergerea obiectelor din array si din html
        const imageBulca1 = selectedProductsImages.indexOf(ingrediente[0]);
        const imageBulca2 = selectedProductsImages.indexOf(ingrediente[5]);
        selectedProductsImages.splice(imageBulca1,2);
        selectedProductsImages.splice(imageBulca2,1);

        imgBun1.remove();
        imgBun2.remove();

        //Sortarea arrayului dupa ce au fost sterse obiectele anumite
        selectedProductsImages.sort((a,b) => {
            return a.order - b.order
        })

        const listItemRight = document.querySelector('li.buns');
        listItemRight.remove();
        const sauce = selectedProducts.indexOf(ingrediente[7]);
        selectedProducts.splice(sauce,1);
        let headingSumOfAll = document.querySelector('h2.sum-of-all');
        let paragraphForWeight = document.querySelector('p.sum-of-weight');
        console.log(selectedProducts);
        if (selectedProducts.length > 0) {
            selectedProducts.forEach(item => {
                suma += item.price;
                totalWeight += item.weight;
                headingSumOfAll.textContent = `Suma : ${suma} MDL`;
                paragraphForWeight.textContent = `Weight : ${totalWeight}gr`;

            })
            suma = 0;
            totalWeight = 0;

        } else{
            suma = 0;
            totalWeight = 0;
            headingSumOfAll.textContent = `Suma : ${suma} MDL`;
            paragraphForWeight.textContent = `Weight : ${totalWeight}gr`;
        }
    })
})

} );




meats.addEventListener('click', () => {
    const lastHeading = document.querySelector("h3.title");
    lastHeading.remove();
    const lastUl = document.querySelector('ul.ingredients-list');
    lastUl.remove();
    const heading = document.createElement('h3');
    divLeft.append(heading)
    heading.classList.add('title');
    heading.textContent = 'Meats: Choose one of'
    const unorderedList = document.createElement('ul');
    divLeft.append(unorderedList);
    unorderedList.classList.add('ingredients-list');
    const listItem = document.createElement('li');
    unorderedList.append(listItem);
    const divListImage = document.createElement('div');
    listItem.append(divListImage);
    divListImage.classList.add('ingredients-list-image')
    const imageForBread = document.createElement('img');
    divListImage.append(imageForBread);
    imageForBread.setAttribute('id','meat1');
    imageForBread.setAttribute('src','imgs/burger_meat.png');
    imageForBread.style.width = '60px';
    const textIngredients = document.createElement('div');
    listItem.append(textIngredients);
    textIngredients.classList.add('text-ingredients');
    const paragraphName = document.createElement('p');
    textIngredients.append(paragraphName);
    paragraphName.textContent = 'Meat';
    const paragraphPrice = document.createElement('p');
    textIngredients.append(paragraphPrice);
    paragraphPrice.textContent = '15 MDl';
    const containerForButton = document.createElement('div');
    listItem.append(containerForButton);
    containerForButton.classList.add('btn-ingredients');
    const button = document.createElement('button');
    containerForButton.append(button);
    button.classList.add('btn-plus');
    button.textContent = '+';
    const obj = ingrediente[1];
    button.addEventListener("click", () => {
        selectedProductsImages.push(ingrediente[1]);
        console.log(selectedProductsImages);
        selectedProductsImages.sort((a,b) => {
            return a.order - b.order
        }).forEach(item => {
            divBurgerImages.append(item['img']);
        })

        selectedProducts.push(ingrediente[1]);
        let headingSumOfAll = document.querySelector('h2.sum-of-all');
        let paragraphForWeight = document.querySelector('p.sum-of-weight');
        selectedProducts.forEach(item => {
            suma += item.price;
            totalWeight += item.weight;
            headingSumOfAll.textContent =`Suma : ${suma} MDL`;
            paragraphForWeight.textContent =`Weight : ${totalWeight}gr`;
        })
        suma = 0;
        totalWeight = 0;
        let {name,price,weight,order} = obj;
        const listItem = document.createElement('li');
        summaryUL.append(listItem);
        listItem.classList.add('meat');
        const divSumIngedients = document.createElement('div');
        listItem.append(divSumIngedients);
        divSumIngedients.classList.add('sum-ingredients');
        const paragraphSum = document.createElement('p');
        divSumIngedients.append(paragraphSum);
        const firstSpan = document.createElement('span');
        paragraphSum.append(firstSpan);
        firstSpan.classList.add('color-grey');
        firstSpan.textContent = name + ' / ' + weight + 'gr';
        const secondSpan = document.createElement('span');
        paragraphSum.append(secondSpan);
        secondSpan.classList.add('text-right');
        secondSpan.textContent = price + ' MDl';
        const divBtnMinus = document.createElement('div');
        listItem.append(divBtnMinus);
        divBtnMinus.classList.add('btn-minus');
        const removeButton = document.createElement("button");
        divBtnMinus.append(removeButton);
        removeButton.classList.add('btn-remove');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', () => {
            const imageMeat = selectedProductsImages.indexOf(ingrediente[1]);
            selectedProductsImages.splice(imageMeat,1);
       imgBurgerMeat.remove();

            selectedProductsImages.sort((a,b) => {
                return a.order - b.order
            })
            const listItemRight = document.querySelector('li.meat');
            listItemRight.remove();
            const sauce = selectedProducts.indexOf(ingrediente[1]);
            selectedProducts.splice(sauce,1);
            let headingSumOfAll = document.querySelector('h2.sum-of-all');
            let paragraphForWeight = document.querySelector('p.sum-of-weight');
            if (selectedProducts.length > 0) {
                selectedProducts.forEach(item => {
                    suma += item.price;
                    totalWeight += item.weight;
                    headingSumOfAll.textContent = `Suma : ${suma} MDL`;
                    paragraphForWeight.textContent = `Weight : ${totalWeight}gr`;

                })
                suma = 0;
                totalWeight = 0;
            } else {
                suma = 0;
                totalWeight = 0;
                headingSumOfAll.textContent = `Suma : ${suma} MDL`;
                paragraphForWeight.textContent = `Weight : ${totalWeight}gr`;
            }
        })
    })


})

cheeses.addEventListener('click', () => {
    const lastHeading = document.querySelector("h3.title");
    lastHeading.remove();
    const lastUl = document.querySelector('ul.ingredients-list');
    lastUl.remove();
    const heading = document.createElement('h3');
    divLeft.append(heading)
    heading.classList.add('title');
    heading.textContent = 'Cheeses: Choose one of'
    const unorderedList = document.createElement('ul');
    divLeft.append(unorderedList);
    unorderedList.classList.add('ingredients-list');
    const listItem = document.createElement('li');
    unorderedList.append(listItem);
    const divListImage = document.createElement('div');
    listItem.append(divListImage);
    divListImage.classList.add('ingredients-list-image')
    const imageForBread = document.createElement('img');
    divListImage.append(imageForBread);
    imageForBread.setAttribute('id','cheese1');
    imageForBread.setAttribute('src','imgs/cheese_slice.png');
    imageForBread.style.width = '60px';
    const textIngredients = document.createElement('div');
    listItem.append(textIngredients);
    textIngredients.classList.add('text-ingredients');
    const paragraphName = document.createElement('p');
    textIngredients.append(paragraphName);
    paragraphName.textContent = 'Cheese';
    const paragraphPrice = document.createElement('p');
    textIngredients.append(paragraphPrice);
    paragraphPrice.textContent = '10 MDl';
    const containerForButton = document.createElement('div');
    listItem.append(containerForButton);
    containerForButton.classList.add('btn-ingredients');
    const button = document.createElement('button');
    containerForButton.append(button);
    button.classList.add('btn-plus');
    button.textContent = '+';
    const obj = ingrediente[2];
    button.addEventListener("click", () => {
        selectedProductsImages.push(ingrediente[2]);
        console.log(selectedProductsImages);
        selectedProductsImages.sort((a,b) => {
            return a.order - b.order
        }).forEach(item => {
            divBurgerImages.append(item['img']);
        })
        selectedProducts.push(ingrediente[2]);
        let headingSumOfAll = document.querySelector('h2.sum-of-all');
        let paragraphForWeight = document.querySelector('p.sum-of-weight');
        selectedProducts.forEach(item => {
            suma += item.price;
            totalWeight += item.weight;
            headingSumOfAll.textContent =`Suma : ${suma} MDL`;
            paragraphForWeight.textContent =`Weight : ${totalWeight}gr`;
        })
        suma = 0;
        totalWeight = 0;
        let {name,price,weight,order} = obj;
        const listItem = document.createElement('li');
        summaryUL.append(listItem);
        listItem.classList.add('cheese');
        const divSumIngedients = document.createElement('div');
        listItem.append(divSumIngedients);
        divSumIngedients.classList.add('sum-ingredients');
        const paragraphSum = document.createElement('p');
        divSumIngedients.append(paragraphSum);
        const firstSpan = document.createElement('span');
        paragraphSum.append(firstSpan);
        firstSpan.classList.add('color-grey');
        firstSpan.textContent = name + ' / ' + weight + 'gr';
        const secondSpan = document.createElement('span');
        paragraphSum.append(secondSpan);
        secondSpan.classList.add('text-right');
        secondSpan.textContent = price + ' MDl';
        const divBtnMinus = document.createElement('div');
        listItem.append(divBtnMinus);
        divBtnMinus.classList.add('btn-minus');
        const removeButton = document.createElement("button");
        divBtnMinus.append(removeButton);
        removeButton.classList.add('btn-remove');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', () => {
            //Stergerea ingredientelor
            const cheese = selectedProductsImages.indexOf(ingrediente[2]);

            selectedProductsImages.splice(cheese,1);

            imgCheeseSlice.remove();

            //Sortarea ingredientelor ramase
            selectedProductsImages.sort((a,b) => {
                return a.order - b.order
            })
            const listItemRight = document.querySelector('li.cheese');
            listItemRight.remove();
            const sauce = selectedProducts.indexOf(ingrediente[2]);
            selectedProducts.splice(sauce,1);
            let headingSumOfAll = document.querySelector('h2.sum-of-all');
            let paragraphForWeight = document.querySelector('p.sum-of-weight');
            if (selectedProducts.length > 0) {
                selectedProducts.forEach(item => {
                    suma += item.price;
                    totalWeight += item.weight;
                    headingSumOfAll.textContent = `Suma : ${suma} MDL`;
                    paragraphForWeight.textContent = `Weight : ${totalWeight}gr`;

                })
                suma = 0;
                totalWeight = 0;

            } else{
                suma = 0;
                totalWeight = 0;
                headingSumOfAll.textContent = `Suma : ${suma} MDL`;
                paragraphForWeight.textContent = `Weight : ${totalWeight}gr`;
            }
        })
    })


})

salad.addEventListener('click', () => {
    const lastHeading = document.querySelector("h3.title");
    lastHeading.remove();
    const lastUl = document.querySelector('ul.ingredients-list');
    lastUl.remove();
    const heading = document.createElement('h3');
    divLeft.append(heading)
    heading.classList.add('title');
    heading.textContent = 'Salads: Choose one of'
    const unorderedList = document.createElement('ul');
    divLeft.append(unorderedList);
    unorderedList.classList.add('ingredients-list');
    const listItem = document.createElement('li');
    unorderedList.append(listItem);
    const divListImage = document.createElement('div');
    listItem.append(divListImage);
    divListImage.classList.add('ingredients-list-image')
    const imageForBread = document.createElement('img');
    divListImage.append(imageForBread);
    imageForBread.setAttribute('id','salad1');
    imageForBread.setAttribute('src','imgs/salad_leaf.png');
    imageForBread.style.width = '60px';
    const textIngredients = document.createElement('div');
    listItem.append(textIngredients);
    textIngredients.classList.add('text-ingredients');
    const paragraphName = document.createElement('p');
    textIngredients.append(paragraphName);
    paragraphName.textContent = 'Salad';
    const paragraphPrice = document.createElement('p');
    textIngredients.append(paragraphPrice);
    paragraphPrice.textContent = '5 MDl';
    const containerForButton = document.createElement('div');
    listItem.append(containerForButton);
    containerForButton.classList.add('btn-ingredients');
    const button = document.createElement('button');
    containerForButton.append(button);
    button.classList.add('btn-plus');
    button.textContent = '+';
    const obj = ingrediente[3];
    button.addEventListener("click", () => {
        selectedProductsImages.push(ingrediente[3]);
        console.log(selectedProductsImages);
        selectedProductsImages.sort((a,b) => {
            return a.order - b.order
        }).forEach(item => {
            divBurgerImages.append(item['img']);
        })
        selectedProducts.push(ingrediente[3]);
        let headingSumOfAll = document.querySelector('h2.sum-of-all');
        let paragraphForWeight = document.querySelector('p.sum-of-weight');
        selectedProducts.forEach(item => {
            suma += item.price;
            totalWeight += item.weight;
            headingSumOfAll.textContent =`Suma : ${suma} MDL`;
            paragraphForWeight.textContent =`Weight : ${totalWeight}gr`;
        })
        suma = 0;
        totalWeight = 0;
        let {name,price,weight,order} = obj;
        const listItem = document.createElement('li');
        summaryUL.append(listItem);
        listItem.classList.add('salad');
        const divSumIngedients = document.createElement('div');
        listItem.append(divSumIngedients);
        divSumIngedients.classList.add('sum-ingredients');
        const paragraphSum = document.createElement('p');
        divSumIngedients.append(paragraphSum);
        const firstSpan = document.createElement('span');
        paragraphSum.append(firstSpan);
        firstSpan.classList.add('color-grey');
        firstSpan.textContent = name + ' / ' + weight + 'gr';
        const secondSpan = document.createElement('span');
        paragraphSum.append(secondSpan);
        secondSpan.classList.add('text-right');
        secondSpan.textContent = price + ' MDl';
        const divBtnMinus = document.createElement('div');
        listItem.append(divBtnMinus);
        divBtnMinus.classList.add('btn-minus');
        const removeButton = document.createElement("button");
        divBtnMinus.append(removeButton);
        removeButton.classList.add('btn-remove');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', () => {
            //Stergerea ingredientelor
            const salads = selectedProductsImages.indexOf(ingrediente[3]);

            selectedProductsImages.splice(salads,1);

            imgSaladLeaf.remove();

            //Sortarea ingredientelor ramase
            selectedProductsImages.sort((a,b) => {
                return a.order - b.order
            })
            const listItemRight = document.querySelector('li.salad');
            listItemRight.remove();
            const sauce = selectedProducts.indexOf(ingrediente[3]);
            selectedProducts.splice(sauce,1);
            let headingSumOfAll = document.querySelector('h2.sum-of-all');
            let paragraphForWeight = document.querySelector('p.sum-of-weight');
            if (selectedProducts.length > 0) {
                selectedProducts.forEach(item => {
                    suma += item.price;
                    totalWeight += item.weight;
                    headingSumOfAll.textContent = `Suma : ${suma} MDL`;
                    paragraphForWeight.textContent = `Weight : ${totalWeight}gr`;

                })
                suma = 0;
                totalWeight = 0;

            } else{
                suma = 0;
                totalWeight = 0;
                headingSumOfAll.textContent = `Suma : ${suma} MDL`;
                paragraphForWeight.textContent = `Weight : ${totalWeight}gr`;
            }
        })
    })

})

vegetable.addEventListener('click', () => {
    const lastHeading = document.querySelector("h3.title");
    lastHeading.remove();
    const lastUl = document.querySelector('ul.ingredients-list');
    lastUl.remove();
    const heading = document.createElement('h3');
    divLeft.append(heading)
    heading.classList.add('title');
    heading.textContent = 'Vegetables: Choose one of'
    const unorderedList = document.createElement('ul');
    divLeft.append(unorderedList);
    unorderedList.classList.add('ingredients-list');
    const listItem = document.createElement('li');
    unorderedList.append(listItem);
    const divListImage = document.createElement('div');
    listItem.append(divListImage);
    divListImage.classList.add('ingredients-list-image');
    const imageForBread = document.createElement('img');
    divListImage.append(imageForBread);
    imageForBread.setAttribute('id','tomato1');
    imageForBread.setAttribute('src','imgs/tomato_slice.png');
    imageForBread.style.width = '60px';
    const textIngredients = document.createElement('div');
    listItem.append(textIngredients);
    textIngredients.classList.add('text-ingredients');
    const paragraphName = document.createElement('p');
    textIngredients.append(paragraphName);
    paragraphName.textContent = 'tomato';
    const paragraphPrice = document.createElement('p');
    textIngredients.append(paragraphPrice);
    paragraphPrice.textContent = '5 MDl';
    const containerForButton = document.createElement('div');
    listItem.append(containerForButton);
    containerForButton.classList.add('btn-ingredients');
    const button = document.createElement('button');
    containerForButton.append(button);
    button.classList.add('btn-plus');
    button.textContent = '+';
    const obj = ingrediente[4];
    button.addEventListener("click", () => {
        selectedProductsImages.push(ingrediente[4]);
        console.log(selectedProductsImages);
        selectedProductsImages.sort((a,b) => {
            return a.order - b.order
        }).forEach(item => {
            divBurgerImages.append(item['img']);
        })
        selectedProducts.push(ingrediente[4]);
        let headingSumOfAll = document.querySelector('h2.sum-of-all');
        let paragraphForWeight = document.querySelector('p.sum-of-weight');
        selectedProducts.forEach(item => {
            suma += item.price;
            totalWeight += item.weight;
            headingSumOfAll.textContent =`Suma : ${suma} MDL`;
            paragraphForWeight.textContent =`Weight : ${totalWeight}gr`;
        })
        suma = 0;
        totalWeight = 0;
        let {name,price,weight,order} = obj;
        const listItem = document.createElement('li');
        summaryUL.append(listItem);
        listItem.classList.add('tomato');
        const divSumIngedients = document.createElement('div');
        listItem.append(divSumIngedients);
        divSumIngedients.classList.add('sum-ingredients');
        const paragraphSum = document.createElement('p');
        divSumIngedients.append(paragraphSum);
        const firstSpan = document.createElement('span');
        paragraphSum.append(firstSpan);
        firstSpan.classList.add('color-grey');
        firstSpan.textContent = name + ' / ' + weight + 'gr';
        const secondSpan = document.createElement('span');
        paragraphSum.append(secondSpan);
        secondSpan.classList.add('text-right');
        secondSpan.textContent = price + ' MDl';
        const divBtnMinus = document.createElement('div');
        listItem.append(divBtnMinus);
        divBtnMinus.classList.add('btn-minus');
        const removeButton = document.createElement("button");
        divBtnMinus.append(removeButton);
        removeButton.classList.add('btn-remove');
        removeButton.textContent = 'X';

        removeButton.addEventListener('click', () => {
            const tomato = selectedProductsImages.indexOf(ingrediente[4]);

            selectedProductsImages.splice(tomato,1);

            imgTomatoSlice.remove();

            //Sortarea ingredientelor ramase
            selectedProductsImages.sort((a,b) => {
                return a.order - b.order
            })
            const listItemRight = document.querySelector('li.tomato');
            listItemRight.remove();
            const sauce = selectedProducts.indexOf(ingrediente[4]);
            selectedProducts.splice(sauce,1);
            let headingSumOfAll = document.querySelector('h2.sum-of-all');
            let paragraphForWeight = document.querySelector('p.sum-of-weight');
            if (selectedProducts.length > 0) {
                selectedProducts.forEach(item => {
                    suma += item.price;
                    totalWeight += item.weight;
                    headingSumOfAll.textContent = `Suma : ${suma} MDL`;
                    paragraphForWeight.textContent = `Weight : ${totalWeight}gr`;

                })
                suma = 0;
                totalWeight = 0;

            } else{
                suma = 0;
                totalWeight = 0;
                headingSumOfAll.textContent = `Suma : ${suma} MDL`;
                paragraphForWeight.textContent = `Weight : ${totalWeight}gr`;
            }
        })

})

sauce.addEventListener('click', () => {
    const lastHeading = document.querySelector("h3.title");
    lastHeading.remove();
    const lastUl = document.querySelector('ul.ingredients-list');
    lastUl.remove();
    const heading = document.createElement('h3');
    divLeft.append(heading)
    heading.classList.add('title');
    heading.textContent = 'Sauce: Choose one of'
    const unorderedList = document.createElement('ul');
    divLeft.append(unorderedList);
    unorderedList.classList.add('ingredients-list');
    const listItem = document.createElement('li');
    unorderedList.append(listItem);
    const divListImage = document.createElement('div');
    listItem.append(divListImage);
    divListImage.classList.add('ingredients-list-image')
    const imageForBread = document.createElement('img');
    divListImage.append(imageForBread);
    imageForBread.setAttribute('id','sauce1');
    imageForBread.setAttribute('src','imgs/sauce.png');
    imageForBread.style.width = '60px';
    const textIngredients = document.createElement('div');
    listItem.append(textIngredients);
    textIngredients.classList.add('text-ingredients');
    const paragraphName = document.createElement('p');
    textIngredients.append(paragraphName);
    paragraphName.textContent = 'Sauce';
    const paragraphPrice = document.createElement('p');
    textIngredients.append(paragraphPrice);
    paragraphPrice.textContent = '5 MDl';
    const containerForButton = document.createElement('div');
    listItem.append(containerForButton);
    containerForButton.classList.add('btn-ingredients');
    const button = document.createElement('button');
    containerForButton.append(button);
    button.classList.add('btn-plus');
    button.textContent = '+';
    const obj = ingrediente[6];
    button.addEventListener("click", () => {
        selectedProducts.push(ingrediente[6]);
        let headingSumOfAll = document.querySelector('h2.sum-of-all');
        let paragraphForWeight = document.querySelector('p.sum-of-weight');
        selectedProducts.forEach(item => {
            suma += item.price;
            totalWeight += item.weight;
            headingSumOfAll.textContent =`Suma : ${suma} MDL`;
            paragraphForWeight.textContent =`Weight : ${totalWeight}gr`;
        })
        suma = 0;
        totalWeight = 0;
        let {name,price,weight,order} = obj;
        const listItem = document.createElement('li');
        summaryUL.append(listItem);
        const divSumIngedients = document.createElement('div');
        listItem.append(divSumIngedients);
        listItem.classList.add('sauce');
        divSumIngedients.classList.add('sum-ingredients');
        const paragraphSum = document.createElement('p');
        divSumIngedients.append(paragraphSum);
        const firstSpan = document.createElement('span');
        paragraphSum.append(firstSpan);
        firstSpan.classList.add('color-grey');
        firstSpan.textContent = name + ' / ' + weight + 'gr';
        const secondSpan = document.createElement('span');
        paragraphSum.append(secondSpan);
        secondSpan.classList.add('text-right');
        secondSpan.textContent = price + ' MDl';
        const divBtnMinus = document.createElement('div');
        listItem.append(divBtnMinus);
        divBtnMinus.classList.add('btn-minus');
        const removeButton = document.createElement("button");
        divBtnMinus.append(removeButton);
        removeButton.classList.add('btn-remove');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', () => {
            const listItemRight = document.querySelector('li.sauce');
            listItemRight.remove();
   const sauce = selectedProducts.indexOf(ingrediente[6]);
            selectedProducts.splice(sauce,1);
            let headingSumOfAll = document.querySelector('h2.sum-of-all');
            let paragraphForWeight = document.querySelector('p.sum-of-weight');
            if (selectedProducts.length > 0) {
                selectedProducts.forEach(item => {
                    suma += item.price;
                    totalWeight += item.weight;
                    headingSumOfAll.textContent = `Suma : ${suma} MDL`;
                    paragraphForWeight.textContent = `Weight : ${totalWeight}gr`;

                })
                suma = 0;
                totalWeight = 0;

            } else{
                suma = 0;
                totalWeight = 0;
                headingSumOfAll.textContent = `Suma : ${suma} MDL`;
                paragraphForWeight.textContent = `Weight : ${totalWeight}gr`;
            }
        })

})})})


