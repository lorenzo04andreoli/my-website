// Portuguese stays in the HTML; only the English copy is duplicated here.
const englishCopy = {
  '.menu a': ['Home', 'About', 'Experience', 'Certifications', 'Projects', 'Contact'],
  '.home .desc': ['Java developer focused on backend development. I turn real-world processes into web applications, from business rules and security to production deployment with Docker and AWS.'],
  '.home-actions a': ['View projects', 'Get in touch', '<i class="fas fa-download" aria-hidden="true"></i> Download CV'],
  '#sobre h2': ['About me'],
  '.sobre-foco': ['Backend development &amp; cloud'],
  '.sobre-intro': ['I build solutions to <strong>automate workflows, organize information and support the people who use them every day.</strong>'],
  '.sobre-apresentacao > p:not([class])': [
    'Using Java and Spring Boot, I have built systems for dental practice management, institutional case tracking and real estate listings. My work spans business rules and APIs, security with Spring Security, persistence with JPA and MySQL, and Angular integration.',
    'I also work with JUnit and Mockito testing, Docker and AWS deployment, and Linux service troubleshooting, connecting development and operations.'
  ],
  '.sobre-formacao h3': ['Education and certification'],
  '.sobre-formacao dl > div:first-child dt': ['Systems Analysis and Development'],
  '.sobre-formacao dl > div:first-child dd:last-child': ['Feb 2024 - Aug 2026.'],
  '.sobre-formacao a': ['View certification <i class="fas fa-arrow-right" aria-hidden="true"></i>'],
  '.sobre-tecnologias h3': ['Technologies I work with'],
  '.sobre-stack-grid h4': ['Backend and data', 'Frontend', 'Cloud and quality'],
  '.sobre-stack-grid > div:first-child li:nth-child(4)': ['REST APIs'],
  '#experiencia h2': ['Experience'],
  '.experiencia-card h3': ['Software Development Trainee', 'Full Stack Developer', 'Administrative Intern'],
  '.experiencia-card .periodo': ['Apr 2026 - Jun 2026', 'Jul 2025 - Feb 2026', 'Jan 2024 - Feb 2026'],
  '.experiencia-card > p': [
    'Developed <strong>Dentix</strong>, a full-stack dental practice management system bringing together patients, dentists, appointments, reports and financial operations.',
    'Provided software development services alongside my administrative internship, designing and deploying <strong>CCControl</strong>, an institutional system used to monitor people serving non-custodial sentences.',
    'Supported the Council\'s administrative routines, focusing on <strong>case tracking, document organization and information reliability</strong>. Applied automation to streamline internship tasks.'
  ],
  '.experiencia-card li': [
    'Implemented <strong>REST APIs</strong> with Java 17, Spring Boot and MySQL.',
    'Implemented security with <strong>Spring Security, JWT, RBAC and 2FA</strong>, BCrypt and encrypted authentication secrets.',
    'Designed <strong>business rules</strong> for booking, rescheduling and cancellation, validating scheduling conflicts and availability.',
    'Built the frontend with <strong>Angular and TypeScript</strong>, integrated with the REST API.',
    'Containerized with <strong>Docker Compose</strong> and deployed to <strong>AWS EC2</strong>, with Nginx and HTTPS.',
    '<strong>Automated a workflow based on more than 200 paper records</strong>, automatically classifying records as up to date, pending or overdue.',
    'Implemented business rules and <strong>scheduled tasks</strong> with Java 17, Spring Boot, Spring Data JPA, Hibernate and MySQL.',
    'Implemented access control with <strong>Spring Security, RBAC and 2FA</strong>, BCrypt, CSRF, Content Security Policy and HTTPS.',
    'Created <strong>dashboards and management reports</strong> to track attendance, pending items and overdue obligations.',
    'Deployed to <strong>AWS EC2 with Docker Compose</strong>, isolating MySQL on an internal network.',
    '<strong>Tracked cases, deadlines and pending items</strong>, keeping records and documentation up to date.',
    'Prepared <strong>Excel spreadsheets and reports</strong> to monitor administrative workflows.',
    'Created <strong>metrics and dashboards in Power BI</strong> to support decision-making.',
    '<strong>Checked and validated information</strong>, improving the traceability of institutional records.',
    'Created <strong>Python automations</strong> to read documents and organize files, streamlining repetitive tasks.'
  ],
  '#certificacoes h2': ['Certifications'],
  '.certificacao-conteudo > p:last-child': ['Earned the AWS cloud fundamentals certification, reinforcing my work in cloud application development and deployment.'],
  '#projetos h2': ['Projects'],
  '.overlay span': Array(6).fill('View on GitHub'),
  '.projeto-card h3': ['CCControl', 'Dentix', 'Eliane Carneiro Imóveis', 'DevOps Practices', 'QR Code Generator', 'AI Resume Analyzer'],
  '.projeto-card > p': [
    'System developed for the Community Council to automate tracking previously based on more than 200 paper records. Built with Java and Spring MVC, featuring 24 HTTP routes, automatic pending-item classification and reports. Deployed with Docker on AWS EC2.',
    'Dental management system developed independently with Java, Spring Boot and Angular. Includes 60 REST endpoints for patients, appointments and financial management, with scheduling conflict validation, access control and two-factor authentication. Deployed with Docker on AWS EC2.',
    'System delivered to a local real estate agent, with a public catalog and an admin panel for properties and photos. Angular and Spring Boot, with 17 REST endpoints and JWT security. Running on AWS Lightsail with Docker, Nginx, a custom domain and HTTPS.',
    'Java API with Spring Boot and a GitHub Actions CI/CD pipeline. Combines JUnit and Mockito unit tests, Docker containerization and Discord notifications to automate application validation and delivery.',
    'Backend integrating QR code generation with cloud storage. Creates codes and organizes generated files in an AWS S3 bucket, connecting application processing with file persistence.',
    'Python application for AI-powered resume analysis, exploring the use of artificial intelligence to process professional information.'
  ],
  '#contato h2': ['Contact'],
  '#contato .container > p': ['Get in touch about opportunities, freelance projects or professional networking.'],
  '.form-group label': ['Name', 'Email', 'Subject', 'Message'],
  '#submit_button': ['Send message'],
  '.footer p': ['&copy; 2026 Lorenzo Carneiro Andreoli. All rights reserved.']
};

