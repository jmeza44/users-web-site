import { ValidateUser } from './users.js';

// Get references to the button and input elements
const loginButton = document.getElementById('loginButton');
const emailInput = document.getElementById('form2Example17');
const passwordInput = document.getElementById('form2Example27');

// Add a click event listener to the button
loginButton.addEventListener('click', () => {
  // Get the values of the email and password inputs
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  // Perform credential validation here (replace with your logic)
  if (ValidateUser(emailValue, passwordValue)) {
    // Credentials are correct, perform the desired action (e.g., redirect to a new page)
    alert('Login successful!'); // Replace with your action
    window.location.href = "../pages/users-table.html";
  } else {
    // Credentials are incorrect, display an error message or take appropriate action
    alert('Invalid email or password'); // Replace with your action
  }
});
