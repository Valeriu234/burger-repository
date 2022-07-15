// Am creat variabilele pentru ingredientele de sus
const buns = document.querySelector('.bread');
const meats = document.querySelector('.meat');
const cheeses = document.querySelector('.cheese');
const salad = document.querySelector('.salad');
const vegetable = document.querySelector('.tomato');
const sauce = document.querySelector('.sauce');
const divLeft = document.querySelector('div.left');


buns.addEventListener('click', (ev) => {
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

})

