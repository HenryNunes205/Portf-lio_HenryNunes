
// ========================================
// 1. MENU MOBILE
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
    const menuAberto = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", menuAberto);
    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = menuAberto ? "✕" : "☰";
});


// Fechar menu após clicar em uma seção
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        menuToggle.textContent = "☰";
    });
});


// ========================================
// 2. ANO AUTOMÁTICO NO RODAPÉ
// ========================================

const currentYear = document.querySelector("#current-year");

currentYear.textContent = new Date().getFullYear();
