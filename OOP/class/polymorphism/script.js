"use strict";

// example 1
// առանց պոլիմորֆիզմի

// function welcome() {
// 	console.log("Welcome to our webiste");
// }

// function hello (userName) {
// 	console.log(`Hello dear ${userName}`);
// }

// function greetings (firstName, lastName) {
// 	console.log(`Greetings ${firstName} ${lastName}`);
// }

// function lucky (n) {
// 	console.log(`Lucky number is ${n}`);
// }

// welcome();
// hello("John");
// greetings("John", "Smith");
// lucky(16);

// պոլիմորֆիզմով

function allInOne (...params) {
	if (params.length === 0) {
		console.log("Welcome to our webiste");
	} else if (params.length === 1 && typeof(params[0]) === "string") {
		console.log(`Hello dear ${params[0]}`);
	} else if (params.length === 1 && typeof(params[0]) === "number") {
		console.log(`Lucky number is ${params[0]}`);
	} else if (params.length === 2 && typeof(params[0]) === "string") {
		console.log(`Greetings ${params[0]} ${params[1]}`);
	}
}

allInOne();
allInOne("John");
allInOne(7);
allInOne("John", "Smith");

// example 2

const data = [
	{name: "John", id: 100},
	{name: "Alex", id: 101},
	{name: "Mike", id: 102}
];

// առանց պոլիմորֆիզմի
// function custom (type, res) {
// 	return data.filter(obj => obj[type]=== res);
// }

// console.log(custom("id", 101));
// console.log(custom("name", "John"));

// պոլիմորֆիզմով

function find (...params) {
	if (typeof(params[0]) === "string") {
		return data.filter(obj => obj.name === params[0]);
	} else if (typeof(params[0]) === "number") {
		return data.filter(obj => obj.id === params[0]);
	}
}

console.log(find("John"));
console.log(find(102));

// example 3 || class

class Animal {
	say () {
		console.log("rrr, I'm an animal");
	}
}

class Dog extends Animal {
	say () {
		console.log("woof, woof");
	}
}

class Cat extends Animal {
	say () {
		console.log("meow, meow");
	}
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();


// հարցնում ենք արդյո՞ք dog object-ը օրինակ է նշված class-ներին
console.log(dog instanceof Animal); // true
console.log(dog instanceof Dog); // true
console.log(dog instanceof Cat); // false