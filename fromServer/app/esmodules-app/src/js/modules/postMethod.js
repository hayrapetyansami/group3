export default async function (form, input, url) {
	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		if (input.value.trim() !== "") {
			await fetch(url, {
				method: "POST",
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({ title: input.value.trim(), isComplete: false })
			})
		}

		e.target.reset();
	});
}