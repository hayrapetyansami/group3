"use strict";

function Person (fullName, age, country) {
	this.fullName = fullName;
	this.age = age;
	this.country = country;
	this.sayHello = function () {
		console.log(`Hello dear ${fullName}`);
	};

	this.myCountry = function () {
		console.log(`${fullName} is from ${country}`);
	};
	this.isMarried = function (state) {
		if (state) {
			console.log(`${fullName} is Married`);
		} else {
			console.log(`${fullName} is Single`);
		}
	}
}

const john = new Person("John Smith", 37, "USA");
const alex = new Person("Alex Weedo", 41, "Germany");

john.isMarried(true);
alex.isMarried(false);