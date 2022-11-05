"use strict";

const animOneBtn = document.querySelector("#anim1 button");
const animOneBox = document.querySelector("#anim1 #box-wrapper #box");
const animeTwoBtn = document.querySelector("#anim2 button");
const animeTwoImg = document.querySelector("#anim2 img");

// function customAnime () {
// 	let x = 0;

// 	const id = setInterval(frame, 20);

// 	function frame () {
// 		if (x === 300 - 12) {
// 			clearInterval(id);
// 		} else {
// 			x++;
// 			animOneBox.style.cssText = `
// 				top: ${x}px;
// 				left: ${x}px;
// 			`;
// 		}
// 	}
// }

// animOneBtn.addEventListener("click", customAnime);

let x = 0;
function reqAnimation() {
	x++;
	animOneBox.style.cssText = `
		top: ${x}px;
		left: ${x}px;
	`;

	if (x < 300 - 12) {
		requestAnimationFrame(reqAnimation);
	}
}

animOneBtn.addEventListener("click", () => requestAnimationFrame(reqAnimation));

// const id = requestAnimationFrame(reqAnimation);
// cancelAnimationFrame(id);


// animeTwoBtn
// animeTwoImg

let animalAnimation;

animeTwoBtn.addEventListener("click", newAnimate);

function newAnimate () {
	if (!animalAnimation) {
		animalAnimation = animeTwoImg.animate([
			{filter: "hue-rotate(0deg)"},
			{filter: "hue-rotate(90deg)"},
			{filter: "hue-rotate(180deg)"},
			{filter: "hue-rotate(270deg)"},
			{filter: "hue-rotate(360deg)"},
		], {
			duration: 800,
			iterations: Infinity
		});
	} else if (animalAnimation.playState === "paused") {
		animalAnimation.play();
	} else {
		animalAnimation.pause();
	}
}

// {transform: "translateY(0px)"},
// {transform: "translateY(50px)"},
// {transform: "translateY(-50px)"},
// {transform: "translateY(0px)"},

// {filter: "blur(10px)"},
// {filter: "blur(9px)"},
// {filter: "blur(8px)"},
// {filter: "blur(7px)"},
// {filter: "blur(6px)"},
// {filter: "blur(5px)"},
// {filter: "blur(4px)"},
// {filter: "blur(3px)"},
// {filter: "blur(2px)"},
// {filter: "blur(1px)"},
// {filter: "blur(0px)"}

// {filter: "grayscale(100%)"},
// {filter: "grayscale(90%)"},
// {filter: "grayscale(80%)"},
// {filter: "grayscale(70%)"},
// {filter: "grayscale(60%)"},
// {filter: "grayscale(50%)"},
// {filter: "grayscale(40%)"},
// {filter: "grayscale(30%)"},
// {filter: "grayscale(20%)"},
// {filter: "grayscale(10%)"},
// {filter: "grayscale(0%)"},