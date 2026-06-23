document.addEventListener("DOMContentLoaded", () => {
  const currentYear = document.querySelectorAll("[data-current-year]");
  currentYear.forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const isHidden = mobileMenu.hasAttribute("hidden");
      if (isHidden) {
        mobileMenu.removeAttribute("hidden");
        menuButton.setAttribute("aria-expanded", "true");
      } else {
        mobileMenu.setAttribute("hidden", "");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = document.querySelectorAll("[data-current-year]");
  currentYear.forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const isHidden = mobileMenu.hasAttribute("hidden");
      if (isHidden) {
        mobileMenu.removeAttribute("hidden");
        menuButton.setAttribute("aria-expanded", "true");
      } else {
        mobileMenu.setAttribute("hidden", "");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }
});
