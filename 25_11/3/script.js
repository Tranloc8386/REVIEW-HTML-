const form = document.getElementById("form");
const jobInput = document.getElementById("job");
const submitBtn = document.getElementById("submit");
const todoList = document.getElementById("todoList");

let index = 1;
let edit = null;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const job = jobInput.value.trim();

  if (!job) return;
  if (edit) {
    edit.children[1].textContent = job;
    submitBtn.textContent = "Them";
    edit = null;
  } else {
    const li = document.createElement("li");
    li.innerHTML = `
    <span>${index}</span>
    <span>${job}</span>
    <div class="groupBtn">
        <button class="delete">Xoa</button>    
        <button class="update">Cap nhat</button>
    </div>

    `;

    const deleteBtn = li.querySelector(".delete");
    const updatebtn = li.querySelector(".update");

    deleteBtn.addEventListener("click", () => {
      if (confirm("Ban co chan chan muon xoa khong?")) {
        li.remove();
      }
    });
    updatebtn.addEventListener("click", () => {
      edit = li;
      jobInput.value = li.children[1].textContent;
      submitBtn.textContent = "Cap Nhat";
    });
    todoList.appendChild(li);
  }

  jobInput.value = "";
  jobInput.focus();
});
