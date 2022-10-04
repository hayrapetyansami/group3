// AJAX => Asyncron JavaScript and XML

const AMD_input = document.querySelector("#amd");
const USD_input = document.querySelector("#usd");

AMD_input.addEventListener("input", function () {
	const request = new XMLHttpRequest();

	// 1) method, 2) url, 3) async, 4) username, 5) password
	request.open("GET", "./db/data.json");
	request.setRequestHeader("content-type", "application/json");
	request.send();

	// status, statusText, response, readyState
	request.addEventListener("readystatechange", () => {
		if (request.readyState === 4 && request.status === 200) {
			const data = JSON.parse(request.response);

			USD_input.value = (
				parseFloat(this.value)
				/
				parseFloat(data.value.usd)
			).toFixed(2);
		}
	});
});

USD_input.addEventListener("input", function () {
	const request = new XMLHttpRequest();
	request.open("GET", "./db/data.json");
	request.setRequestHeader("content-type", "application/json");
	request.send();

	request.addEventListener("load", () => {
		if (request.status === 200) {
			const data = JSON.parse(request.response);
			AMD_input.value = (
				parseFloat(data.value.usd)
				*
				parseFloat(this.value)
			).toFixed(2);
		}
	});
});