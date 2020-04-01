const burger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");
const links = navLinks.querySelectorAll("li");

burger.addEventListener("click", () => {
    changeClass();
});

links.forEach(link => {
    link.addEventListener("click", () => {
        changeClass();
    })
});

function changeClass() {
    burger.classList.toggle("toggle");
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    })
}