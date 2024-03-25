let loginBtn = document.querySelector(".login");
let signupBtn = document.querySelector(".signup");
let logoutBtn = document.querySelector(".logout");
let userNameField = document.querySelector("#username");
let passWordField = document.querySelector("#password");
let loginForm = document.querySelector(".login_form");
let signupForm = document.querySelector(".signup_form");
let submitForm = document.querySelectorAll("form .submit");
let closeForm = document.querySelectorAll("form .close");

if (localStorage.length == 0) {
  localStorage.setItem("sign up", false);
} else {
  localStorage.setItem("sign up", true);
}

let account = localStorage.getItem("sign up");

logoutBtn.classList.add("hideBtn");

if (account === "false") {
  loginBtn.classList.add("hideBtn");
} else {
  signupBtn.classList.add("hideBtn");
  loginBtn.classList.remove("hideBtn");
}

loginBtn.addEventListener("click", () => loginForm.classList.add("visiable"));

submitForm.forEach((elem) => {
  elem.addEventListener("click", () => {
    localStorage.setItem("username", userNameField.value);
    localStorage.setItem("password", passWordField.value);
  });
});

closeForm.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.parentElement.classList.remove("visiable");
  });
});

logoutBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

signupBtn.addEventListener("click", () => {
  signupForm.classList.add("visiable");
});
