import { textChanger } from "./textAnim.js";

textChanger();

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const headerOffset = 60; // You can adjust this offset to match your header height.

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

const button = document.querySelector(".mailSender");

button.addEventListener("click", () => {
  const landingPage = document.getElementById("contact");
  const landingPageRect = landingPage.getBoundingClientRect();
  window.scrollTo({
    top: landingPageRect.top + window.scrollY,
    behavior: "smooth",
  });
});
