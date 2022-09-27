"use strict";

// old encapsulation and get / set

function User (email) {
	this.email = email;
	// this.password = password;
	let pass = "Qwerty#55!+smith";

	this.say = function () {
		console.log(`EMAIL: ${this.email}, PASSWORD: ${pass}`);
	}

	// getter & setter imitation

	this.get = function () {
		return pass;
	}

	this.set = function (newPass) {
		pass = newPass;
	}
}

const john = new User("john-smith@gmail.com");
console.log(john.get()); // get || "Qwerty#55!+smith"
john.set("test"); // set
console.log(john.get()); // get || "test"

// class encapsulation and get / set

class User {
	constructor (email) {
		this.email = email;
		// this._password = password;
	}
	#password = "alex#777";
	
	say() {
		// console.log(`EMAIL: ${this.email}, PASSWORD: ${this._password}`);
		console.log(`EMAIL: ${this.email}, PASSWORD: ${this.#password}`);
	}

	get pass () {
		return this.#password;
	}

	set pass (a) {
		this.#password = a
	}
}

const alex = new User("alex@mail.ru");
// console.log(alex.pass); // get
// alex.pass = 555; // set
// console.log(alex.pass); // get

//  static

class Main {
	constructor (name) {
		this.name = name;
	}

	say() {
		console.log(this.name);
	}

	static hello() {
		console.log("Hello from Main class");
	}

	static res = 55;
}

class Test extends Main {
	constructor (name) {
		super(name);
	}
}

// այ սենց ստատիկը ՉԻ ԱՇԽԱՏԵԼՈՒ
// const joe = new Main("Joe");
// console.log(joe.hello());
Main.hello();
Test.hello();

console.log(Main.res);
console.log(Test.res);