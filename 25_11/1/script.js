const form = document.getElementById("form");
const productInput = document.getElementById("product");
const productList = document.getElementById("productList");
const priceInput = document.getElementById("price");
const submit = document.getElementById("submit");

let index = 1;
let editRow = null;
let products = JSON.parse(localStorage.getItem("products")) || [];

products.forEach((item, i) => {
  addRow(item.product, item.price, i);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = productInput.value.trim();
  const price = priceInput.value.trim();

  if (!product || !price) return;

  if (editRow) {
  
    editRow.children[1].textContent = product;
    editRow.children[2].textContent = price;

    const i = editRow.getAttribute("data-index");
    products[i].product = product;
    products[i].price = price;
    localStorage.setItem("products", JSON.stringify(products));

    submit.textContent = "Them";
    editRow = null;
  } else {
    const newProduct = { product, price };
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));

    addRow(product, price, products.length - 1);
  }

  productInput.value = "";
  priceInput.value = "";
  productInput.focus();
});


function addRow(product, price, dataIndex) {
  const tr = document.createElement("tr");
  tr.setAttribute("data-index", dataIndex);

  tr.innerHTML = `
    <td>${index}</td>
    <td>${product}</td>
    <td>${price}</td>
    <td>
      <button class="delete">Xoa</button>
      <button class="update">Update</button>
    </td>
  `;
  const deleteBtn = tr.querySelector(".delete");
  const UpdateBtn = tr.querySelector(".update");


  deleteBtn.addEventListener("click", () => {
    if (confirm("Ban co chan chan muon xoa khong?")) {
      const i = tr.getAttribute("data-index");
      products.splice(i, 1);
      localStorage.setItem("products", JSON.stringify(products));
      reloadTable();
    }
  });

  UpdateBtn.addEventListener("click", () => {
    editRow = tr;
    productInput.value = tr.children[1].textContent;
    priceInput.value = tr.children[2].textContent;
    submit.textContent = "Update";
    productInput.focus();
  });
  productList.appendChild(tr);
  index++;
}
function reloadTable() {
  productList.innerHTML = "";
  index = 1;

  products.forEach((item, i) => {
    addRow(item.product, item.price, i);
  });
}