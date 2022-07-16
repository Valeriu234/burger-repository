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

//Creez un array de obiecte

const ingrediente = [
    {
    name:'Bun1',
    price: 5,
    order: 1,
    weight: 45
    },
    {
        name:'Meat',
        price: 15,
        order: 5,
        weight: 35
     },
    {
        name:'Cheese',
        price:10,
        order: 4,
        weight: 20
    },
    {
        name:'Salad',
        price: 5,
        order: 3,
        weight: 15
    },
    {
        name:'Tomato',
        price: 5,
        order: 2,
        weight: 10
    },
    {
        name: 'Bun2',
        price: 5,
        order: 6,
        weight: 45
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
    const heading = document.createElement('h3');
    divLeft.append(heading)
    heading.classList.add('title');
    heading.textContent = 'Buns: Choose one of'
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
        const listItemRight = document.querySelector('li.buns');
        listItemRight.remove();
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
            const listItemRight = document.querySelector('li.meat');
            listItemRight.remove();
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
            const listItemRight = document.querySelector('li.cheese');
            listItemRight.remove();
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
            const listItemRight = document.querySelector('li.salad');
            listItemRight.remove();
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
            const listItemRight = document.querySelector('li.tomato');
            listItemRight.remove();
        })
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
        })
    })

})


