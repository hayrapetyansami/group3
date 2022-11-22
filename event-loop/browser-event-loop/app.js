"use strict";

setTimeout(() => console.log("init"), 0);

Promise.resolve()
	.then(() => console.log("Resolved 1"))
	.then(() => console.log("Resolved 1 test"));
	
queueMicrotask(() => console.log("Hello"));

Promise.resolve()
	.then(() => console.log("Resolved 2"));

Promise.resolve()
	.then(() => console.log("Resolved 3"));

console.log("My code");

// microtask: Promise(then, catch, finnaly, await);