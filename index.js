let loginBtn = document.querySelector(".login");
let signupBtn = document.querySelector(".signup");
let logoutBtn = document.querySelector(".logout");
let userNameField = document.querySelector("#username");
let passWordField = document.querySelector("#password");
let loginForm = document.querySelector(".login_form");
let signupForm = document.querySelector(".signup_form");
let submitSignUp = document.querySelector(".signup_form .submit");
let submitLogin = document.querySelector(".login_form .submit");
let closeForm = document.querySelectorAll("form .close");
let navBar = document.querySelector("nav");
let cards = document.querySelectorAll("section .card");

if (localStorage.length === 0) {
  localStorage.setItem("sign up", false);
} else {
  localStorage.setItem("sign up", true);
}

window.onscroll = navStyle;

function navStyle() {
  if (window.scrollY > navBar.offsetHeight + 100) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
}

let account = localStorage.getItem("sign up");

if (account === "false") {
  logoutBtn.classList.add("hideBtn");
  loginBtn.classList.add("hideBtn");
} else {
  signupBtn.classList.add("hideBtn");
  loginBtn.classList.remove("hideBtn");
}

loginBtn.addEventListener("click", () => loginForm.classList.add("visiable"));

closeForm.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.parentElement.classList.remove("visiable");
  });
});

logoutBtn.addEventListener("click", () => {
  location.reload();
  localStorage.clear();
});

signupBtn.addEventListener("click", () => {
  signupForm.classList.add("visiable");
});

cards.forEach(function (elem, i) {
  elem.addEventListener("click", () => {
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add("unclicked");
      cards[i].classList.remove("clicked");
    }
    elem.classList.remove("unclicked");
    elem.classList.add("clicked");
  });
});
