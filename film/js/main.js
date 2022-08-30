"use strict";

const poster = document.querySelector("header img");
const filmsBlock = document.getElementById("films");
const form = document.querySelector("#add");
const signInModalBtn = document.querySelector("[data-in]");
const signInModal = document.querySelector("[data-in-modal]");
const tabBtns = document.querySelectorAll(".tab_btn");
const tabBodys = document.querySelectorAll(".tab_body");

const _DB = {
	movies: [
		"Logan", "Spider-Man", "The Seven Samurai",
		"Bonnie and Clyde","Reservoir Dogs", "Crid",
		"Doctor Zhivago", "The Deer Hunter", "Rocky"
	]
};
function init () {
	document.querySelectorAll("#main_promo .mp").forEach(adv => adv.remove());
	poster.src = "img/bg2.jpg";
	if (poster.src.slice(31) === "bg1.jpg") {
		poster.alt = "GEMINI MAN";
	} else {
		poster.alt = "Hitman's wife's bodyguard";
	}
	document.title = poster.alt;
}
init();
form.addEventListener("submit", (e) => {
	e.preventDefault();
	let val = e.target.firstElementChild.value.trim();
	const check = document.querySelector("input[name='favorite']");

	if (val !== "" && val !== "<" && val !== ">" && val !== "/" && val !== "?") {
		if (check.checked) {
			console.log(`This film <${val}> added to favorite`);
		}
		_DB.movies.push(val);
	}

	setSort(_DB.movies);
	createFilmsList(_DB.movies, filmsBlock);
	e.target.reset();
});
function setSort(arr) {
	arr.sort();
}
function createFilmsList (filmsArr, parent) {
	parent.innerHTML = "";
	setSort(filmsArr);
	filmsArr.forEach((film, index) => {
		parent.innerHTML += `
			<p>
				${index + 1}. 
				${film.length >= 21 ? film.slice(0, 21)+'...' : film}
				<span data-rm>&#128465</span>
			</p>
		`;
	});

	removeFilmFromList('[data-rm]')
	
}
function removeFilmFromList (selector) {
	setSort(_DB.movies);
	document.querySelectorAll(selector).forEach((btn, index) => {
		btn.addEventListener("click", () => {
			btn.parentElement.remove();
			_DB.movies.splice(index, 1);
			createFilmsList(_DB.movies, filmsBlock);
		});
	});
}
createFilmsList(_DB.movies, filmsBlock);

signInModalBtn.addEventListener("click", (e) => {
	e.preventDefault();
	signInModal.classList.add("modal_wrapper-active");
});
signInModal.addEventListener("click", (e) => {
	// if (e.target && e.target.matches(".modal_wrapper-active")) {
	// 	e.target.classList.remove("modal_wrapper-active");
	// }

	if (e.target && e.target.classList.contains("modal_wrapper-active")) {
		e.target.classList.remove("modal_wrapper-active");
	}
});

// tabBtns.forEach((btn, index) => {
// 	btn.addEventListener("click", () => {
// 		tabBtns.forEach((btn, index) => {
// 			btn.classList.remove("tab_btn-active");
// 			tabBodys[index].classList.remove("tab_body-active");
// 		});

// 		btn.classList.add("tab_btn-active");
// 		tabBodys[index].classList.add("tab_body-active");
// 	});
// });

let state = 0;
for (let i = 0; i < tabBtns.length; i++) {
	tabBtns[i].addEventListener("click", () => {
		tabBtns[state].classList.remove("tab_btn-active");
		tabBodys[state].classList.remove("tab_body-active");
		tabBtns[i].classList.add("tab_btn-active");
		tabBodys[i].classList.add("tab_body-active");
		state = i;
	});
}