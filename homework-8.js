import { productCards } from "./cards.js";
 
// 4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const productDiscription = productCards.reduce((acc,productCard) => {
  acc.push({[productCard.title]: productCard.description});
  return acc;
}, []);

//  Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить? 
// От 1 до 5" и в зависимости от результата - будет выводить введенное количество. 
// Должна быть защита от ввода других значений (проверка if).


function getCardsCount() {
  const count = +prompt("Сколько карточек показать? От 1 до 5)");
  if (count >= 1 && count <= 5) {
    return count;
  };
    alert("Пожалуйста, введите число именно от 1 до 5");
    return getCardsCount();
};

  const productCardWrappert = document.querySelector ('.product-card-wrapper');
  const productCardTemplate = document.querySelector('#product-card-template');
  
function renderCards(productsArray) {
  productsArray.forEach((productCard) => {
    const productCardClone = productCardTemplate.content.cloneNode(true);
    productCardClone.querySelector('.product-card__subtitle').textContent = productCard.title;
    productCardClone.querySelector('.product-card__normal-skin').textContent = productCard.normalSkin;
    productCardClone.querySelector('.product-card__descr').textContent = productCard.description;
    productCardClone.querySelector('.product-card__price').textContent = productCard.price + " ₽";
    productCardClone.querySelector('.product-card__img').src = `images/${productCard.image}.png`;
    productCardClone.querySelector('.product-card__img').alt = productCard.image;
    productCard.ingredients.forEach(ingredient => {
      const li = document.createElement('li');
      li.classList.add('product-card__item');
      li.textContent = ingredient;
      productCardClone.querySelector('.product-card__composition').appendChild(li); 
    });
    productCardWrappert.appendChild(productCardClone);
  });
};

window.addEventListener('load', () => {
  const selectionCards = productCards.splice(0, getCardsCount());
  renderCards(selectionCards);
});
