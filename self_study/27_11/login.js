


const form = document.getElementById("formBtn");
const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");

const errorName = document.createElement("p");
const errorPassword = document.createElement("p");
const message = document.createElement("p");

nameInput.after(errorName);
passwordInput.after(errorPassword);
form.after(message);

errorName.style.color = "red";
errorPassword.style.color = "red";

let invalid = true;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  invalid = true;

  errorName.textContent = "";
  errorPassword.textContent = "";
  message.textContent = "";

  

  if (nameInput.value === "") {
    errorName.textContent = "Vui long nhap ten!";
    nameInput.style.border = "2px solid red";
    invalid = false;
  } else {
    nameInput.style.border = "2px solid green";
  }

  if (passwordInput.value.length < 6) {
    errorPassword.textContent = "Vui long nhap lai password!";
    passwordInput.style.border = "2px solid red";
    invalid = false;
  } else {
    passwordInput.style.border = "2px solid green";
  }

  if (invalid === false) {
    message.textContent = "Ten hoac mat khau chua dung!";
    message.style.color = "red";
    return;
  }

  message.textContent = `Chao mung ${nameInput.value}!!!`;
  message.style.color = "green";
  nameInput.value = "";
  passwordInput.value = "";
});