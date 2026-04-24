/*  Задание 4.Создать файл Modal.js и в нем создать  класс для модального окна
 под названием Modal. Он будет принимать 1 параметр через конструктор -
 айди модального окна.*/

export default class Modal {
  constructor(modal, closeBtnModal) {
    this.modal = modal;
    this.closeBtnModal = closeBtnModal;
  };

  modalFormOpen() {
  return this.modal.style.display === 'flex';
  };

  openModal() {
    this.modal.style.display = 'flex';
  };

  closeModal() {
      this.modal.style.display = 'none';
  };
  
  closeModalIcon() {
    this.closeBtnModal.addEventListener('click', () => {
      this.closeModal();
    });
  };
};