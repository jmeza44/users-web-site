import { RegisterUser } from './users.js';

// Get references to the button and input elements
const registerButton = document.getElementById('registerButton');
const nameInput = document.getElementById('form2Example37');
const lastNameInput = document.getElementById('form2Example47');
const emailInput = document.getElementById('form2Example17');
const passwordInput = document.getElementById('form2Example27');

// Add a click event listener to the button
registerButton.addEventListener('click', () => {
  // Get the values of the email and password inputs
  const nameValue = nameInput.value;
  const lastNameValue = lastNameInput.value;
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  // Perform credential validation here (replace with your logic)
  if (RegisterUser(nameValue, lastNameValue, emailValue, passwordValue)) {
    // Credentials are correct, perform the desired action (e.g., redirect to a new page)
    alert('User registered!'); // Replace with your action
    window.location.href = "../pages/users-table.html";
  } else {
    // Credentials are incorrect, display an error message or take appropriate action
    alert('Email taken'); // Replace with your action
  }
});
