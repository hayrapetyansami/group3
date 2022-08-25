"use strict";

const wrapper = document.querySelector("#wrapper");

// nodeName === "BUTTON"
// tagName === "BUTTON"
// localName === "button"
// type === "submit"

wrapper.addEventListener("click", (e) => {
	if (e.target && e.target.matches("button.this")) {
		console.log(e.target);
	}
});

// wrapper.addEventListener("click", (e) => {
// 	if (e.target && e.target.nodeName === "BUTTON") {
// 		console.log(e.target);
// 	}
// });

for (let i = 5; i <= 10; i++) {
	const elem = document.createElement("button");
	elem.textContent = i;

	if (i % 2 === 0) {
		elem.classList.add("this")
	}

	wrapper.append(elem);
}

// Elem.matches() !== Str.match(regExp);