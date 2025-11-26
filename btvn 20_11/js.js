const form = document.getElementById("formBtn");
const nameInput = document.getElementById("name");
const listBtn = document.getElementById("listBtn");
const submit = document.getElementById("submit");

let todos = [];
let editId = null;

function renderTodos() {
  listBtn.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${todo.text}</span>
            <div class="actions">
                <button class="editBtn" onclick="editBtn('${todo.id}')">Sua</button>
                <button class="deleteBtn" onclick="deleteBtn('${todo.id}')">Xoa</button>
            </div>
        `;
    listBtn.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = nameInput.value.trim();
  if (!text) {
    alert("vui long nhap cong viec!");
    return;
  }
  if (editId) {
    todos = todos.map((u) => (u.id === editId ? { ...u, text } : u));
    editId = null;
    submit.textContent = "Add";
  } else {
    todos.push({ id: Date.now(), text });
  }
  form.reset();
  renderTodos();
});

function editBtn(id) {
  id = Number(id);
  const todo = todos.find((u) => u.id === id);
  if (!todo) return;
  nameInput.value = todo.text;
  editId = id;
  submit.textContent = "update";
}

function deleteBtn(id) {
  id = Number(id); 
  if (confirm("Ban co chan chan muon xoa khong?")) {
    todos = todos.filter((u) => u.id !== id);
    renderTodos();
  }
}
