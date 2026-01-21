const openBtn = document.getElementById("menu-hamburguer");
const closeBtn = document.getElementById("close-menu");
const menuMobile = document.getElementById("menu-mobile");
const overlay = document.getElementById("mobile-overlay");

if (openBtn && menuMobile && overlay) {
  function openMenu() {
    menuMobile.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  function closeMenu() {
    menuMobile.classList.add("hidden");
    overlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  openBtn.addEventListener("click", () => {
    const isOpen = !menuMobile.classList.contains("hidden");
    isOpen ? closeMenu() : openMenu();
  });

  closeBtn?.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  menuMobile.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.tagName === "A") closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}