const englishAttributes = [
  ['.profile-img', 'alt', ['Photo of Lorenzo Carneiro Andreoli', 'Lorenzo wearing a Spider-Man mask and costume']],
  ['.skills', 'aria-label', ['Backend and data', 'Frontend', 'Cloud and quality']],
  ['.certificacao', 'aria-label', ['View AWS Certified Cloud Practitioner credential on Credly (opens in a new tab)']],
  ['.certificacao-selo', 'alt', ['AWS Certified Cloud Practitioner badge, Foundational level']],
  ['.projeto-card img', 'alt', ['CCControl dashboard', 'Dentix login screen', 'Eliane Carneiro Imóveis property catalog and search filters', 'DevOps project', 'QR code generator', 'AI resume analyzer']],
  ['#name', 'title', ['Enter your first and last name.']],
  ['#email', 'title', ['Enter a valid email address, such as name@domain.com.']]
];

function portfolioText(portuguese, english) {
  return document.documentElement.lang === 'en' ? english : portuguese;
}

function updateThemeLabel() {
  const button = document.getElementById('theme-toggle');
  const spider = document.documentElement.dataset.theme === 'spider';
  const label = spider
    ? portfolioText('Voltar ao tema original', 'Return to original theme')
    : portfolioText('Ativar identidade secreta', 'Activate secret identity');
  button.setAttribute('aria-label', label);
  button.title = label;
}

function initLanguage() {
  const entries = [];
  for (const [selector, values] of Object.entries(englishCopy)) {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (values[index] !== undefined) entries.push({ element, portuguese: element.innerHTML, english: values[index] });
    });
  }
  for (const [selector, attribute, values] of englishAttributes) {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (values[index] !== undefined) entries.push({ element, attribute, portuguese: element.getAttribute(attribute), english: values[index] });
    });
  }

  function applyLanguage(language) {
    const english = language === 'en';
    document.documentElement.lang = english ? 'en' : 'pt-BR';
    const resume = document.querySelector('.home-actions a[download]');
    const filename = english
      ? 'Lorenzo_Andreoli_Junior_Java_Developer_Resume.pdf'
      : 'CV_Lorenzo_Andreoli_Desenvolvedor_Java.pdf';
    resume.setAttribute('href', `assets/${filename}`);
    resume.setAttribute('download', filename);
    resume.setAttribute('hreflang', english ? 'en' : 'pt-BR');
    for (const entry of entries) {
      const value = english ? entry.english : entry.portuguese;
      if (entry.attribute) entry.element.setAttribute(entry.attribute, value);
      else entry.element.innerHTML = value;
    }
    const toggle = document.getElementById('language-toggle');
    toggle.textContent = english ? 'EN' : 'PT';
    const label = english ? 'Switch language to Portuguese' : 'Alterar idioma para inglês';
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
    document.getElementById('hamburguer').setAttribute('aria-label', portfolioText('Menu de navegação', 'Navigation menu'));
    const submit = document.getElementById('submit_button');
    if (submit.disabled) submit.textContent = portfolioText('Enviando...', 'Sending...');
    updateThemeLabel();
    try { localStorage.setItem('portfolio-language', document.documentElement.lang); } catch (_) {}
  }

  document.getElementById('language-toggle').addEventListener('click', () => {
    applyLanguage(document.documentElement.lang === 'en' ? 'pt-BR' : 'en');
  });
  let language = 'pt-BR';
  try { language = localStorage.getItem('portfolio-language') || language; } catch (_) {}
  applyLanguage(language);
}

document.addEventListener('DOMContentLoaded', initLanguage);
