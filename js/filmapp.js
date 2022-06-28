"use strict";

const numberOfFilms = +prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "");

const personalMovieDB = {
	count: numberOfFilms >= 1 ? numberOfFilms : 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

if (numberOfFilms == null || numberOfFilms === 0 || numberOfFilms < 0 || numberOfFilms === "" || typeof(numberOfFilms) === "string") {
	console.log("Տեղի է ունեցել խնդիր, խնդրում ենք գրել միայն թվեր");
} else {
	if (numberOfFilms < 10) {
		console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
	} else if (numberOfFilms < 30) {
		console.log("Դուք ֆիլմի սիրահար եք");
	} else if (numberOfFilms >= 30) {
		console.log("Դուք կինոման եք !!!");
	} else {
		console.log("Տեղի է ունեցել խնդիր, ըստ երևույթի դուք թիվ չեք նշել");
	}
}

for (let i = 0; i < 2; i++) {
	const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
	const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");

	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		a.trim();
		b.trim();
		personalMovieDB.movies[a] = b;
		console.log("DONE");
	} else {
		console.log("ERROR");
		i--;
	}
}

console.log(personalMovieDB);