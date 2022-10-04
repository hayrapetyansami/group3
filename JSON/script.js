"use strict";

// JSON => JavaScript Object Notation
// JSON.stringify => Object-ը դարձնում է JSON
// JSON.parse => JSON-ը դարձնում է Object
// JSON-ը չի ընդունում Method, undefined և այլն
// JSON-ը թույլ է տալիս անել խորացված կլոնավորում ({}, [])

const person = {
	name: "Hayk",
	age: 27,
	isAdult: true,
	family: {
		parents: {
			father: "Davit",
			mother: "Yelena"
		},

		siblings: {
			brother: "Tigran",
			sister: "Nelly"
		}
	}
}

const personCopy = JSON.parse(JSON.stringify(person));

person.family.siblings.brother = "Tony";
person.family.siblings.cauzen = "Evelina"

console.log(person);
console.log(personCopy);


// const arr = [1, 5, 10, undefined, {a: 1, b: 2}];
// const a = JSON.stringify(arr);

// console.log(a);