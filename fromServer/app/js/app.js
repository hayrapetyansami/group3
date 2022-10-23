"use strict";

const root = document.querySelector("#root");
const url = "http://localhost:8888/todos";

const UI = {
	title: document.createElement("h1"),
	subTitle: document.createElement("p"),
	form: document.createElement("form"),
	screenBlock: document.createElement("div"),
	screenInput: document.createElement("input"),
	screenAddBtn: document.createElement("button"),
	listsBlock: document.createElement("div"),

	elementOptions() {
		this.title.textContent = "CRUD";
		this.subTitle.textContent = "Asyn Application";

		this.form.id = "app-form";
		this.screenBlock.id = "screenBlock";
		this.screenInput.type = "text";
		this.screenInput.placeholder = "Type here...";
		this.screenAddBtn.textContent = "ADD";
		this.screenAddBtn.id = "screenAddBtn";
		this.listsBlock.id = "listBlock";
	},

	appendElements() {
		root.append(this.title, this.subTitle, this.form, this.listsBlock);
		this.form.append(this.screenBlock);
		this.screenBlock.append(this.screenInput, this.screenAddBtn);
	},

	toHTML(id, value) {
		this.listsBlock.innerHTML += `
			<div class="listsBlockItem">
				<div class="listsBlockItemContent">
					<span>${id}</span>
					<input type="text" value="${value}" readonly>
				</div>
				<div class="buttons">
					<button class="removeBtn">Remove</button>
					<button class="editBtn">Edit</button>
					<button class="saveBtn">Save</button>
				</div>
			</div>
		`;
	},

	start() {
		this.elementOptions();
		this.appendElements();
	}
}

UI.start();

const { form, screenInput } = UI;

function POST() {
	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		if (screenInput.value.trim() !== "") {
			await fetch(url, {
				method: "POST",
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({ title: screenInput.value.trim(), isComplete: false })
			})
		}

		e.target.reset();
	});
}

POST();

async function GET() {
	return await fetch(url)
		.then(data => data.json())
		.then(data => data.forEach(obj => UI.toHTML(obj.id, obj.title)))
		.then(() => {
			PUT(
				document.querySelectorAll(".editBtn"),
				document.querySelectorAll(".saveBtn"),
				document.querySelectorAll(".listsBlockItemContent")
			);

			DELETE(document.querySelectorAll(".removeBtn"));
		})
}

GET();

function PUT(editBtnArray, saveBtnArray, content) {
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
					method: "PUT",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify({ title: input.value.trim(), isComplete: false })
				})
			});
		});
	})
}

function DELETE(removeBtnArray) {
	removeBtnArray.forEach(btn => {
		btn.addEventListener("click", async () => {
			const fakeID = parseInt(btn.parentElement.previousElementSibling.firstElementChild.textContent);
			btn.parentElement.parentElement.remove();

			await fetch(`${url}/${fakeID}`, {
				method: "DELETE"
			});
		});
	});
}

/* 
	Ստեղծել 4 ֆունցկիա հետևյալ անուններով՝ GET, POST, PUT, DELETE ու անել այնպես
	որպեսզի էդ 4 ֆունկցիաները առանց որևիցէ խնդրի աշխատեն մեր տվյալների բազայի ու
	ամենակարևորը մեր UI-ի հետ

	Հ․Գ․ CSS-ում փոխել եմ բոլոր կլասներն ու այդիները, որպեսզի հին կոդի հետ չաշխատեն
*/