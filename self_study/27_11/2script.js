const form = document.getElementById("form");
const jobInput = document.getElementById("job");
const submitbtn = document.getElementById("submit");
const todoList = document.getElementById("todoList");

let index = 1;
let edit = null;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const job=jobInput.value.trim();
  if(!job) return;
  if (edit) {
    edit.children[1].textContent=job;
    submitbtn.textContent="Add";
    edit=null;
  }else{
    const li=document.createElement("li");
    li.innerHTML=`
        <span>${index}</span>
        <span>${job}</span>
        <div class="groupBtn">
            <button class="delete">Delete</button>
            <button class="update">Update</button>
        </div>
    `

    const deleteBtn=li.querySelector(".delete");
    const updateBtn=li.querySelector(".update");

    deleteBtn.addEventListener("click", ()=>{
        if(confirm("Ban co chan chan muon xoa khong?"))
        {
            li.remove();
        }
    })

    updateBtn.addEventListener("click", ()=>{
        edit=li;
        jobInput.value=li.children[1].textContent;
        submitbtn.textContent="Update";
    })

    todoList.appendChild(li);
  }

  jobInput.value="";
  jobInput.focus();
});
