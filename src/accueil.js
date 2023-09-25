var title = document.querySelector("h1");
var subtitle = document.querySelector(".subtitle");
var link = document.querySelector(".link");
var txt = "Bienvenue à l'infirmerie Pokemon";
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
    var targetElement = document.querySelector("".concat(e.target.getAttribute("href")));
    if (targetElement !== null) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
        });
    }
    else {
        console.error("Élément cible non trouvé");
    }
}
