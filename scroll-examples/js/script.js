"use strict";

const text = document.querySelector("#text_container p");
const topBtn = document.querySelector("[data-top]");
const bottomBtn = document.querySelector("[data-bottom]");
const sitw = document.querySelector("[data-intoview]");
const span = document.querySelector("span");
const topElem = document.querySelector("#top");
const toBottom = document.querySelector("#bottom");


bottomBtn.addEventListener("click", () => {
	// text.scroll(0, text.scrollHeight);
	// text.scrollTo(0, text.scrollHeight);
	// text.scrollBy(0, text.scrollHeight);
	// այս գրելաձևը կարող ենք օգտագործել վերևում նշված բոլոր մեթոդների դեպքում
	text.scroll({
		top: text.scrollHeight,
		behavior: "smooth"
	});
});

topBtn.addEventListener("click", () => {
	// text.scroll(0, -text.scrollHeight);
	// text.scrollTo(0, -text.scrollHeight);
	// text.scrollBy(0, -text.scrollHeight);

	text.scroll({
		top: -text.scrollHeight,
		behavior: "smooth"
	});
});

sitw.addEventListener("click", () => {
	// start, center, end
	span.scrollIntoView({
		block: "center",
		behavior: "smooth"
	});
});

/*
	elem.scrollX = READ ONLY
	elem.scrollY = READ ONLY
*/

window.addEventListener("scroll", () => {
	if (window.scrollY >= 500) {
		topElem.style.display = "block";
		topElem.addEventListener("click", () => {
			document.documentElement.scrollIntoView({
				block: "start",
				behavior:"smooth"
			});
		});
	} else {
		topElem.style.display = "none";
	}
});

toBottom.addEventListener("click", () => {
	document.documentElement.scrollIntoView({
		block: "end",
		behavior:"smooth"
	});
});