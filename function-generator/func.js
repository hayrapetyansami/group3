"use strict";

function* username () {
	yield "a";
	yield "l";
	yield "e";
	yield "x";
}


// for (let key of username()) {
// 	console.log(key);
// }


// const some = username();

// console.log(some.next().value);
// console.log(some.next().value);
// console.log(some.next().value);
// console.log(some.next().value);
// console.log(some.next().done);

function* counter (n) {
	for (let i = 0; i <= n; i++) {
		yield i;
	}
}

const count = counter(4);
// let state = true;
let next;

// while (state) {
// 	next = count.next();
// 	console.log(next);
// 	if (next.done === true) state = false;
// }

do {
	next = count.next();
	console.log(next);
} while(next.done === false);