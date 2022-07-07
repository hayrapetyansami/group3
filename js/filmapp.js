"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start: function() {
		personalMovieDB.count = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
		while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count) || personalMovieDB.count < -1) {
			if (personalMovieDB.count === 0) {
				break;
			}
			personalMovieDB.count = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
			const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");
		
			if (!isNaN(b) && b >= 0 && a != null && b != null && a.trim() != "" && b.trim() != "" && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log("DONE");
			} else {
				console.log("ERROR");
				i--;
			}
		}
	},
	detectUserPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
		} else if (personalMovieDB.count < 30) {
			console.log("Դուք ֆիլմի սիրահար եք");
		} else if (personalMovieDB.count >= 30) {
			console.log("Դուք կինոման եք !!!");
		} else {
			console.log("Տեղի է ունեցել խնդիր, ըստ երևույթի դուք թիվ չեք նշել");
		}
	},
	showMyDB: function(show) {
		if (show) {
			console.log(personalMovieDB);
		}
	},
	isVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	yourFavoriteGenres: function () {
		// for (let i = 0; i <= 2; i++) {
		// 	const genres = prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`);
	
		// 	if (genres != null && genres.trim() != "" && genres.length <= 20) {
		// 		personalMovieDB.genres[i] = genres;
		// 	} else {
		// 		i--;
		// 	}
		// }

		for (let i = 1; i < 2; i++) {
			let genres = prompt("Թվարկեք Ձեր նախընտրելի ժանրերը, եթե դրանք մեկից շատ են, ապա խնդրում ենք առանձնացնել դրանք ստորակետներով").toLowerCase().trim();
	
			if (genres != null && genres.trim() != "") {
				personalMovieDB.genres = genres.split(", ", 1000);
				personalMovieDB.genres.sort();
			} else {
				console.log("Դուք թույլ եք տվել սխալ, խնդրում ենք հետևել կանոններին");
				i--;
			}
		}

		// personalMovieDB.genres.forEach(function(genre, i) {
		// 	if (i === 0) {
		// 		console.log(`Ձեր սիրելի ${i + 1}ին ժանրը։ ${genre}`);
		// 	} else {
		// 		console.log(`Ձեր սիրելի ${i + 1}րդ ժանրը։ ${genre}`);
		// 	}
		// });
	},

	// test function which can run por programm
	run() {
		personalMovieDB.start();
		personalMovieDB.rememberMyFilms();
		personalMovieDB.detectUserPersonalLevel();
		personalMovieDB.showMyDB();
		personalMovieDB.isVisibleMyDB();
		personalMovieDB.yourFavoriteGenres();
	}
};

personalMovieDB.run();