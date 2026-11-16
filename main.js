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
