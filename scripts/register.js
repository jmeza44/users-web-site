import { RegisterUser } from './users.js';

const registerButton = document.getElementById('registerButton');
const nameInput = document.getElementById('firstNameField');
const lastNameInput = document.getElementById('lastNameField');
const identificationInput = document.getElementById('identificationField');
const addressInput = document.getElementById('addressField');
const phoneInput = document.getElementById('phoneField');
const birthdateInput = document.getElementById('birthdateField');
const emailInput = document.getElementById('emailField');
const passwordInput = document.getElementById('passwordField');

registerButton.addEventListener('click', () => {
  const nameValue = nameInput.value;
  const lastNameValue = lastNameInput.value;
  const identification = identificationInput.value;
  const address = addressInput.value;
  const phone = phoneInput.value;
  const birthdate = birthdateInput.value;
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (nameValue == undefined || nameValue == "") {
    alert('Agrega tu nombre!');
    return;
  }

  if (identification == undefined || identification == "") {
    alert('Agrega tu identificación!');
    return;
  }

  if (emailValue == undefined || emailValue == "") {
    alert('Agrega tu emailValue!');
    return;
  }

  if (RegisterUser(nameValue, lastNameValue, identification, address, phone, birthdate, emailValue, passwordValue)) {
    alert('Usuario registrado!');
    window.location.href = "../pages/users-table.html";
  } else {
    alert('Email o Identificación existentes!');
  }
});
