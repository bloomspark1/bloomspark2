// Mobile menu
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}

// Reveal on scroll
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.88;

  document.querySelectorAll(".reveal").forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < trigger) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// FAQ
document.querySelectorAll(".faq-item").forEach((item) => {
  const button = item.querySelector(".faq-question");

  if (button) {
    button.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  }
});

// Brand selector
document.querySelectorAll(".brand-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedBrand = tab.dataset.brand;

    document.querySelectorAll(".brand-tab").forEach((btn) =>
      btn.classList.remove("active")
    );

    document.querySelectorAll(".brand-panel").forEach((panel) =>
      panel.classList.remove("active")
    );

    tab.classList.add("active");

    const targetPanel = document.getElementById(selectedBrand);
    if (targetPanel) {
      targetPanel.classList.add("active");
    }
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// MAGIC PARTICLES
const magic = document.querySelector(".magic");

if (magic) {
  setInterval(() => {
    const dot = document.createElement("span");

    dot.style.left = Math.random() * 200 + "px";
    dot.style.top = Math.random() * 200 + "px";

    magic.appendChild(dot);

    setTimeout(() => {
      dot.remove();
    }, 2000);

  }, 200);
}

