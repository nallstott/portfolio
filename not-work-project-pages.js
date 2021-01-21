const roseBook = document.querySelector("#roseBook");
// const isItJustMe = document.querySelector('#isItJustMe');
const yardXmaripoll = document.querySelector("#yardXmaripoll");
const her = document.querySelector("#her");
const dndCompendium = document.querySelector("#dnd-compendium");

roseBook.addEventListener("click", () => {
	window.location.href = "./projects/rose-book/rose-book.html";
});

// isItJustMe.addEventListener('click', () => {
//     window.location.href = "./projects/is-it-just-me/is-it-just-me.html";
// })

yardXmaripoll.addEventListener("click", () => {
	window.location.href = "./projects/yard-x-maripoll/yard-x-maripoll.html";
});

her.addEventListener("click", () => {
	window.location.href = "./projects/her/her.html";
});

dndCompendium.addEventListener("click", () => {
	window.location.href = "./projects/dnd-compendium/dnd-compendium.html";
});
