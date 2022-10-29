export default function (editBtnArray, saveBtnArray, content, url) {
	editBtnArray.forEach((editBtn, index) => {
		editBtn.addEventListener("click", () => {
			editBtn.style.display = "none";
			saveBtnArray[index].style.display = "inline-block";
			const fakeID = parseInt(content[index].children[0].textContent);
			const input = content[index].children[1];
			input.classList.add("edit");
			input.removeAttribute("readonly");

			saveBtnArray[index].addEventListener("click", async () => {
				await fetch(`${url}/${fakeID}`, {
					method: "PATCH",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify({ title: input.value.trim() })
				})
			});
		});
	})
}