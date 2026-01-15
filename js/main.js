function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

// GSAP animations
gsap.from(".content-frame", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: ".content-frame"
});
