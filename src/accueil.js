var title = document.querySelector("h1");
var subtitle = document.querySelector(".subtitle");
var link = document.querySelector(".link");
var txt = "Bienvenue à l'infirmarie Pokemon";
function typewriter(text, index) {
    if (index > 3)
        subtitle.classList.add("active");
    if (index > 6)
        link.classList.add("active");
    if (index < text.length) {
        setTimeout(function () {
            title.innerHTML += "<span>".concat(text[index], "</span>");
            typewriter(text, index + 1);
        }, 200);
    }
}
setTimeout(function () {
    typewriter(txt, 0);
}, 300);
link.addEventListener("click", slideDown);
function slideDown(e) {
    // e.preventDefault();
    window.scrollTo({
        top: document.querySelector("".concat(e.target.getAttribute("href"))).offsetTop,
        behavior: "smooth",
    });
}
