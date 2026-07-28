const ICONS = {
  delege:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>',
  gozlemci:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  basin:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v1a7 7 0 0 0 14 0v-1"/><path d="M12 18v3"/><path d="M8 21h8"/></svg>',
  vekil:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1"/><circle cx="9" cy="7" r="3"/><path d="M22 20v-1a4 4 0 0 0-3-3.87"/><path d="M16 4.13a4 4 0 0 1 0 7.75"/></svg>',
};

const APPLICATION_CATEGORIES = [
  {
    title: "Delege",
    icon: ICONS.delege,
    url: "https://forms.gle/j9rKdTuR4Z9uPAJD6",
  },
  {
    title: "Gözlemci",
    icon: ICONS.gozlemci,
    url: "https://forms.gle/BmUw6aWdP1T2Czj19",
  },
  {
    title: "Basın",
    icon: ICONS.basin,
    url: "https://forms.gle/mBvwGSRwbhCr3ffh9",
  },
  {
    title: "Vekil",
    icon: ICONS.vekil,
    url: "https://forms.gle/259QTRTC8cNo5ZSVA",
  },
];

const applyGrid = document.getElementById("applyCategories");

APPLICATION_CATEGORIES.forEach((cat) => {
  const card = document.createElement("a");
  card.className = "apply-card";
  card.href = cat.url;
  card.target = "_blank";
  card.rel = "noopener";
  card.innerHTML = `
    <span class="apply-card-icon">${cat.icon}</span>
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
