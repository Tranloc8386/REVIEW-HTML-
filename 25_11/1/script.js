const form = document.getElementById("form");
const productInput = document.getElementById("product");
const productList = document.getElementById("productList");
const priceInput = document.getElementById("price");
const submit = document.getElementById("submit");

let index = 1;
let editRow = null;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = productInput.value.trim();
  const price = priceInput.value.trim();

  if (!product || !price) return;

  if (editRow) {
    editRow.children[1].textContent = product;
    editRow.children[2].textContent = price;
    submit.textContent = "Them";
    editRow = null;
  } else {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${index}</td>
    <td>${product}</td>
    <td>${price}</td>
    <div class="group-btn">
        <button class="delete">Xoa</button>
        <button class="update">Update</button>
    </div>

  `;
    const deleteBtn = tr.querySelector(".delete");
    const UpdateBtn = tr.querySelector(".update");

    deleteBtn.addEventListener("click", () => {
      if (confirm("Ban co chan chan muon xoa khong?")) {
        tr.remove();
      }
    });

    UpdateBtn.addEventListener("click", () => {
      editRow = tr;
      productInput.value = tr.children[1].textContent;
      priceInput.value = tr.children[2].textContent;

      submit.textContent="Update";
      productInput.focus();

    });

    productList.appendChild(tr);
    index++;
  }

  productInput.value = "";
  priceInput.value = "";
  productInput.focus();
});
