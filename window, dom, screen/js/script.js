"use strict";

const box = document.querySelector("#box");
const btn = document.querySelector("#btn");

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(`width: ${width}`);
// console.log(`height: ${height}`);

/* 
	offsetWidth: Number
	offsetHeight: Number
	offsetTop: Number
	offsetLeft: Number
	offsetParent: HTML TAG
*/

// btn.addEventListener("click", () => {
// 	// box.style.height = box.scrollHeight +  2 + "px";
// });

// console.log(box.getBoundingClientRect());// DOMRect Object

const a = window.getComputedStyle(box);
console.log(a.display);
console.log(window.getComputedStyle(box).getPropertyValue("display"));
console.log(window.getComputedStyle(box).display);

