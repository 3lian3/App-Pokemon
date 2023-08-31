const title = document.querySelector("h1");
const subtitle = document.querySelector(".subtitle");
const Link = document.querySelector("link");
const txt = "Bienvenue à l'infirmarie Pokemon";
function typewriter(text, index) {
    if (index > 3)
        subtitle.classList.add("active");
    if (index > 6)
        Link.classList.add("active");
    if (index < text.length) {
        setTimeout(() => {
            title.innerHTML += `<span>${text[index]}</span>`;
            typewriter(text, index + 1);
        }, 200);
    }
}
setTimeout(() => {
    typewriter(txt, 0);
}, 300);
Link.addEventListener("click", slideDown);
function slideDown(e) {
    e.preventDefault();
    window.scrollTo({
        top: document.querySelector(`${e.target.getAttribute("href")}`).offsetTop,
        behavior: "smooth",
    });
}
//# sourceMappingURL=accueil.js.map