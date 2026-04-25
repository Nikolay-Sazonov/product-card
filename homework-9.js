import modal from './modal.js';
import {Form} from './form.js';
// Задание3. Создать структуру наследуемости классов
class Phone {
  constructor(brend, battery) {
    this.brend = brend;
    this.battery = battery;
  };

  batteryСondition() {
    console.log(`На телефоне бренда ${this.brend} ёмкость аккумулятора ${this.battery}%.`);
  };
};

class BuyPhone extends Phone {
  constructor(brend, battery, benefit) {
    super(brend, battery);
    this.benefit = benefit;
  };

  evaluationPhone() {
    console.log(`На телефоне бренда ${this.brend} ёмкость аккумулятора ${this.battery}%. Состояние ${this.benefit}`)
  };
};

const huawai = new BuyPhone('Huawei', 85, 'Нормальное');

huawai.evaluationPhone();

//ДЗ 10 Задание 4, 5.

const emailForm = new Form('form-email');

emailForm.formID.addEventListener('submit', (event) => {
  event.preventDefault();
  emailForm.checkFormValidity();
  const data = emailForm.getElements();
  console.log(data);
});

const openBtn = document.querySelector('#registration-button');
const modalId = document.querySelector('#modal');
const password = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
let user = {};

const modalWindow = new modal(modalId);
openBtn.addEventListener('click', () => {
  modalWindow.openModal();
});

const registrationForm = new Form('registration-form');
registrationForm.formID.addEventListener('submit', (event) => {
  event.preventDefault();
  registrationForm.checkFormValidity();
  const formElem = registrationForm.getElements();
  if (formElem.password === formElem['confirm-password']) {
    registrationForm.createdOn = new Date().toLocaleDateString();
    const {...userData} = formElem;
    user = {...userData};
    delete user['confirm-password'];
    registrationForm.user = user;
    console.log(registrationForm.user);
    registrationForm.resetFormData();
    modalWindow.closeModal();
  } else {
    alert ('Регистрация отклонена, введенный пароль не совпадает, повторите ввод пароля');
    return;
  };
});
