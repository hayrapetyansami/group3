"use strict";

const arr = [54, 8, 96, 33, 14, 15, 59];

// FOR EACH
arr.forEach((item, index, current) => {
	console.log(`${index}: ${item} => ${current}`);
});

arr.forEach((item, index) => console.log(index, item));

// FILTER
const filteredArr = arr.filter((item, index, current) => {
	return item > 15;
});

console.log(filteredArr);
console.log(arr);

const arrWithStr = [15, true, {}, "Hello", 8, "Welcome", []];
const filteredStr = arrWithStr.filter(item => typeof(item) === "string");
console.log(filteredStr);
console.log(arrWithStr);

// MAP
const data = [2500, 8900, 7050, 6450, 6000, 7888];
const newData = data.map(value => value);
console.log(data);
console.log(newData);

const person = [
	{name: "John", age: 34},
	{name: "Melica", age: 31},
	{name: "Tom", age: 17},
	{name: "Alice", age: 11}
];

const newPerson = person.map(obj => obj)
.filter(obj => obj.age > 18);

console.log(newPerson);

// REDUCE
const prices = [2500, 8500, 4120];
const sale = [840, 6400, 2890];
const all = [...prices, ...sale];

const result = all.reduce((total, current, index, arr) => {
	return total + current;
}, 0);

console.log(result);

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const total = letters.reduce((result, current, index) => {
	// եթե ցանկանում ենք ուղարկել որպես Object
	return {...result, [current]: index}

	// եթե ցանկանում ենք ուղարկել որպես Array
	// return [...result, index]
}, {});

console.log(total);


// SOME & EVERY
const forTest = [24, 15, 87, 99, 66, "sad"];

// some === ||
const some = forTest.some(item => typeof(item) === "string");
console.log(some);

// every === &&
const every = forTest.every(item => typeof(item) === "number");
console.log(every);

// CONCAT
const firstArr = [2, 4, 6];
const LastArr = [3, 5, 7];

const z = [].concat(firstArr, LastArr); // concat
const y = [...firstArr, ...LastArr]; // spread

// FIND
const findArr = [7, 90, 54, 63, 12, 44];
const found = findArr.find(item => item > 10);
const foundIndex = findArr.findIndex(item => item === 63);
const FoundLast = findArr.findLast(item => item > 10);
console.log(found); // 90
console.log(foundIndex); // 3
console.log(FoundLast); // 44

// FILL 

const a = [1, 2, 3, 4];
const b = [1, 2, 3, 4];
const c = [1, 2, 3, 4];

a.fill(0, 2, 3); // [1, 2, 0, 4];
b.fill(5, 1); // [ 1, 5, 5, 5 ]
c.fill(8) // [ 8, 8, 8, 8 ]

console.log(a);
console.log(b);
console.log(c);

// ARRAY
const btns = document.querySelectorAll("button");
const test = Array.from(btns);

console.log(Array.isArray(btns)); // false
console.log(Array.isArray(test)); // true

console.log(btns);
console.log(test);

console.log(Array.of(10, 5, "str", true, new Date(), {}, [1, 2, 3], Boolean));