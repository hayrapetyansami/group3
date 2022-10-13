"use strict";

// NPM - Node Package Manager

const product = [
	{
		id: 1,
		brand: "Xiaomi",
		model: "Note 8T",
		storage: "128GB",
		price: "118.900 AMD",
		colors: ["Gray", "Black", "Purple"]
	},
	{
		brand: "Google",
		model: "Pixel 7",
		storage: "512GB",
		price: "415.900 AMD",
		colors: ["Brown", "White", "Silver"]
	},
	{
		brand: "Samsung",
		model: "S21 ultra",
		storage: "256GB",
		price: "438,650 AMD",
		colors: ["Black", "White", "Blue"]
	}
]

const a = {
	id: 1,
	title: "json-server",
	author: "typicode"
}

fetch("http://localhost:3000/product", {
	method: "POST",
	headers: {
		"content-type":"application/json"
	},
	body: JSON.stringify(product)
});

fetch("http://localhost:3000/product/1")
.then(data => data.json())
.then(data => console.log(data))

fetch("http://localhost:3000/posts", {
	method: "POST",
	headers: {
		"content-type":"application/json"
	},
	body: JSON.stringify(a)
});

fetch("http://localhost:3000/posts/1")
.then(data => data.json())
.then(data => console.log(data))