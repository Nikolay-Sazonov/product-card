//  Задание 3: Создание функции "температура воздуха в Иркутске".
const show = (city, temperature) => {
console.log (`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`)
};

show('Иркутск', '-25');

// Задание 4: Создание функции сравнения.
const LIGHT_SPEED = 299792;
const speed = 2919222;

if (LIGHT_SPEED > speed){
  console.log('Субсветовая скорость')
} else if (LIGHT_SPEED === speed){
  console.log('Скорость света')
}else{
  console.log('Сверхсветовая скорость')
};

// Задание 5: Создание функции подсчета.
const product = 'Велосипед';
let price = 68346;

const purchase = (finance ) => {
 if (finance >= price){
  console.log(`${product} приобретён. Спасибо за покупку!`)
 }else{
   console.log(`Вам не хватает ${price - finance}. Пополните баланс.`)
 }
}

purchase(700000);

// Задание 6: Создание своей функции.
let bank = 900;

const shopping = (milk = 100, shawarma = 50, juice = 300) => {
  if (bank > milk + shawarma + juice){
    console.log(`Ваша сдача составляет ${bank-(milk + shawarma + juice)} рублей. Спасибо за покупку!`)
  } else if (bank === milk + shawarma + juice){
    console.log('Спасибо за покупку')
  }else{
    console.log(`Недостаточно средств в размере ${(milk + shawarma + juice)- bank}. Необходимо пополнить баланс `)
  }
}

shopping();

// Задание 7: Создание переменной.

let footballClub = "CSKA";
const G = 9.81; 
let climate = "cold"

console.log(footballClub);
console.log(G);
console.log(climate);
