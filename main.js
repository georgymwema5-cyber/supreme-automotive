// SUPRÊME AUTOMOTIVE — interactions
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "✕" : "☰";
  });
}

const cars = {
  phantom: { title: "PHANTOM GT", description: "Une présence sculptée pour la route. Un esprit résolument sportif.", copy: "Un coupé conceptuel imaginé pour celles et ceux qui aiment les lignes tendues et les caractères affirmés.", image: "car-one" },
  terra: { title: "TERRA X", description: "L'appel des grands espaces. Le caractère d'un explorateur.", copy: "Un concept 4×4 qui associe allure robuste, posture affirmée et envie d'évasion.", image: "car-two" },
  velocity: { title: "VELOCITY S", description: "L'élégance du grand tourisme. L'énergie du mouvement.", copy: "Une silhouette sportive pensée pour conjuguer présence, confort et dynamisme.", image: "car-three" }
};
const params = new URLSearchParams(window.location.search);
const car = cars[params.get("car") || "phantom"];
const title = document.getElementById("detail-title");
if (title) {
  title.innerHTML = `${car.title.replace(" ", " <em>")}.</em>`;
  document.getElementById("detail-description").textContent = car.description;
  document.getElementById("detail-copy").textContent = car.copy;
  document.getElementById("detail-image").className = `detail-image ${car.image}`;
  document.title = `${car.title} — SUPRÊME AUTOMOTIVE`;
  document.getElementById("detail-contact").href = `contact.html?vehicle=${encodeURIComponent(car.title)}`;
}

const form = document.getElementById("contact-form");
if (form) {
  const vehicle = params.get("vehicle");
  if (vehicle) form.elements.subject.value = "Un véhicule précis";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`SUPRÊME AUTOMOTIVE — ${data.get("subject")}`);
    const body = encodeURIComponent(`Nom : ${data.get("name")}\nE-mail : ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:contact@supreme-automotive.com?subject=${subject}&body=${body}`;
  });
}


// Cinematic interactions: progress, reveal, gentle depth and accessible motion.
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.innerHTML = "<span></span>";
  document.body.prepend(progress);
  const progressBar = progress.firstElementChild;
  const header = document.querySelector(".site-header");
  let ticking = false;

  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { window.requestAnimationFrame(updateScroll); ticking = true; }
  }, { passive: true });
  updateScroll();

  const revealItems = document.querySelectorAll(
    "main section:not(.hero):not(.page-hero), .vehicle-card, .catalogue-card, .value-item, .footer-main"
  );
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.body.classList.add("reveal-ready");
    revealItems.forEach((item, index) => {
      item.classList.add("reveal");
      if (item.matches(".vehicle-card,.catalogue-card,.value-item")) {
        item.dataset.delay = String((index % 3) + 1);
      }
    });
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    revealItems.forEach(item => observer.observe(item));
  }

  // Subtle pointer depth on large screens only; disabled for touch and reduced motion.
  if (!reduceMotion && window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
    document.querySelectorAll(".vehicle-card,.catalogue-card").forEach(card => {
      card.addEventListener("pointermove", event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        card.style.transform = `translateY(-4px) perspective(900px) rotateX(${-y * 2}deg) rotateY(${x * 2}deg)`;
      });
      card.addEventListener("pointerleave", () => { card.style.transform = ""; });
    });
  }

  // Close the mobile menu after navigation and keep its accessibility state accurate.
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menu && nav) {
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.textContent = "☰";
    }));
  }
})();
