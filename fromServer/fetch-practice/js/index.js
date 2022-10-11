"use strict";

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
	e.preventDefault();

	const formData = new FormData(this);
	const toJSON = {};
	formData.forEach((value, key) => {
		toJSON[key] = value
	});

	fetch("server/server.php", {
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify(toJSON)
	})
		.then(data => data.text()) // reject
		.then(data => console.log(data))
		.then(() => console.log(1 + 2))
		.catch((err) => {
			throw new Error(err)
		})
		.finally(() => console.log("OK"))

	this.reset();
});