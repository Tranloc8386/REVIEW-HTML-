const form = document.getElementById("formBtn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const userList = document.getElementById("userList");
const submitbtn = document.getElementById("submit");

let index = 1;
let editRow = null;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) return;

  if (editRow) {
    editRow.children[1].textContent = name;
    editRow.children[2].textContent = email;

    submitbtn.textContent = "Them";
    editRow = null;
  } else {
    const tr = document.createElement("tr");
    tr.innerHTML = `
 <th>${index}</th>
 <th>${name}</th>
 <th>${email}</th>
 <div class="groupBtn">
  <button class="delete">Xoa</button>
  <button class="update">Update</button>
 </div>
  `;

    const deleteBtn = tr.querySelector(".delete");
    const updatebtn = tr.querySelector(".update");

    deleteBtn.addEventListener("click", () => {
      if (confirm("Ban chac chan muon xoa khong?")) {
        tr.remove();
      }
    });

    updatebtn.addEventListener("click", () => {
      editRow = tr;
      nameInput.value = tr.children[1].textContent;
      emailInput.value = tr.children[2].textContent;

      submitbtn.textContent = "Update";
    });

    userList.appendChild(tr);
  }
  console.log(name);
  nameInput.value = "";
  emailInput.value = "";
  nameInput.focus();
});
