"use strict";

let firstState = false;
const first = setTimeout(() => {
	console.log(15 * 2);
	firstState = true;

	if (firstState) {
		clearTimeout(first);
		console.log("done");
	}
}, 3000);