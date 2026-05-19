
const usersDataTemplate = document.getElementById('template');
const usersDataWrapper = document.querySelector('.user-data__wrapper');
const infomationLine = document.querySelector('.information-line');
const deleteCardsButton = document.getElementById('delete-all-user-card-button');
const getCardsButton = document.getElementById('get-all-user-card-button');
const errorText = document.querySelector('.error-text') || document.createElement('p'); 

function renderUserCard(users) {
  usersDataWrapper.innerHTML = '';
  users.forEach((userCard) => {
    const userClone = usersDataTemplate.content.cloneNode(true);
    userClone.querySelector('.user_id').textContent = 'ID: ' + userCard.id;
    userClone.querySelector('.user_name').textContent = 'Имя: ' + userCard.name;
    userClone.querySelector('.user_surname').textContent = 'Фамилия: ' + userCard.surname;
    userClone.querySelector('.user_age').textContent = 'Возраст: ' + userCard.age;
    userClone.querySelector('.user_email').textContent = 'Электронная почта: ' + userCard.email;
    const deleteOneBtn = userClone.querySelector('.delete-card');
    deleteOneBtn.addEventListener('click', (event) => {
      const cardElement = event.currentTarget.closest('.user-card');
      const usersString = localStorage.getItem('users');
      if (!usersString) return;
      let usersList = JSON.parse(usersString);
      const filteredUsers = usersList.filter(user => user.id !== userCard.id);
      if (filteredUsers.length === 0) {
        localStorage.removeItem('users');
      } else {
        localStorage.setItem('users', JSON.stringify(filteredUsers));
      }
      cardElement.remove();
    });
    usersDataWrapper.appendChild(userClone);
  });
};

if (localStorage.getItem("users") === null) {
  infomationLine.style.display = 'flex';
  setTimeout(() => {
    fetch('user.json')
      .then(response => {
        if (!response.ok) throw new Error('Ошибка сервера!');
        return response.json();
      })
      .then(users => {
        localStorage.setItem("users", JSON.stringify(users));
        infomationLine.style.display = 'none';
        usersDataWrapper.style.display = 'flex';
        renderUserCard(users);
      })
      .catch(error => {
        infomationLine.style.display = 'none';
        errorText.textContent = `❌ Ошибка загрузки: ${error.message}`;
      });
  }, 2000);
} else {
  infomationLine.style.display = 'none';
  const localUsers = JSON.parse(localStorage.getItem("users"));
  usersDataWrapper.style.display = 'flex';
  renderUserCard(localUsers);
};

deleteCardsButton.addEventListener('click', () => {
  errorText.textContent = '';
  usersDataWrapper.innerHTML = '';
  usersDataWrapper.style.display = 'none';
  localStorage.removeItem('users');
});

getCardsButton.addEventListener('click', () => {
  errorText.textContent = '';
  infomationLine.style.display = 'flex';
  usersDataWrapper.innerHTML = '';

  setTimeout(() => {
    const localData = localStorage.getItem('users');
    if (!localData) {
      fetch('user.json')
      .then(response => {
        if (!response.ok) throw new Error('Ошибка сервера!');
        return response.json();
      })
      .then(users => {
        localStorage.setItem('users', JSON.stringify(users));
        infomationLine.style.display = 'none';
        usersDataWrapper.style.display = 'flex';
        renderUserCard(users);
      })
      .catch(error =>{
        infomationLine.style.display = 'none';
        errorText.textContent = `❌ Ошибка загрузки: ${error.message}`;
      });
      return;
    };
    try {
      const users = JSON.parse(localData);
      infomationLine.style.display = 'none';
      usersDataWrapper.style.display = 'flex';
      renderUserCard(users);
    } catch (error) {
      infomationLine.style.display = 'none';
      errorText.textContent = `❌ Ошибка: ${error.message}`;
    };
  }, 1500);
});
