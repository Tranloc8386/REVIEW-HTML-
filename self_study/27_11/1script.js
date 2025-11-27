const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");

const errorName = document.createElement("p");//tao the hien thi loi va the khi dang nhap thanh cong
const errorpassword = document.createElement("p");
const message = document.createElement("p");

errorName.style.color = "red"; //doi mau vien khi tthong tin sai
errorpassword.style.color = "red";

nameInput.after(errorName);//dua the bao loi phia duoi no
passwordInput.after(errorpassword);
form.after(message);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isvalie = true;//tao 1 bien de kiem tra

  errorName.textContent = "";
  errorpassword.textContent = "";
  message.textContent = "";
  nameInput.style.border = "";
  passwordInput.style.border = "";

  if (nameInput.value.trim() === "") {
    errorName.textContent="Vui long nhap ten!";
    nameInput.style.border = "2px solid red--";
    isvalie = false;
  }
  if (passwordInput.value.length < 6) {
    errorpassword.textContent = "Vui long nhap lai password!";
    nameInput.style.border = "red";
    isvalie = false;
  }
  if (!isvalie) {
    message.textContent =
      "Thong tin dang nhap khong hop le, vui long kiem tra lai!";
    message.style.color = "red";

    nameInput.value = "";
    passwordInput.value = "";
    return;
  }

  message.textContent = `Welcome, ${nameInput.value}! below the form.`;
  message.style.color = "green";
});
