"use strict";

const box = document.getElementById("box");

box.addEventListener("touchmove", (e) => {
	const x = e.touches[0].screenX,
		  y = e.touches[0].screenY;
	
	box.style.cssText = `
		transform: translateX(${x}px) translateY(${y}px);
	`;

	console.log(e);
});

// box.addEventListener("touchstart", (e) => {
// 	console.log("Կպել ենք");
// });

// box.addEventListener("touchend", () => {
// 	console.log("Հանել ենք");
// });

// box.addEventListener("touchmove", () => {
// 	console.log("Շարժում ենք");
// });

// touches
// targetTouches
// changedTouches