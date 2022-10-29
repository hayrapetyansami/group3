export default function (removeBtnArray, url) {
	removeBtnArray.forEach(btn => {
		btn.addEventListener("click", async () => {
			const isDelete = confirm("Are you sure ?");

			if (isDelete) {
				const fakeID = parseInt(btn.parentElement.previousElementSibling.firstElementChild.textContent);
				btn.parentElement.parentElement.remove();
	
				await fetch(`${url}/${fakeID}`, {
					method: "DELETE"
				});
			} else {
				alert("Good !");
			}
		});
	});
}