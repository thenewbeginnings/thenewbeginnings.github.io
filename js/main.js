const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("site-nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.textContent = nav.classList.contains("active") ? "✖" : "☰";
});
// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal, .reveal-img");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
