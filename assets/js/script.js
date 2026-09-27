function initTheme() {
  const button = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const portrait = document.querySelector('.profile-portrait');
  const photos = portrait.querySelectorAll('img');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let busy = false;

  function applyTheme(spider) {
    root.dataset.theme = spider ? 'spider' : 'dark';
    button.setAttribute('aria-pressed', String(spider));
    updateThemeLabel();
    photos[0].setAttribute('aria-hidden', String(spider));
    photos[1].setAttribute('aria-hidden', String(!spider));
    try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch (_) {}
  }

  applyTheme(root.dataset.theme === 'spider');
  button.addEventListener('click', () => {
    if (busy) return;
    const spider = root.dataset.theme !== 'spider';
    if (reduced.matches) { applyTheme(spider); return; }
    busy = true;
    const canvas = document.createElement('canvas');
    canvas.className = 'theme-web';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    document.body.append(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) { applyTheme(spider); canvas.remove(); busy = false; return; }
    const source = button.getBoundingClientRect();
    const target = portrait.getBoundingClientRect();
    const cx = target.bottom > 0 && target.top < innerHeight ? target.x + target.width / 2 : innerWidth / 2;
    const cy = target.bottom > 0 && target.top < innerHeight ? target.y + target.height / 2 : innerHeight * 0.4;
    const radius = Math.hypot(innerWidth, innerHeight) * 0.65;
    const start = performance.now();
    let applied = false;

    function frame(now) {
      const t = Math.min((now - start) / 800, 1);
      if (t >= 0.42 && !applied) { applyTheme(spider); applied = true; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = t < 0.65 ? 0.85 : (1 - t) / 0.35 * 0.85;
      ctx.strokeStyle = '#f5f5f5';
      ctx.lineWidth = 1.4;
      const travel = Math.min(t / 0.25, 1);
      ctx.beginPath();
      ctx.moveTo(source.x + source.width / 2, source.y + source.height / 2);
      ctx.lineTo(source.x + source.width / 2 + (cx - source.x - source.width / 2) * travel, source.y + source.height / 2 + (cy - source.y - source.height / 2) * travel);
      ctx.stroke();
      const growth = Math.max(0, Math.min((t - 0.2) / 0.4, 1));
      const reach = radius * growth * (spider ? 1 : Math.max(0, 1 - t));
      for (let i = 0; i < 12; i++) {
        const angle = i * Math.PI / 6;
        ctx.beginPath(); ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * reach, cy + Math.sin(angle) * reach); ctx.stroke();
      }
      for (let ring = 1; ring <= 5; ring++) {
        const r = reach * ring / 5;
        ctx.beginPath(); ctx.moveTo(cx + r, cy);
        for (let i = 1; i <= 12; i++) {
          const angle = i * Math.PI / 6;
          const middle = angle - Math.PI / 12;
          ctx.quadraticCurveTo(cx + Math.cos(middle) * r * 0.86, cy + Math.sin(middle) * r * 0.86, cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
        }
        ctx.stroke();
      }
      if (t < 1) requestAnimationFrame(frame);
      else { canvas.remove(); busy = false; }
    }
    requestAnimationFrame(frame);
  });
}

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

  menu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      hamburguer.classList.remove("active");
    });
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
        portfolioText("Informe seu nome completo, com nome e sobrenome.", "Enter your full name, including first and last name."),
        "linear-gradient(to right, #f44336, #d32f2f)"
      );
      return;
    }

    if (!isValidEmail(formData.email)) {
      showToast(
        portfolioText("Informe um e-mail válido, como nome@dominio.com.", "Enter a valid email address, such as name@domain.com."),
        "linear-gradient(to right, #f44336, #d32f2f)"
      );
      return;
    }

    const serviceID = "service_cyx8a7z";
    const templateID = "template_or4y4yt";

    submitButton.textContent = portfolioText("Enviando...", "Sending...");
    submitButton.disabled = true;

    emailjs.send(serviceID, templateID, formData)
      .then(() => {
        showToast(
          portfolioText("E-mail enviado com sucesso!", "Message sent successfully!"),
          "linear-gradient(to right, #4CAF50, #45a049)"
        );

        form.reset();
      })
      .catch(() => {
        showToast(
          portfolioText("Erro ao enviar e-mail. Por favor, tente novamente.", "Could not send your message. Please try again."),
          "linear-gradient(to right, #f44336, #d32f2f)"
        );
      })
      .finally(() => {
        submitButton.textContent = portfolioText("Enviar mensagem", "Send message");
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

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) requestAnimationFrame(draw);
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
  initTheme();
  initTypewriter();
  initMenu();
  createSpace("space-home", 180);
  createSpace("space-experiencia", 120);
  createSpace("space-projetos", 120);
  initContactForm();
});
