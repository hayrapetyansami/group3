"use strict";

// GET & SET

const person = {
	name: "John Smith",
	age: 29,

	get userAge () {
		return this.age;
	},

	set userAge (arg) {
		this.age = arg;
	}
};

console.log(person.userAge); // get
person.userAge = 50; // set
console.log(person.userAge); // get