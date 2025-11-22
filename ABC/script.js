const form = document.getElementById("form-btn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const submit = document.getElementById("submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  emailError.textContent = "";
  passwordError.textContent = "";

  let isvalid=true;

});
