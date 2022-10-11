"use strict";

// API => Application Programming Interface

// DOM API
// document.querySelector();
// document.createElement();
// setTimeout();
// setInterval();

/*
	1. fetch-ի առաջին պարամետրը դա URL—ն է,
	2. fetch-ի երկրորդ պարամետրը դա Settings-ն է Object-ի տեսքով
	3․ Եթե fetch API-ը մենք օգտագործում ենք GET հարցման համար, ապա որպես երկրորդ պարամետր ոչինիչ չենք նշում
	4. Եթե fetch API-ը մենք օգտագործում ենք POST, PUT, DELETE և այլ հարցման համար, ապա որպես երկրորդ պարամետր մենք ԱՆՊԱՅՄԱՆ պետք է նշենք Settings
	5. fetch API-ը մեզ վերադարձնում է Promise
*/

const posts = "https://jsonplaceholder.typicode.com/posts/";
const photos = "https://jsonplaceholder.typicode.com/photos/";

const wrapper = document.createElement("div");
const postsList = document.createElement("div");
const photosList = document.createElement("div");


wrapper.id = "root";
postsList.id = "post-list";
photosList.id = "photos-list";

document.body.prepend(wrapper);
wrapper.append(postsList);
wrapper.append(photosList);

// let i = 1;
// const getPostsFromAPI = setInterval(() => {
// 	fetch(`${posts}${i}`)
// 	.then(data => data.json())
// 	.then(data => {
// 		postsList.innerHTML += `
// 			<div style="margin-bottom: 40px">
// 				<h2>${data.title}</h2>
// 				<p>${data.body}</p>
// 			</div>
// 		`;
// 	});

// 	if (i === 10) {
// 		clearInterval(getPostsFromAPI);
// 	}

// 	i++;
// }, 1000);

// let x = 1;
// const getPhotosFromAPI = setInterval(() => {
// 	fetch(`${photos}${x}`)
// 	.then(data => data.json())
// 	.then(data => {
// 		photosList.innerHTML += `
// 			<div style="margin-bottom: 20px;">
// 				<img src=${data.url} alt=${data.title} style="display: block; max-width: 600px; width: 100%">
// 			</div>
// 		`;
// 	});

// 	if (x === 10) {
// 		clearInterval(getPhotosFromAPI);
// 	}

// 	x++;
// }, 2000);

const date = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`

const article = {
	author: "Նարինե Բզնունի",
	title: "Գանձ որոնողը 380 արծաթե եւ ոսկե մետաղադրամ է գտել",
	body: "Մեծ Բրիտանիայում սիրողական գանձ որոնողը 380 հին մետաղադրամ է գտել, հայտնում է The Sun-ը: \n 27-ամյա ինժեներ Ջոն Ռենդլը մետաղորսիչ գնելուց հետո սկսել է զբաղվել գանձերի որոնմամբ: Գանձը գտնելու առաջին փորձն անհաջողությամբ է ավարտվել՝ նա միայն մի քանի ժանգոտած մեխ ու կարագի դանակ է գտել։",
	date: date
};

fetch ("https://jsonplaceholder.typicode.com/posts/", {
	method: "POST",
	headers: {
		"content-type":"application/json"
	},
	body: JSON.stringify(article)
})
.then(data => data.json())
.then(data => {
	document.body.innerHTML = `
		<article>
			<h2>${data.title}</h2>
			</br>
			<p>${data.date}</p>
			</br></br>
			<p>
				${data.body}
			</p>
			</br></br>
			<p>Հեղինակ՝ ${data.author}</p>
		</article>
	`;
});























// with recrusion
// let i = 1;
// function test () {

// 	if (i === 10) {
// 		return;
// 	}

// 	fetch(`${photos}${i}`)
// 	.then(data => data.json())
// 	.then(data => {
// 		photosList.innerHTML += `
// 			<div style="margin-bottom: 20px;">
// 				<img src=${data.url} alt=${data.title} style="display: block; max-width: 600px; width: 100%">
// 			</div>
// 		`;
// 	});
// 	i++;
// 	return test()
// }

// test();