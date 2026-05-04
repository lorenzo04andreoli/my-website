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

function initContactForm() {
  const form = document.getElementById("form_contato");
  const submitButton = document.getElementById("submit_button");

  if (!form || !submitButton) return;

  emailjs.init("x5spsmiNXoGo1u_jK");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    const serviceID = "service_cyx8a7z";
    const templateID = "template_or4y4yt";

    submitButton.textContent = "Enviando...";
    submitButton.disabled = true;

    emailjs.send(serviceID, templateID, formData)
      .then(() => {
        Toastify({
          text: "E-mail enviado com sucesso!",
          duration: 3000,
          style: {
            background: "linear-gradient(to right, #4CAF50, #45a049)",
            color: "#fff",
            fontSize: "16px",
          }
        }).showToast();

        form.reset();
      })
      .catch(() => {
        Toastify({
          text: "Erro ao enviar e-mail. Por favor, tente novamente.",
          duration: 3000,
          style: {
            background: "linear-gradient(to right, #f44336, #d32f2f)",
            color: "#fff",
            fontSize: "16px",
          }
        }).showToast();
      })
      .finally(() => {
        submitButton.textContent = "Enviar mensagem";
        submitButton.disabled = false;
      });
  });
}

/* INIT GERAL */

document.addEventListener("DOMContentLoaded", () => {
  initTypewriter();
  initMenu();
  initContactForm();
});