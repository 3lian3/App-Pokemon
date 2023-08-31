const title = document.querySelector("h1");
const subtitle = document.querySelector(".subtitle");
const link = document.querySelector(".link");
const txt = "Bienvenue à l'infirmerie Pokemon";

function typewriter(text: string, index: number) {
  if (index > 3) subtitle.classList.add("active");
  if (index > 6) link.classList.add("active");
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

link.addEventListener("click", slideDown);

function slideDown(e) {
  window.scrollTo({
    top: document.querySelector(`${e.target.getAttribute("href")}`).offsetTop,
    behavior: "smooth",
  });
}
