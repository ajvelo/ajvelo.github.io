(() => {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const menu = document.querySelector("[data-menu-toggle]");
  const links = document.querySelector(".nav-links");

  const current = () =>
    root.dataset.theme ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const label = () => {
    if (toggle) toggle.setAttribute("aria-label", `Switch to ${current() === "dark" ? "light" : "dark"} theme`);
  };

  toggle?.addEventListener("click", () => {
    const next = current() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    label();
  });

  menu?.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  label();
})();
