export class Form {
  constructor(formID) {
    this.formID = document.getElementById(formID);
  };

  getElements() {
    const formData = new FormData (this.formID);
    return Object.fromEntries(formData.entries());
  };

  checkFormValidity() {
    if(!this.formID.checkValidity()) {
      alert('Некорректно заполнение полей !');
      return;
    };
  };
  
  resetFormData() {
    this.formID.reset();
  };
}