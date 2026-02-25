// //  Задание 3: Создание функции "температура воздуха в Иркутске".
const showTemperature = (city, temperature) => {
console.log (`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
};

showTemperature('Иркутск', '-25');

// // Задание 4: Создание функции сравнения.

const LIGHT_SPEED = 299792;

const comparisonSpeed = (speed) => {
  if (LIGHT_SPEED > speed) {
    console.log('Субсветовая скорость');
  } else if (LIGHT_SPEED === speed) {
    console.log('Скорость света');
  } else {
    console.log('Сверхсветовая скорость');
  }
};

comparisonSpeed (2919222);

// // Задание 5: Создание функции подсчета.

const product = 'Велосипед';
let price = 68346;

const buyProduct = (finance ) => {
  if (finance >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${price - finance}. Пополните баланс.`);
  }
};

buyProduct(700000);

// // Задание 6: Создание своей функции.

let bank = 900;

const shoppingGrocery = (milk = 100, shawarma = 50, juice = 300) => {
  if (bank > milk + shawarma + juice) {
    console.log(`Ваша сдача составляет ${bank-(milk + shawarma + juice)} рублей. Спасибо за покупку!`);
  } else if (bank === milk + shawarma + juice) {
    console.log('Спасибо за покупку');
  } else {
    console.log(`Недостаточно средств в размере ${(milk + shawarma + juice)- bank}. Необходимо пополнить баланс `);
  }
};

shoppingGrocery();

// // Задание 7: Создание переменной.

let footballClub = "CSKA";
const G = 9.81; 
let climate = "cold";

