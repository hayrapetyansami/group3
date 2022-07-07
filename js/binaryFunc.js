"use strict";
const arrStr = ["c", "b", "a"].sort();
const arrNum = [];

for (let i = 0; i <= 100; i++) {
	arrNum.push(i);
}

function ourBinaryFunc(searchItem, arr) {
	let index = 0,
	currenLength = arr.length,
	state;
	// let counter = 0;

	while (index < currenLength) {
		state = Math.floor((index + currenLength) / 2);
		// state = parseInt((index + currenLength) / 2);
		if (searchItem <= arr[state]) {
			currenLength = state;
			// counter++;
		} 
		
		// else if (searchItem === arr[state]) {
		// 	break;
		// } 
		
		else {
			index = state + 1;
		}
	}

	// console.log(counter);

	if (arr[index] === searchItem) {
		return index;
	} else {
		return -1;
	}
}

const test = ourBinaryFunc(51, arrNum);
console.log(test);