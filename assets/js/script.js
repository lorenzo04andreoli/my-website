/* TYPEWRITER */

function initTypewriter() {
  const textElement = document.getElementById("typewriter");

  if (!textElement) return; 

  const words = [
    "Lorenzo Andreoli",
    "Backend Developer",
    "Cloud Practitioner",
  ];

  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      textElement.textContent = currentWord.substring(0, letterIndex++);
    } else {
      textElement.textContent = currentWord.substring(0, letterIndex--);
    }

    let speed = isDeleting ? 40 : 80;

    if (letterIndex === currentWord.length + 1) {
      isDeleting = true;
      speed = 1200;
    }

    if (letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 400;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();
}

/* MENU HAMBURGUER */

function initMenu() {
  const hamburguer = document.getElementById("hamburguer");
  const menu = document.getElementById("menu");

  if (!hamburguer || !menu) return;

  hamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburguer.classList.toggle("active");
  });
}

/* INIT GERAL */

document.addEventListener("DOMContentLoaded", () => {
  initTypewriter();
  initMenu();
});