const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const service = form.elements.service.value;
  const message = form.elements.message.value.trim();

  // Change this address to your real business email before publishing.
  const businessEmail = "hello@rsdigitalmarketing.com";
  const subject = encodeURIComponent("Website enquiry - " + service);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
  );
  document.getElementById("formHint").textContent =
    "Your email app should open now. If it doesn't, email us directly.";
  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
});
