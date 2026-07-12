const APPLICATION_CATEGORIES = [
  {
    title: "Delege",
    url: "https://forms.google.com/KATILIMCI-FORM-LINKI",
  },
  {
    title: "Organizasyon Ekibi",
    url: "https://forms.google.com/ORGANIZASYON-FORM-LINKI",
  },
  {
    title: "Basın ve Medya",
    url: "https://forms.google.com/BASIN-FORM-LINKI",
  },
];

const EVENT_DATE = new Date(2026, 8, 4, 9, 0, 0);

const applyGrid = document.getElementById("applyCategories");

APPLICATION_CATEGORIES.forEach((cat) => {
  const card = document.createElement("a");
  card.className = "apply-card";
  card.href = cat.url;
  card.target = "_blank";
  card.rel = "noopener";
  card.innerHTML = `
    <h3 class="apply-card-title">${cat.title}</h3>
    <span class="apply-card-btn">Başvur</span>
  `;
  applyGrid.appendChild(card);
});

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const header = document.getElementById("siteHeader");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

const cdDays = document.getElementById("cdDays");
const cdHours = document.getElementById("cdHours");
const cdMins = document.getElementById("cdMins");
const cdSecs = document.getElementById("cdSecs");

function updateCountdown() {
  const diff = EVENT_DATE - new Date();

  if (diff <= 0) {
    cdDays.textContent = "0";
    cdHours.textContent = "0";
    cdMins.textContent = "0";
    cdSecs.textContent = "0";
    clearInterval(countdownTimer);
    return;
  }

  cdDays.textContent = Math.floor(diff / 86400000);
  cdHours.textContent = Math.floor((diff % 86400000) / 3600000);
  cdMins.textContent = Math.floor((diff % 3600000) / 60000);
  cdSecs.textContent = Math.floor((diff % 60000) / 1000);
}

updateCountdown();
const countdownTimer = setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
