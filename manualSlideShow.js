let slide1Counter = 2;
let slide2Counter = 2;
let slide3Counter = 2;
let slide4Counter = 2;

function advanceSlide(carousel) {
	const carouselLength = carousel.querySelectorAll("img").length;
	let currentSlide;
	switch (Number(carousel.getAttribute("currentslide"))) {
		case 1:
			currentSlide = slide1Counter;
			break;
		case 2:
			currentSlide = slide2Counter;
			break;
		case 3:
			currentSlide = slide3Counter;
			break;
		case 4:
			currentSlide = slide4Counter;
			break;
		default:
			console.log("something is broken");
	}

	let currentTransformation = `translateX(-${currentSlide}00%)`;

	if (currentSlide < carouselLength) {
		currentSlide++;
		carousel.style.transition = "all 0.75s ease-in-out";
		carousel.style.transform = currentTransformation;
		switch (Number(carousel.getAttribute("currentslide"))) {
			case 1:
				slide1Counter++;
				break;
			case 2:
				slide2Counter++;
				break;
			case 3:
				slide3Counter++;
				break;
			case 4:
				slide4Counter++;
				break;
			default:
		}

		carousel.style.transition = "all 0.75s ease-in-out";
		carousel.style.transform = currentTransformation;
		carousel.addEventListener("transitionend", () => {
			if (currentSlide === carouselLength) {
				carousel.style.transition = "none";
				carousel.style.transform = "translateX(-100%)";
				currentSlide = 2;
				switch (Number(carousel.getAttribute("currentslide"))) {
					case 1:
						slide1Counter = 2;
						break;
					case 2:
						slide2Counter = 2;
						break;
					case 3:
						slide3Counter = 2;
						break;
					case 4:
						slide4Counter = 2;
						break;
					default:
				}
			}
		});
	}
}

function reverseSlide(carousel) {
	const carouselLength = carousel.querySelectorAll("img").length;
	let currentSlide;
	switch (Number(carousel.getAttribute("currentslide"))) {
		case 1:
			currentSlide = slide1Counter;
			break;
		case 2:
			currentSlide = slide2Counter;
			break;
		case 3:
			currentSlide = slide3Counter;
			break;
		case 4:
			currentSlide = slide4Counter;
			break;
		default:
	}

	if (currentSlide > 1) {
		currentSlide--;
		carousel.style.transition = "all 0.75s ease-in-out";
		let currentTransformation;
		currentTransformation = `translateX(-${currentSlide - 1}00%)`;
		carousel.style.transform = currentTransformation;
		switch (Number(carousel.getAttribute("currentslide"))) {
			case 1:
				slide1Counter--;
				break;
			case 2:
				slide2Counter--;
				break;
			case 3:
				slide3Counter--;
				break;
			case 4:
				slide4Counter--;
				break;
			default:
		}

		carousel.style.transition = "all 0.75s ease-in-out";
		carousel.style.transform = currentTransformation;
		carousel.addEventListener("transitionend", () => {
			if (currentSlide <= 1) {
				carousel.style.transition = "none";
				currentSlide = carouselLength - 1;
				carousel.style.transform = `translateX(-${currentSlide - 1}00%)`;
				switch (Number(carousel.getAttribute("currentslide"))) {
					case 1:
						slide1Counter = currentSlide;
						break;
					case 2:
						slide2Counter = currentSlide;
						break;
					case 3:
						slide3Counter = currentSlide;
						break;
					case 4:
						slide4Counter = currentSlide;
						break;
					default:
				}
			}
		});
	}
}

const projectBody = document.querySelector(".project-body");
projectBody.addEventListener("click", (e) => {
	if (e.target.classList.contains("next-slide-btn")) {
		const clickedNextSlideBtn = e.target;
		const relativeBox = clickedNextSlideBtn.parentElement.nextSibling.nextSibling;
		advanceSlide(relativeBox);
	}
	if (e.target.classList.contains("prev-slide-btn")) {
		const clickedPrevSlideBtn = e.target;
		const relativeBox = clickedPrevSlideBtn.parentElement.nextSibling.nextSibling;
		reverseSlide(relativeBox);
	}
});

//resize slideshow images by height
const allManSlideShowImgBoxes = document.querySelectorAll(".clickable-image-carousel");

function resize(imageBoxes) {
	let newAspectRatio;
	imageBoxes.forEach((imageBox) => {
		aspectRatio = imageBox.getAttribute("aspect");
		switch (aspectRatio) {
			case "16x9":
				newAspectRatio = 9 / 16;
				break;
			case "18x9":
				newAspectRatio = 9 / 18;
				break;
			case "2500x1053":
				newAspectRatio = 1053 / 2500;
				break;
			case "3x2":
				newAspectRatio = 2 / 3;
				break;
			case "2x1":
				newAspectRatio = 1 / 2;
				break;
			case "2500x893":
				newAspectRatio = 893 / 2500;
				break;
			default:
				newAspectRatio = 9 / 16;
				break;
		}
		imageBoxObj = imageBox.getBoundingClientRect();
		const width = imageBoxObj.width;
		const height = `${width * newAspectRatio}px`;
		imageBoxImages = imageBox.querySelectorAll("img");
		imageBoxImages.forEach((image) => {
			image.style.height = height;
			image.style.maxheight = height;
		});
	});
}

window.addEventListener("load", () => {
	resize(allManSlideShowImgBoxes);
});
window.addEventListener("resize", () => {
	resize(allManSlideShowImgBoxes);
});
window.addEventListener("reload", () => {
	resize(allManSlideShowImgBoxes);
});
