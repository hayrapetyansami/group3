"use strict";

const lime = document.getElementById("lime"),
btns = document.querySelectorAll("button"),
wrapper = document.querySelector("#wrapper"),
boxes = wrapper.querySelectorAll(".box"),
flags = document.querySelector("#flags"),
flag = flags.querySelectorAll(".flag"),
text = document.querySelector("[data-test]");

// let counter = 0;
// for (let cssItem in window.document.styleSheets[0].ownerNode.style){
// 	console.log(cssItem);
// 	counter++;
// }
// console.log(counter);

// 1)
lime.style.width = "150px";
lime.style.height = "150px";
lime.style.background = "#5d5d5d";
lime.style.borderRadius = "0px 70%";
lime.style.transform = "rotate(180deg)";

// 2)
lime.style.cssText = `
	background: linear-gradient(purple, orange);
	width: ${10 > 5 ? 350 : 250}px;
	height: ${10 > 5 ? 350 : 250}px;
	transform: rotatey(180deg);
`;

// nodeList !== style
boxes.forEach(item => {
	item.textContent = `
		Hello I'm ${50 > 0 ? "Robot" : "Junior"}
	`;
	item.style.cssText = `
		display: flex;
		align-items: center;
		text-align: center;
		width: 200px;
		height: 200px;
		border-radius: 10px;
		color: #fff;
		font-size: 28px;
		font-weight: bold;
		font-family: tahoma;
		background: linear-gradient(
			to left bottom,
			${10 < 5 ? "#f0f" : "#00f"},
			${10 > 5 ? "#f0f" : "#00f"}
		);
	`;
});

const text1 = document.createElement("p"); // ստեղծում ենք P թեգ
const text2 = document.createElement("p"); // ստեղծում ենք P թեգ
text1.textContent = "Hello I'm PREPEND";
text2.textContent = "Hello I'm APPEND";

wrapper.prepend(text1) // ավելացնում ենք wrapper-ի սկզբում

// wrapper.append(text2) // ավելացնում ենք wrapper-ի վերջում
wrapper.appendChild(text2) // հին տարբերակ

const block = document.createElement("div"); // ստեղծում ենք DIV
document.body.append(block);

// block.textContent = "<h1>Simple title</h1>"
const _name = "Robot";
block.innerHTML = `
	<h1 
		style=\"
			color: red; 
			font-size: 40px; 
			font-family: cursive 
		\">
		Hello, I'm mr. ${_name}
	</h1>
	<p>
		how i can help u ? 
	</p>
`;

// lime.remove(); //ջնջում ենք էլեմենտը, որի վրա կանչել ենք
// document.querySelector("body").removeChild(text); // հին տարբերակ

flags.after(text); //flags-ից հետո դիր text-ը
// lime.before(flags) // lime-ից առաջ դիր flags-ը
document.querySelector("body").insertBefore(flags, lime)



// lime.replaceWith(block); // lime-ը փոխում ենք block-ով / lime-ը ջնջվում է
document.querySelector("body").replaceChild(block, lime);  // հին տարբերակ