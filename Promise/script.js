"use strict";

// calback hell

// resolve => ամեն ինչ բարեհաջող է անցել
// reject => մեր խոստումը մերժվել է

const serverStatus = 200;
const request = new Promise(function (resolve, reject) {
	console.log("Սերվերը պատրաստում է արդյունքը․․․");
	setTimeout(() => {
		console.log("Խնդրում ենք սպասել․․․");

		const product = {
			brand: "Google",
			type: "Mobile",
			name: "Pixel 7",
			storage: "512GB",
			price: 1088
		}

		if (serverStatus === 200) {
			resolve(product);
		} else if (serverStatus === 500) {
			reject();
		}
	}, 2000);
});

request.then(data => {
	console.log("Վճարումը հաստատվել է...");
	data.status = "Վաճառված է";
	data.isAnlocked = true;
	console.log(`Շնորհավորում ենք, դուք ձեռք եք բերել ${data.brand} բրենդի ${data.name} հեռախոսը, ինչի կապակցությամբ մենք ձեր հեռախոսը դարձնում ենք ${data.isAnlocked ? "Ապակոդավորված" : "Կոդավորված"}`);
	console.log(data);
	return data
}).catch((a) => {
	throw new Error("Error");
}).finally(() => {
	console.log("Finnaly");
});


const time = ms => {
	return new Promise(resolve => {
		setTimeout(() => resolve(ms), ms);
	});
}

// time(6000).then(() => console.log("6000 ms"));

// Promise.all([time(1000), time(2000), time(4000), time(10000)])
// .then(() => console.log("Բոլորը աշխատել են"));

// Promise.race([time(1), time(2000), time(4000), time(10000)])
// .then(() => console.log("Race"));



// Օրինակ, որ Promise-ը նախատեսված չի միայն SetTimeoit-ի համար
console.log("Before");

new Promise((resolve, reject) => {
	const arr = [7, 5, 9, 8, 4, 6, 2, 0, 1, 3];

	if (Math.max(...arr) > 20) {
		resolve("Ամենամեծ թիվը մեծ է 20ից");
	} else {
		reject("Զանգվածի ոչ մի թիվը մեծ չէ 20ից");
	}
}).then((resolvedData) => {
	console.log(resolvedData);
}).catch((catchedData) => {
	console.log(catchedData);
}).finally(() => console.log("Ես արդեն գիտեմ Promise"));

console.log("After");