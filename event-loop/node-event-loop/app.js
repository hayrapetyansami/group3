const fs = require("fs");

setTimeout(() => {
	console.log("Hello");
}, 1000);

setImmediate(() => {
	console.log("Immediate");
});

// const buf = fs.readFileSync(__filename);
// console.log(buf.toString('utf8'));

fs.readFile(__filename, () => {
	console.log("File readed");
});

fs.writeFile(__dirname+"/"+"report.txt", "Hello dear report !!!", () => {
	console.log("File writed");
});

setTimeout(() => {
	for (let i = 0; i < 500_000_000; i++) {}
	console.log("Loop is done");
	Promise.resolve()
		.then(() => console.log("microTask inside loop #1"));
	process.nextTick(() => console.log("macroTask inside loop #1"));
}, 1000);

Promise.resolve()
	.then(() => console.log("microTask #1"));

process.nextTick(() => console.log("macroTask #1"));
process.nextTick(() => console.log("macroTask #2"));
process.nextTick(() => console.log("macroTask #3"));

console.log("init");
/*
	ցանկացած macroTask ավելի արագ է աշխատում
	քան ցանկացած microTask

	microTask => Promise (then, catch, finnaly, await)
	macroTask => Process.nextTick()
*/