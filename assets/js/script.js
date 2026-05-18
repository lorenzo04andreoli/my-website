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

/* FORMULÁRIO DE CONTATO */

function showToast(message, background) {
  Toastify({
    text: message,
    duration: 3000,
    style: {
      background,
      color: "#fff",
      fontSize: "16px",
    }
  }).showToast();
}

function isValidFullName(name) {
  const words = name
    .trim()
    .split(/\s+/)
    .filter((word) => /^[A-Za-zÀ-ÖØ-öø-ÿ'-]{2,}$/.test(word));

  return words.length >= 2;
}

function isValidEmail(email) {
  const trimmedEmail = email.trim();
  const emailPattern = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

  return emailPattern.test(trimmedEmail) && !trimmedEmail.includes("..");
}

function initContactForm() {
  const form = document.getElementById("form_contato");
  const submitButton = document.getElementById("submit_button");

  if (!form || !submitButton) return;

  emailjs.init("x5spsmiNXoGo1u_jK");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      subject: document.getElementById("subject").value.trim(),
      message: document.getElementById("message").value.trim(),
    };

    if (!isValidFullName(formData.name)) {
      showToast(
        "Informe seu nome completo, com nome e sobrenome.",
        "linear-gradient(to right, #f44336, #d32f2f)"
      );
      return;
    }

    if (!isValidEmail(formData.email)) {
      showToast(
        "Informe um e-mail válido, como nome@dominio.com.",
        "linear-gradient(to right, #f44336, #d32f2f)"
      );
      return;
    }

    const serviceID = "service_cyx8a7z";
    const templateID = "template_or4y4yt";

    submitButton.textContent = "Enviando...";
    submitButton.disabled = true;

    emailjs.send(serviceID, templateID, formData)
      .then(() => {
        showToast(
          "E-mail enviado com sucesso!",
          "linear-gradient(to right, #4CAF50, #45a049)"
        );

        form.reset();
      })
      .catch(() => {
        showToast(
          "Erro ao enviar e-mail. Por favor, tente novamente.",
          "linear-gradient(to right, #f44336, #d32f2f)"
        );
      })
      .finally(() => {
        submitButton.textContent = "Enviar mensagem";
        submitButton.disabled = false;
      });
  });
}

/* EFEITO DE ESTRELAS */

function createSpace(canvasId, starCount = 150) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let stars = [];

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function createStars() {
    stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.3,
        speed: Math.random() * 0.4 + 0.15,
        opacity: Math.random() * 0.8 + 0.2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach((star) => {
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();

      star.y += star.speed;

      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", () => {
    resizeCanvas();
    createStars();
  });

  resizeCanvas();
  createStars();
  draw();
}

/* INIT GERAL */

document.addEventListener("DOMContentLoaded", () => {
  initTypewriter();
  initMenu();
  initContactForm();
  createSpace("space-home", 180);
  createSpace("space-experiencia", 120);
  createSpace("space-contato", 100);
});
