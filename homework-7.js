// Уровень 1.
import { commentsSocialMedia } from "./comments.js";
// Задание 2. Создание массива чисел от 1 до 10 и фильтрация его от значения 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtrationNumbers = numbers.filter(number => 
  number >=5,
);

// Задание 3. Создать массив строк и воспользоваться методом .includes

const carparts = [
  'гур',
  'ступица',
  'поршень',
  'генератор',
  'сцепление',
  'дросель',
  'кардан',
  'редуктор',
  'подшипник',
  'помпа',
];

const selectionCarparts = carparts.includes('генератор');

//Задание 3. Создать массив строк и воспользоваться методом .reverse

const getInvertedArray = (array) => {
  array.reverse();
};

getInvertedArray(carparts);

// Уровень 2

// Заданиие 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const getCommentsSocialMedia = commentsSocialMedia.filter(comment =>
  comment.email.includes('.com'),
);

// Задание 8. Перебрать массив

const getNewCommentsSocialMedia = commentsSocialMedia.map(comment => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  };
});

// Задание 9. Перебрать массив, что бы объекты состояли только из айди и имени

const getNewArray = commentsSocialMedia.map(comment => ({
    id : comment.id,
    name : comment.name,
}));

// Задание 10. Перебираем массив, добавляем объектам свойство isInvalid

const getNewComments = commentsSocialMedia.map(comment => ({
  ...comment,
  isInvalid : comment.body.length > 180,
})
);


// Задание 11. Используя метод reduce и map вывести массив почты.

const getArrayMail = commentsSocialMedia.map( comment => 
  comment.email,
);

const getNewArrayMail = commentsSocialMedia.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
},
[]);

// Задание 12. Перебрав массив с задания №11, привести его к строке.

const getNewArrayMailStr = getNewArrayMail.join();
