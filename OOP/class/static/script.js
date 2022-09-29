"use strict";

class Main {
	static hello () {
		console.log("Hello from Main class");
	}

	static res = 105
}

class Test extends Main {}

Main.hello();
Test.hello();

console.log(Main.res);
console.log(Test.res);

// ներքևի օրինակներըՉԵՆ ԱՇԽԱՏԵԼՈՒ
// const some = new Main();
// some.hello();
// new Main().hello();