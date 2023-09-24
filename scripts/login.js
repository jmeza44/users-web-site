import { ValidateUser } from './users.js';

const loginButton = document.getElementById('loginButton');
const emailInput = document.getElementById('form2Example17');
const passwordInput = document.getElementById('form2Example27');

loginButton.addEventListener('click', () => {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (ValidateUser(emailValue, passwordValue)) {
    alert('Login exitoso!');
    window.location.href = "../pages/users-table.html";
  } else {
    alert('Email o contraseña invalidos');
  }
});
