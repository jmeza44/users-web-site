// users.js

class User {
  constructor(name, lastName, identification, address, phone, birthdate, email, password) {
    this.identification = identification;
    this.name = name;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.birthdate = birthdate;
    this.email = email;
    this.password = password;
  }
}

const adminUser = new User("admin", "user", "000000000", "Always Av.", "3008884422", "01/01/1980", "adminuser@sample.com", "password");

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

function saveUsersList(usersList) {
  localStorage.setItem('users', JSON.stringify(usersList));
}

function RegisterUser(name, lastName, identification, address, phone, birthdate, email, password) {
  const usersList = GetUsersList();

  const isEmailOrIdentificationTaken = usersList.some(user => user.email === email || user.identification === identification);

  if (isEmailOrIdentificationTaken) {
    return false;
  }

  const newUser = {
    identification,
    name,
    lastName,
    address,
    phone,
    birthdate,
    email,
    password
  };

  usersList.push(newUser);

  saveUsersList(usersList);

  return true;
}

function ValidateUser(email, password) {
  const usersList = GetUsersList();

  const isValidUser = usersList.some(user => user.email === email && user.password === password);

  if (isValidUser) localStorage.setItem('isUserLogged', JSON.stringify(true));
  else localStorage.setItem('isUserLogged', JSON.stringify(false));

  return isValidUser;
}

function IsUserLogged() {
  return JSON.parse(localStorage.getItem('isUserLogged')) ?? false;
}

export {
  GetUsersList,
  RegisterUser,
  ValidateUser,
  IsUserLogged
};
