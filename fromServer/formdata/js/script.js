"use strict";

const subscribeForm = document.querySelector("form#subscribe");
const signInForm = document.querySelector("form#sign-in")

const messages = {
	waiting: "waiting...",
	success: "success !",
	failure: "Something is wrong. Please reload page and try again !"
}

// without JSON
subscribeForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const message = document.createElement("p");
	message.classList.add("message");
	e.target.append(message);

	message.textContent = messages.waiting;
	const data = new FormData(e.target);

	const request = new XMLHttpRequest();
	request.open("POST", "server/server.php");
	// request.setRequestHeader("content-type", "multipart/form-data"); // empty array
	request.send(data);

	request.addEventListener("load", () => {
		if (request.status === 200) {
			message.textContent = messages.success;
		} else {
			message.textContent = messages.failure;
		}
	});

	e.target.reset();
});

// with JSON
signInForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const data = new FormData(e.target);
	const dataObj = {};
	data.forEach((value, key) => {
		dataObj[key] = value;
	});

	const request = new XMLHttpRequest();
	request.open("POST", "server/server.php");
	request.setRequestHeader("content-type", "application/json");
	request.send(JSON.stringify(dataObj));

	e.target.reset();
});