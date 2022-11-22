debugger;

const a = 5;

function b () {
	return c ();
}

function c () {
	return d ();
}

function d () {
	console.log(a * a);
}

b();

// const a = 5;

// function double (a) {
// 	return a * a;
// }

// function logDouble(a) {
// 	console.log(double(a));
// }

// logDouble(a);