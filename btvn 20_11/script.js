const form = document.getElementById("formBtn");
const nameInput = document.getElementById("name");
const submit = document.getElementById("submit");
const listBtn = document.getElementById("listBtn");

let todos = [];
let editId = null;

function renderTodos() {
  listBtn.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <span style="text-decoration: ${
      todo.completed ? "line-through" : "none"
    }">${todo.text}</span>
    <div class="actions">
        <button class="done" onclick="toggleDone('${
          todo.id
        }')">Hoan Thanh</button>
        <button class ="edit" onclick="editTodo('${todo.id}')">Sua</button>
        <button class ="delete" onclick="deleteTodo('${todo.id}')">Xoa</button>
    </div>

    `;
    listBtn.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = nameInput.value.trim();
  if (!text) {
    alert("Vui long nhap viec can lam");
    return;
  }

  if (editId) {
    todos = todos.map((u) => (u.id === editId ? { ...u, text } : u));
    editId = null;
    submit.textContent = "Them";
  } else {
    todos.push({
      id: Math.random().toString(36).slice(2),
      text,
    });
  }
  form.reset();
  renderTodos();
});

function editTodo(id) {
  const todo = todos.find((u) => u.id === id);
  if (!todo) return;
  nameInput.value = todo.text;
  editId = id;
  submit.textContent = "update";
}

function toggleDone(id) {
   todos = todos.map((u) =>
    u.id === id ? { ...u, completed: !u.completed } : u
  );
  renderTodos();
}

function deleteTodo(id) {
  if (confirm("Ban co chac chan muon xoa khong?")) {
    todos = todos.filter((u) => u.id !== id);
    renderTodos();
  }
}
