function revealPoem() {
  const poem = document.getElementById("poem");
  const button = document.querySelector("button");

  poem.classList.remove("hidden");
  button.classList.add("fade-out");

  startRoses();

  setTimeout(() => {
    button.remove();
  }, 600);
}

// IMAGE SLIDER
document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  if (slides.length === 0) return;

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 3000);
});

// ROSES ANIMATION
function startRoses() {
  const container = document.getElementById("roses-container");
  if (!container) return;

  const roseInterval = setInterval(() => {
    const rose = document.createElement("div");
    rose.classList.add("rose");
    rose.innerText = "❤️";

    rose.style.left = Math.random() * 100 + "vw";
    rose.style.animationDuration = 3 + Math.random() * 3 + "s";

    container.appendChild(rose);

    setTimeout(() => {
      rose.remove();
    }, 6000);
  }, 300);

  // stop after 6 seconds
  setTimeout(() => {
    clearInterval(roseInterval);
  }, 6000);
}