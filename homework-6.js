// Задание 3: Создание объекта с персональными данными.
const personalData = {
  name: "Николай",
  surname: "Сазонов",
  adg: 26,
  mail:"koly-sazon@yandex.ru",
  job: "ГСП-ремонт, вата",
  profession: "Инженер по КИПиА",
  country: "Россия",
  city:"Иркутск",
  maritalStatus:"Женат, есть ребенок"
};

console.log(personalData);

// Задание 4: Создание объекта с персональными данными..

const infomationCar = {
  brand: "Jetour",
  model:"Dashing",
  colore:"blue",
  releaseDate: 2023,
  transmission:"robot"
};

infomationCar.owner = personalData;
console.log(infomationCar,);

// Задание 5: Создание функции поиска "максимальной скорости" в объекте infomationCar.

const searcSpeed = (infomationCar) => {
  if ("maxSpeed" in infomationCar) {
  } else {
    infomationCar.maxSpeed = "200 км/ч";
  }
};
searcSpeed(infomationCar);

// Задание 6:  Создание функции, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта.

const showInfo = (objeсt, key) => {
  console.log(objeсt[key]);
};

showInfo (personalData, 'city');

// Задание 7: Cоздание массива.

const productList = ["Чай", "Хлеб", "Молоко", "Макароны"];

console.log(productList);

// Задание 8: Cоздание массива состоящий из объектов.

const books = [
  { name : "Выйди из зоный комфорта. Измени жизнь",coverColor : "голубая", nameAuthor : "Брайаном Трейси", produced : "2001", genre : "психологии" },
  { name : "Сила воли. Как развить и укрепить", coverColor : "белая", nameAuthor : "Келли Макгонигал", produced : "2012", genre : "психологии, личностный рост" },
  { name : "Десять негритят", coverColor : "черная", nameAuthor : "Агата Кристи", produced : "1939", genre : "детектив" }
];

books.push ({ name : "Девушка с татуировкой дракона", coverColor : "черная", nameAuthor : "Стиг Ларссон ", produced : "1939", genre : "детектив" });
console.log(books);

// Задание 9: Cоздание массива состоящий из объектов и объединение с массивом из задания №8.

const booksMarvel = [
  { name : "Человек-Паук. Веном-фактор",coverColor : "серая", nameAuthor : "Диана Дуэйн", produced : "1990", genre : "Роман, супергероика" },
  { name : "Доктор Стрэндж. Участь снов", coverColor : "черная", nameAuthor : "Девин Грейсон", produced : "2017", genre : "Фэнтези, проза" },
  { name : "Дэдпул. Лапы", coverColor : "черно-красная", nameAuthor : "Стефан Петручо", produced : "2016", genre : " Современная зарубежная проза, супергероика, юмор" }
];
 const allBooks = [...books, ...booksMarvel];
 
console.log(allBooks);

// Задание 10: Создать функцию, которая принимает массив сущностей


const getRerityInfomation = allBooks.map( book => {
  if (book.produced <= 2001) {
    return {...book, isRare : true};
  } else {
    return{...book, isRare : false};
  }
});

console.log(getRerityInfomation);


