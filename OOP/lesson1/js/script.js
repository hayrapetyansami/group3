"use strict";

const soldier = {
	health: 100,
	armor: 150,
	damage: 110,
	country: "USA",
	run(){
		console.log("I'm runnig sr. !!!");
	}
};

const john = {
	name: "John",
	armor: 31
}

// այս մեթոդը չենք օգտագործելու OLD
// john.__proto__ = soldier;

Object.setPrototypeOf(john, soldier);
const alex = Object.create(soldier);

console.log("ALEX: " + alex.armor);
console.log("JOHN: " + john.armor);