const navToggle = document.querySelector(".menu-button");
// Tambien podriamos hacer un querySelectorAll, pero asi es mas facil
const nav = document.querySelector("nav");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-is-open");
});

// Esto es para que no se lockee el scroll
nav.addEventListener("click", () => {
    document.body.classList.remove("nav-is-open");
});