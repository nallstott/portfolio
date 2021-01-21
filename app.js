const mouseCursor = document.querySelector(".cursor");

function cursor(e) {
	(mouseCursor.style.top = e.pageY + "px"), (mouseCursor.style.left = e.pageX + "px");
}

window.addEventListener("mousemove", cursor);

const links = document.querySelectorAll(".clickable-link");
const negativeLinks = document.querySelectorAll(".clickable-link-negative");
links.forEach((e) => {
	e.addEventListener("mouseleave", (e) => {
		mouseCursor.classList.remove("link-hover");
		mouseCursor.innerText = "";
	}),
		e.addEventListener("mouseover", (e) => {
			mouseCursor.classList.add("link-hover"), "VIDEO" == e.target.nodeName ? (mouseCursor.innerText = "PLAY") : (mouseCursor.innerText = "TAP");
		});
});
negativeLinks.forEach((e) => {
	e.addEventListener("mouseleave", () => {
		mouseCursor.classList.remove("link-hover-negative");
		mouseCursor.innerText = "";
	}),
		e.addEventListener("mouseover", () => {
			mouseCursor.classList.add("link-hover-negative");
			mouseCursor.innerText = "TAP";
		});
});
const closeNavTrigger = document.querySelector("#nav-close");
const openNavTrigger = document.querySelector("#nav-open");
const nav = document.querySelector("nav");
const navBody = document.querySelector(".nav-body");
closeNavTrigger.addEventListener("click", () => {
	enableScroll();
	nav.classList.remove("nav-open");
	mouseCursor.style.border = "2px solid #e9ec6e";
});
openNavTrigger.addEventListener("click", () => {
	disableScroll();
	nav.classList.add("nav-open");
	mouseCursor.style.border = "2px solid #1b1b1b";
});

var prevScrollpos = window.pageYOffset;
const navBar = document.querySelector(".nav-bar");
function hideAndRevealNavBar() {
	var e = window.pageYOffset;
	e > 120 ? (prevScrollpos > e ? navBar.classList.remove("nav-hide") : navBar.classList.add("nav-hide")) : navBar.classList.remove("nav-hide"),
		(prevScrollpos = e);
}

window.addEventListener("scroll", hideAndRevealNavBar);

const secretBox = document.querySelector("#secret-box");
passwordPage = document.querySelector(".password-page");
passwordPage.hasAttribute("protected") ? ((passwordPage.style.display = "flex"), console.log("sorry buddy")) : (passwordPage.style.display = "none"),
	"true" == Cookies.get("password") && (passwordPage.style.display = "none"),
	secretBox.addEventListener("click", () => {
		(passwordPage.style.display = "none"), Cookies.set("password", "true", { expires: 1 });
	});

let widthReference = document.querySelector(".project-body");
const qouteDestination = document.querySelector("#quote");
quoteAuthorDestination = document.querySelector("#quoteAuthor");
lowerRightQuote = document.querySelector(".lower-right-quote-mark");
quoteBox = document.querySelector(".quote-box");
quotes = [
	["Life ain't all blueberries and paper airplanes.", "—Chad, <i>The Bachelorette Season 12</i>"],
	[
		"Anyone who is capable of getting themselves made President should on no account be allowed to do the job.",
		"—Douglas Adams, <br><i>The Restaurant at the End of the Universe</i>",
	],
	[
		"If there's anything more important than my ego around, I want it caught and shot now.",
		"—Zaphod Beeblebrox, <br><i>The Hitchhiker's Guide to the Galaxy</i>",
	],
	["It's a rock fact!", "—Greg, <i>Over the Garden Wall</i>"],
	["My mother is a fish.", "—Vardaman, <i>As I Lay Dying</i>"],
	["I want to live!", "—Nico Robin, <i>One Piece</i>"],
	["I'm going to be<br>king of the pirates.", "—Monkey D. Luffy, <i>One Piece</i>"],
	["I want to show I can be a splendid ninja as well...", "—Rock Lee, <i>Naruto</i>"],
	[
		"Hahahahah OOOOHHHHAAAAA *snorts* haha oop yorker... NO ONE OPENS THE DOOR FOR A NATIVE <br>NEW YORKER!",
		"—Wendy Williams, <i>The Masked Singer</i>",
	],
	["I am a fountain of blood.<br>In the shape of a girl.", "—Björk, <i>Bachelorette Homogenic</i>"],
	["I like some of the Gaga songs. What the fuck does she know about cameras?!", "—Kanye West, <i>BBC Radio 1 - Zane Lowe</i>"],
	["Bitch, real G's move in silence like lasagna.", "—Lil Wayne, <i>6 Foot 7 Foot</i>"],
	["Look, I wanted to be an individual but my ma wouldn’t let me.", "—Erin, <i>Derry Girls</i>"],
	["I don't smoke either.<br>I just like meltin' stuff.", "—Orla, <i>Derry Girls</i>"],
	["Princess Carolyn! I met John Stamos!", "—Bojack Horseman, <i>Bojack Horseman</i>"],
	["What is this?<br>A crossover episode?!", "—Mr. Peanutbutter, <i>Bojack Horseman</i>"],
	["Don't you know the first law of physics? Anything that's fun costs at least eight dollars.", "—Eric Cartman, <i>South Park</i>"],
	["Fool me once,<br>fool me twice.<br>Fool me chicken<br>soup with rice.", "—Todd Chavez, <i>Bojack Horseman</i>"],
];

function generateQuote() {
	let e = Math.floor(Math.random() * quotes.length);
	(qouteDestination.innerHTML = quotes[e][0]),
		(quoteAuthorDestination.innerHTML = quotes[e][1]),
		(lowerRightQuote.style.right =
			3 == e || 4 == e || 5 == e || 15 == e || 13 == e ? "-3vw" : 2 == e || 16 == e || 12 == e || 11 == e ? "4vw" : 9 == e ? "1vw" : "2vw");
}

function scrollAppear() {
	var e = window.innerHeight / 1.5,
		o = document.getElementsByClassName("appear-up-start");
	for (i = 0; i < o.length; i++) {
		var t = o[i];
		t.getBoundingClientRect().top < e && t.classList.add("appear-up-animate");
	}
}

function disableScroll() {
	(scrollTop = window.pageYOffset || document.documentElement.scrollTop),
		(scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
		(window.onscroll = function () {
			window.scrollTo(scrollLeft, scrollTop);
		});
}

function enableScroll() {
	window.onscroll = function () {};
}

generateQuote();
quoteBox.addEventListener("click", generateQuote);
window.addEventListener("load", () => {
	const e = document.querySelector(".loading-screen");
	(e.style.transition = "opacity 1s ease-in-out"),
		(e.style.opacity = "0"),
		e.addEventListener("transitionend", () => {
			e.style.display = "none";
		});
});
window.addEventListener("scroll", scrollAppear);

const observer = lozad();
observer.observe();
const allInitial = document.querySelectorAll(".load-first");
allInitial.forEach((asset) => observer.triggerLoad(asset));

console.log("Thanks for visiting! I coded this site from scratch. I hope you like it. Please let me know if anything breaks <3");
