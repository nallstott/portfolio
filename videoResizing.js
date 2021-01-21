const videoContainers = document.querySelectorAll(".video-container");
const videos = document.querySelectorAll("video");

function aspectRatioConversion(aspectR, width) {
	if (aspectR === "4x5") {
		const newHeight = (width * 5) / 4;
		return newHeight;
	} else if (aspectR === "1x1") {
		const newHeight = width;
		return newHeight;
	} else if (aspectR === "9x16") {
		const newHeight = (width * 16) / 9;
		return newHeight;
	} else if (aspectR === "16x9") {
		const newHeight = (width * 9) / 16;
		return newHeight;
	} else if (aspectR === "1x1.5") {
		const newHeight = width * 1.5;
		return newHeight;
	} else {
		console.log(`${aspectR} is not a defined aspect ratio`);
		return;
	}
}

function videoResizing(numVids, aspectR, video) {
	if (numVids === 4) {
		let newVidWidth;
		if (screen.width > 768) {
			newVidWidth = widthReference.getBoundingClientRect().width * 0.17;
		} else {
			newVidWidth = widthReference.getBoundingClientRect().width * 0.9;
		}
		const newVidWidthStr = `${newVidWidth}px`;
		video.setAttribute("width", newVidWidthStr);
		const newVidHeight = aspectRatioConversion(aspectR, newVidWidth);
		const newVidHeightStr = `${newVidHeight}px`;
		video.setAttribute("height", newVidHeightStr);
	}
}

function resizePageVideos() {
	videoContainers.forEach((container) => {
		const containerVideos = container.querySelectorAll("video");
		containerVideos.forEach((video) => {
			const videoAspectRatio = video.getAttribute("aspectR");
			videoResizing(4, videoAspectRatio, video);
		});
	});
}

window.addEventListener("resize", resizePageVideos);
window.addEventListener("load", resizePageVideos);
window.addEventListener("reload", resizePageVideos);

// disable context menu
videos.forEach((video) => {
	video.addEventListener("contextmenu", (e) => {
		e.preventDefault();
	});
});
