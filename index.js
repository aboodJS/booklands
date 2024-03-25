let loginBtn = document.querySelector(".login");
let signupBtn = document.querySelector(".signup");
let logoutBtn = document.querySelector(".logout");
let userNameField = document.querySelector("#username");
let passWordField = document.querySelector("#password");
let loginForm = document.querySelector("main form");
let submitBtn = document.querySelector("form .submit");
let closeForm = document.querySelector("form .close");

localStorage.setItem("signin", false);

let account = localStorage.getItem("signin");

logoutBtn.classList.add("hideBtn");

if (account === "false") {
  loginBtn.classList.add("hideBtn");
} else {
  signupBtn.classList.add("hideBtn");
  loginBtn.classList.remove("hideBtn");
}

loginBtn.addEventListener("click", () => loginForm.classList.add("visiable"));

closeForm.addEventListener("click", () =>
  loginForm.classList.remove("visiable")
);

submitBtn.addEventListener("click", () => {
  localStorage.setItem("userName", userNameField.value);
  localStorage.setItem("password", passWordField.value);
});

logoutBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
