// automatic slideshow
if (document.querySelectorAll(".auto-image-carousel")) {
	const autoImageCarousels = document.querySelectorAll(".auto-image-carousel");
	autoImageCarousels.forEach((carousel) => {
		const imageCarouselBoxes = carousel.querySelector(".image-carousel-box");
		function autoImageCarouselFunction() {
			const slideCount = imageCarouselBoxes.querySelectorAll("img").length;
			let currentSlide = 1;
			setInterval(() => {
				let currentTransformation = `translateX(-${currentSlide}00%)`;
				if (currentSlide < slideCount) {
					imageCarouselBoxes.style.transition = "all 0.75s ease-in-out";
					imageCarouselBoxes.style.transform = currentTransformation;
					currentSlide++;
					imageCarouselBoxes.addEventListener("transitionend", () => {
						if (currentSlide === slideCount) {
							imageCarouselBoxes.style.transition = "none";
							imageCarouselBoxes.style.transform = "translateX(0%)";
							currentSlide = 1;
						}
					});
				}
			}, 3000);
		}
		autoImageCarouselFunction();
	});
}

//resize slideshow images by height
const allAutoSlideShowImgBoxes = document.querySelectorAll(".auto-image-carousel");

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
	resize(allAutoSlideShowImgBoxes);
});
window.addEventListener("resize", () => {
	resize(allAutoSlideShowImgBoxes);
});
window.addEventListener("reload", () => {
	resize(allAutoSlideShowImgBoxes);
});
