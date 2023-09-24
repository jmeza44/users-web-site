import { GetUsersList } from './users.js';

addEventListener("load", (event) => {
  var tableBody = document.getElementById("users-table-body");

  const users = GetUsersList();

  users.forEach((user, index) => {
    var newRow = document.createElement("tr");

    newRow.innerHTML = `
<th scope="row">${index + 1}</th>
<td>${user.identification}</td>
<td>${user.name}</td>
<td>${user.lastName}</td>
<td>${user.address}</td>
<td>${user.phone}</td>
<td>${user.birthdate}</td>
<td>${user.email}</td>
`;

    tableBody.appendChild(newRow);
  });

});

