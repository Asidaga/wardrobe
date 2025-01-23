const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "fas fa-times" : "fas fa-bars");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fas fa-bars");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header-btns", {
    ...scrollRevealOption,
    delay: 1500,
});

const banner = document.querySelector(".banner-container");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);
});

ScrollReveal().reveal(".new-card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".sale-image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".sale-content h2", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".sale-content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".sale-content", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".sale-btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".men-card, .women-card, .kids-card", {
    ...scrollRevealOption,
    interval: 500,
});

// Add interactivity to shop now buttons
document.querySelectorAll('.shop-now-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); 
        let parentSection = button.closest('.section-container');
        console.log('Shop Now button clicked for:', parentSection.id);
    });
});