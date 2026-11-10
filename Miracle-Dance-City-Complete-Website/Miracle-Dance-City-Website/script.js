/*
  MDC Dance Academy website settings.
  IMPORTANT: Replace the WhatsApp number and Instagram URL below before publishing.
  WhatsApp format: country code + mobile number, digits only (India: 91XXXXXXXXXX).
*/
const MDC_WHATSAPP_NUMBER = "91XXXXXXXXXX";
const MDC_INSTAGRAM_URL = "https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/";

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

function isWhatsAppConfigured() {
  return /^\d{10,15}$/.test(MDC_WHATSAPP_NUMBER) && !MDC_WHATSAPP_NUMBER.includes("X");
}

function whatsappUrl(message) {
  return `https://wa.me/${MDC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const form = document.getElementById("admissionForm");
const formError = document.getElementById("formError");

form.addEventListener("submit", event => {
  event.preventDefault();
  formError.textContent = "";

  if (!isWhatsAppConfigured()) {
    formError.textContent = "MDC's WhatsApp number has not been configured yet. Please contact the academy directly.";
    return;
  }

  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const message = [
    "Hello MDC Dance Academy! I would like to enquire about admissions.",
    "",
    `Student name: ${data.get("studentName")}`,
    `Age: ${data.get("age")}`,
    `Contact number: ${data.get("phone")}`,
    `Additional message: ${data.get("message") || "None"}`,
    "",
    "Please share the available dance batches, class timings and fee details. Thank you!"
  ].join("\n");

  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
});

const whatsappTargets = [
  document.getElementById("contactWhatsapp"),
  document.getElementById("floatingWhatsapp")
];
whatsappTargets.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    if (!isWhatsAppConfigured()) {
      document.getElementById("admission").scrollIntoView({behavior:"smooth"});
      formError.textContent = "Please configure MDC's WhatsApp number in script.js before using this enquiry button.";
      return;
    }
    window.open(whatsappUrl("Hello MDC Dance Academy! I would like to know more about your dance classes."), "_blank", "noopener,noreferrer");
  });
});

function setInstagramLinks() {
  const configured = MDC_INSTAGRAM_URL.includes("YOUR_INSTAGRAM_USERNAME")
    ? "https://www.instagram.com/"
    : MDC_INSTAGRAM_URL;
  ["instagramLink", "contactInstagram"].forEach(id => {
    const link = document.getElementById(id);
    if (link) link.href = configured;
  });
}
setInstagramLinks();
