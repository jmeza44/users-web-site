import { IsUserLogged } from './users.js';

// Get the anchor element by its id
const usersPageLink = document.getElementById('userslink');

// Remove the 'disabled' class from the anchor element
if (IsUserLogged()) usersPageLink.classList.remove('disabled');
