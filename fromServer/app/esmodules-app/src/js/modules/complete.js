export default function (url, checkArr, id) {
	checkArr.forEach((check, index) => {
		check.addEventListener("change", async () => {
			async function checkState(state) {
				await fetch(`${url}/${parseInt(id[index].textContent)}`, {
					method: "PATCH",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify({ isComplete: state ? true : false })
				})
			}

			if (check.checked) {
				checkState(true);
			} else {
				checkState(false);
			}
		});
	});
}