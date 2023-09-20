// users.js

class User {
  constructor(name, lastName, email, password) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

const adminUser = new User("admin", "user", "adminuser@sample.com", "password");

// Function to retrieve the list of users from LocalStorage
function GetUsersList() {
  let usersListJSON = localStorage.getItem('users');
  if (usersListJSON == null) {
    const adminUserList = [];
    adminUserList.push(adminUser);
    saveUsersList(adminUserList);
    usersListJSON = localStorage.getItem('users');
  };
  return JSON.parse(usersListJSON);
}

// Function to save the list of users to LocalStorage
function saveUsersList(usersList) {
  localStorage.setItem('users', JSON.stringify(usersList));
}

// Function to register a new user
function RegisterUser(name, lastName, email, password) {
  // Retrieve the current list of users
  const usersList = GetUsersList();

  // Check if the email is already in use
  const isEmailTaken = usersList.some(user => user.email === email);

  if (isEmailTaken) {
    return false; // Email already in use, registration failed
  }

  // Create a new user object
  const newUser = {
    name,
    lastName,
    email,
    password
  };

  // Add the new user to the list
  usersList.push(newUser);

  // Save the updated list to LocalStorage
  saveUsersList(usersList);

  return true; // Registration successful
}

// Function to validate user credentials
function ValidateUser(email, password) {
  // Retrieve the current list of users
  const usersList = GetUsersList();

  // Check if there is a user with the given email and password
  const isValidUser = usersList.some(user => user.email === email && user.password === password);

  if (isValidUser) localStorage.setItem('isUserLogged', JSON.stringify(true));
  else localStorage.setItem('isUserLogged', JSON.stringify(false));

  return isValidUser;
}

function IsUserLogged() {
  return JSON.parse(localStorage.getItem('isUserLogged')) ?? false;
}

// Export the functions
export {
  GetUsersList,
  RegisterUser,
  ValidateUser,
  IsUserLogged
};
