import { GetUsersList } from './users.js';

addEventListener("load", (event) => {
  // Select the element with the ID "users-table-body"
  var tableBody = document.getElementById("users-table-body");

  const users = GetUsersList();

  users.forEach((user, index) => {
    // Create a new table row element
    var newRow = document.createElement("tr");

    // Set the HTML content for the new row
    newRow.innerHTML = `
<th scope="row">${index+1}</th>
<td>${user.name}</td>
<td>${user.lastName}</td>
<td>${user.email}</td>
`;

    // Append the new row to the table body
    tableBody.appendChild(newRow);
  });

});

