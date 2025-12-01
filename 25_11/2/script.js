const form = document.getElementById("formBtn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const userList = document.getElementById("userList");
const submitbtn = document.getElementById("submit");

let index = 1;
let editRow = null;

let users = JSON.parse(localStorage.getItem("users")) || [];
renderFromStorage();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) return;


  if (editRow) {
    editRow.children[1].textContent = name;
    editRow.children[2].textContent = email;

    const i = editRow.getAttribute("data-index");
    users[i].name = name;
    users[i].email = email;
    localStorage.setItem("users", JSON.stringify(users));

    submitbtn.textContent = "Them";
    editRow = null;
  } else {
    const user = { name, email };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    addRow(user, users.length - 1);
  }

  nameInput.value = "";
  emailInput.value = "";
  nameInput.focus();
});

function addRow(user, dataIndex) {
  const tr = document.createElement("tr");
  tr.setAttribute("data-index", dataIndex);

  tr.innerHTML = `
    <th>${index}</th>
    <th>${user.name}</th>
    <th>${user.email}</th>
    <th>
      <button class="delete">Xoa</button>
      <button class="update">Update</button>
    </th>
  `;

  const deleteBtn = tr.querySelector(".delete");
  const updatebtn = tr.querySelector(".update");
  deleteBtn.addEventListener("click", () => {
    if (confirm("Ban chac chan muon xoa khong?")) {
      const i = tr.getAttribute("data-index");
      users.splice(i, 1);
      localStorage.setItem("users", JSON.stringify(users));
      tr.remove();
      reloadIndex();
      reloadFromStorage();
    }
  });
  updatebtn.addEventListener("click", () => {
    editRow = tr;
    nameInput.value = tr.children[1].textContent;
    emailInput.value = tr.children[2].textContent;
    submitbtn.textContent = "Update";
  });

  userList.appendChild(tr);
  index++;
}

function renderFromStorage() {
  users.forEach((user, i) => {
    addRow(user, i);
  });
}

function reloadFromStorage() {
  userList.innerHTML = "";
  index = 1;

  renderFromStorage();
}

function reloadIndex() {
  const rows = document.querySelectorAll("#userList tr");
  rows.forEach((row, i) => {
    row.children[0].textContent = i + 1;
    row.setAttribute("data-index", i);
  });
}
