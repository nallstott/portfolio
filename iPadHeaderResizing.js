const fullHeaderLines = document.querySelectorAll(".full-header-line");
const centerHeaderLine = document.querySelectorAll(".nic-allstott-center-line");
const centerLinePhrase = document.querySelectorAll(".center-title");
const subPageHeader = document.querySelector(".sub-page-header");

const resizeSubPageHeader = (lines) => {
	if (screen.width < 1400 && screen.height > 1300) {
		lines.forEach((line) => {
			line.style.fontSize = "13vh";
			line.style.height = 35 / 3 + "vh";
			subPageHeader.style.height = "25vh";
		});
	}
};

function resizeAll() {
	resizeSubPageHeader(centerHeaderLine);
	resizeSubPageHeader(fullHeaderLines);
	resizeSubPageHeader(centerLinePhrase);
}
window.addEventListener("resize", resizeAll);
window.addEventListener("load", resizeAll);
window.addEventListener("reload", resizeAll);
