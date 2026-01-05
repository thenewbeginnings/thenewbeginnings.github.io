const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("site-nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.textContent = nav.classList.contains("active") ? "✖" : "☰";
});
