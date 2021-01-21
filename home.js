const bjsProject = document.querySelector("#bjs-wholesale-club");
const culturelle = document.querySelectorAll(".culturelle");
const goldbond = document.querySelector("#goldbond");
const workPageLink = document.querySelector("#work-page-link");
const aboutPageLink = document.querySelector("#about-page-link");

bjsProject.addEventListener("click", (e) => {
	window.location.href =
		"./projects/bjs-wholesale-club/bjs-wholesale-club.html";
});

culturelle.forEach((project) => {
	project.addEventListener("click", () => {
		window.location.href = "./projects/culturelle/culturelle.html";
	});
});
// culturelle.addEventListener('click', (e) => {
//     window.location.href = "./projects/culturelle/culturelle.html";
// })

goldbond.addEventListener("click", (e) => {
	window.location.href = "./projects/gold-bond-cys/gold-bond-cys.html";
});

workPageLink.addEventListener("click", (e) => {
	window.location.href = "./work.html";
});

aboutPageLink.addEventListener("click", (e) => {
	window.location.href = "./about.html";
});
