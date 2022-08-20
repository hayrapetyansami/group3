"use strict";

const poster = document.querySelector("header img");
const advs = document.querySelectorAll("#main_promo .mp");
const filmsBlock = document.getElementById("films");
const form = document.querySelector("#add");

const _DB = {
	movies: [
		"Logan", "Spider-Man", "The Seven Samurai",
		"Bonnie and Clyde","Reservoir Dogs", "Crid",
		"Doctor Zhivago", "The Deer Hunter", "Rocky"
	]
};

function init () {
	advs.forEach(adv => adv.remove());
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