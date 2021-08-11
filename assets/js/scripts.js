// Burger menu toggle
function burgerToggle() {
    const navLinks = document.querySelector("#nav-links");
    const toggler = document.querySelector(".nav-btn");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
        toggler.style.background = "";
    } else {
        navLinks.style.display = "flex";
        toggler.style.background = "url('assets/images/icon-close.svg') center no-repeat";
    }
}