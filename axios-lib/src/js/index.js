import axios from "axios";

const form = document.querySelector("form");
const url = "http://localhost:3000/article";

form.addEventListener("submit", function (e) {
	e.preventDefault();
	axios.post(url, Object.fromEntries(new FormData(this)));
});

axios.get(url)
.then(res => console.log(res.data));