const textElement = document.getElementById("typewriter");

const words = [
  "Lorenzo Andreoli",
  "Backend Engineer",
  "Cloud Practitioner",
  "Full Stack Developer"
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