"use strict";

// function context (a, b) {
// 	console.log(this); // undefined || globalThis

// 	function calc() {
// 		console.log(this); // undefined || globalThis
// 		return a + b // a + b
// 	}

// 	return calc();
// }

// console.log(context(4, 5)); // 9

// const obj = {
// 	num1: 15,
// 	num2: 31,
// 	num3: 48,
// 	show: function () {
// 		console.log(this); // obj

// 		go = () => {
// 			console.log(this); // undef || wind
// 		}

// 		go() // հղվում է դեպի globalThis-ին scopes [global, script]
// 	}
// }

// obj.show();

// function User (name = "empty", age = 0) {
// 	this.name = name;
// 	this.age = age;
// }

// const petros = new User("Petros", 43);
// const poghos = new User("Poghos", 67);

// console.log(new User());
// console.log(petros);
// console.log(poghos);

// CALL, APPLY, BIND

// function person (city, n) {
// 	console.log(this);
// 	console.log(`${this.fullName} from ${city}`);
// 	console.log(((this.a + this.b) * this.c) * n);
// }

// const personData = {
// 	fullName: "John Smith",
// 	a: 10,
// 	b: 20,
// 	c: 30
// }

// person.call(personData, "Yerevan", 2);
// person.apply(personData, ["Yerevan", 2]);

// function double (n) {
// 	console.log(`n: ${n}`);
// 	console.log(`this: ${this}`);
// 	return this * n;
// }

// const sum = double.bind(2); // ստեղ DOUBLE-ի THIS-ին տալիս ենք արժեք

// console.log(sum(5)); // ստեղ DOUBLE-ի N-ը դնում ենք ինչ-որ թիվ

// EVENT !== THIS
const btn = document.querySelector("button");

// btn.addEventListener("click", function (e) {
// 	console.log(this); // HTML ELEMENT => THIS
// 	console.log(e.target); // HTML ELEMENT => EVENT
// 	this.style.background = "#f00";
// });

// btn.addEventListener("click", (e) => {
// 	console.log(e.target); // WINDOW
// 	e.target.style.background = "#00f";
// });


/*
	1) եթե "use strict"-ը միացված ա, ապա մենք ստանում ենք undefined,
	հակառակ դեպքում, եթե "use strict"-ը անջատած է, ապա THIS-ը հղվում է
	դեպքի globalThis (browser-ում window || node-ում Global Object)

	2) Object-ի ներսում ստեղծված մեթոդի (function) THIS-ը հղվում է դեպքի այդ Object-ին։
	Եթե մեթոդը (function) լինի սլաքով (arrow), ապա նա կվերցնի իր ծնողի THIS-ը

	3) function construtor-ի ու class-ի մեջ օգտագործված THIS-ը դա նոր ստեղծվող (new Some())
	Object-ի նախատիպն ա (prototype)

	4) arrow function-ի THIS-ը իր ծնողի THIS-ն է, arrow function-ը չունի
	իր սեփական THIS-ը

	5) Կոնտեքստը (this-ը) ձեռքով կապելու համար մենք օգտագործում ենք՝ 
	call, apply, bind: BIND-ը վերադարձնում է ՓՈՓՈԽՎԱԾ, ԿՈՆՏԵՔՍՏԸ ՈՐՈՇՎԱԾ ՖՈՒՆԿՑԻԱՆ
*/