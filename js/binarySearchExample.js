// "use strict";

function ourBinary (searchItem, arr) {
	let index = 0, 
	currentLength = arr.length,
	state;

	while (index < currentLength) {
		// state = Math.floor((index + currentLength) / 2);
		state = parseInt((index + currentLength) / 2);
		if (searchItem <= arr[state]) {
			currentLength = state;
		} else {
			index = state + 1;
		}
	}
	
	if (arr[index] === searchItem) {
		return index;
	} else {
		return -1;
	}
}

const item = ourBinary(7, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(item);