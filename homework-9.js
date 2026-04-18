const emailForm = document.querySelector('#form-email');

emailForm.addEventListener ('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData (form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});

// Задание 5,6. Создание модального окна и формы внутри него.

const openBtn = document.querySelector('#registration-button');
const closeBtn = document.querySelector('.close-button');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', () => {
  modal.classList.add('modal-showed');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal-showed');
});

const password = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const registrationForm = document.querySelector('.registration-form');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formElem = event.target;
  const formData = new FormData (formElem);
  const dataReg = Object.fromEntries(formData.entries());
  if (!registrationForm.checkVisibility()) {
    alert('Некорректно заполнение полей !');
    return;
  };
  
  let userPassword = formData.get('password');
  let confirmPassword = formData.get('confirm-password');
  if (userPassword === confirmPassword) {
    modal.classList.remove("modal-showed");
    user = {
      ...dataReg,
      createdOn: new Date().toLocaleDateString(),
    };
    console.log(user);
    registrationForm.reset();
  } else {
     alert ("Регистрация отклонена, введенный пароль не совпадает, повторите ввод пароля");
     return;
  };
});
