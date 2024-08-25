// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika drink menu diklik
document.querySelector("#drink-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click di luar side bar untuk menghilangkan nav
const drink = document.querySelector("#drink-menu");

document.addEventListener("click", function (e) {
  if (!drink.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
