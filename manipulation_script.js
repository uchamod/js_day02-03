const numBox = document.getElementById("val");
const progress = document.getElementById("progres");
const color = document.getElementById("col");
const hero = document.getElementById("hero");
const hide = document.getElementById("hide");
const show = document.getElementById("show");

numBox.addEventListener("change", () => {
    progress.style.width = numBox.value + "px"; 
});

color.addEventListener("change", () => {
    hero.style.backgroundColor = color.value;
});

hide.addEventListener("click", () => {
    progress.classList.add("hidden");
});
show.addEventListener("click", () => {
    progress.classList.remove("hidden");
});