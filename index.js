let navBar = document.querySelector("nav");
let cards = document.querySelectorAll("section .card");

window.onscroll = navStyle;

function navStyle() {
  if (window.scrollY > navBar.offsetHeight + 100) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
}

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
