const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h5", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .links", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 500,
});
ScrollReveal().reveal(".about__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".services__container h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__item", {
  ...scrollRevealOption,
  interval: 300,
  delay: 1000,
});

// Função para mudar a cor do tema
const colorSelectors = document.querySelectorAll(".theme-switcher .color");

colorSelectors.forEach(colorSelector => {
  colorSelector.addEventListener("click", () => {
    document.documentElement.style.setProperty("--primary-color", colorSelector.dataset.color);
  });
});
// Scroll Reveal para a seção de portfólio
ScrollReveal().reveal(".portfolio__item", {
  ...scrollRevealOption,
  interval: 300,
  delay: 500,
});
// Scroll Reveal para a seção de rodapé
ScrollReveal().reveal(".footer__container, .footer__bottom", {
  ...scrollRevealOption,
  delay: 500,
});



const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle() {
  const size = Math.random() * 5 + 2;
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: size,
    speedY: Math.random() * 3 + 1,
    opacity: Math.random() * 0.5 + 0.5
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle, index) => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(192, 192, 192, ${particle.opacity})`;
    ctx.fill();
    particle.y += particle.speedY;
    if (particle.y > canvas.height) {
      particles.splice(index, 1);
      createParticle();
    }
  });
  requestAnimationFrame(animateParticles);
}

for (let i = 0; i < 100; i++) {
  createParticle();
}

animateParticles();
