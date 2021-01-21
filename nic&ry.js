const nic = document.querySelector(".nic");
const ry = document.querySelector(".ry");
const bodyContent = document.querySelector(".body-content");
const initialAnimation = document.querySelector(".initial-animation");
const nicImg = document.querySelector(".nic img");
const ryImg = document.querySelector(".ry img");

function revealCta(e) {
	const ctaBlock = e.target.querySelector(".cta");
	const ctaBlockH3 = e.target.querySelector(".cta H3");
	ctaBlock.classList.add("cta-appear");
	ctaBlockH3.classList.add("cta-h3-appear");
}

function hideCta(e) {
	const ctaBlock = e.target.querySelector(".cta");
	const ctaBlockH3 = e.target.querySelector(".cta h3");
	ctaBlock.classList.remove("cta-appear");
	ctaBlockH3.classList.remove("cta-h3-appear");
}

nic.addEventListener("mouseenter", revealCta);
nic.addEventListener("mouseleave", hideCta);
nic.addEventListener("click", () => {
	bodyContent.style.opacity = "0";
	bodyContent.addEventListener("transitionend", () => {
		window.location.href = "./index.html";
	});
});
ry.addEventListener("mouseenter", revealCta);
ry.addEventListener("mouseleave", hideCta);
ry.addEventListener("click", () => {
	bodyContent.style.opacity = "0";
	bodyContent.addEventListener("transitionend", () => {
		window.location.href = "https://www.ryradermacher.com/";
	});
});

//cursor js
const mouseCursor = document.querySelector(".cursor");
window.addEventListener("mousemove", cursor);

function cursor(e) {
	mouseCursor.style.top = e.pageY + "px";
	mouseCursor.style.left = e.pageX + "px";
}

//cursor transformation
const links = document.querySelectorAll(".clickable-link");
links.forEach((link) => {
	link.addEventListener("mouseleave", (e) => {
		mouseCursor.classList.remove("link-hover");
		mouseCursor.innerText = "";
	});
	link.addEventListener("mouseover", (e) => {
		mouseCursor.classList.add("link-hover");
		if (e.target.nodeName == "VIDEO") {
			mouseCursor.innerText = "PLAY";
		} else {
			mouseCursor.innerText = "TAP";
		}
	});
});

let animationCounter = 0;
initialAnimation.addEventListener("animationend", () => {
	animationCounter++;
	if (animationCounter == 4) {
		initialAnimation.style.pointerEvents = "none";
	}
});

//password page removal
const secretBox = document.querySelector("#secret-box");
const passwordPage = document.querySelector(".password-page");
if (passwordPage.hasAttribute("protected")) {
	passwordPage.style.display = "flex";
	console.log(
		"Sorry buddy. Come back soon. If you're supposed to be able to access this page, contact Nic directly."
	);
} else {
	passwordPage.style.display = "none";
}
if (Cookies.get("password") == "true") {
	passwordPage.style.display = "none";
}
secretBox.addEventListener("click", () => {
	passwordPage.style.display = "none";
	Cookies.set("password", "true", { expires: 1 });
});
