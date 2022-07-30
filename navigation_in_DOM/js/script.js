const currentID = document.getElementById("current");
const currentData = document.querySelector("[data-current]");

// 1)
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(currentID.parentNode);
// console.log(currentData.parentNode);
// console.log(currentData.previousSibling);
// console.log(currentData.nextSibling);

// 2)
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// console.log(currentID.parentElement);
// console.log(currentData.parentElement);
// console.log(currentData.previousElementSibling);
// console.log(currentData.nextElementSibling);

//example
// const btn1 = currentID.previousElementSibling;
// const p = document.querySelector("p");

// btn1.addEventListener("click", () => {
// 	p.textContent = "NEW TEXT";
// });


const title = document.createElement("h1");
const text = document.createElement("p");

title.textContent = "Hello dear group, it's our 29th lesson";
text.textContent = "You can find this lesson codes, on your groups github";

currentID
.parentElement
.nextElementSibling
.nextElementSibling
.append(title, text);