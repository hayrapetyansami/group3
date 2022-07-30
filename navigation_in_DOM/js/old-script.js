// console.log(document);// document !== HTML
// console.log(document.head); // <head>*</head>
// console.log(document.body); // <body>*</body>
// console.log(document.documentElement); // FULL HTML
// console.log(document.body.childNodes); // ստանում ենք և թեգերը և նոդերը
// console.log(document.body.children); // ստանում ենք միայն թեգերը

// console.log(document.body.firstChild); // առաջին երեխա => node
// console.log(document.body.lastChild); // վերջին երեպա => script

// const current = document.getElementById("current");
// console.log(current.parentNode); // first
// console.log(current.parentNode.parentNode); // wrapper

// const current = document.querySelector("[data-current]");
// console.log(current.previousSibling); // node => #TEXT
// console.log(current.nextSibling); // node => #TEXT


// for (let node of document.body.childNodes) {
// 	if (node.nodeName !== "#text" && node.nodeName !== "#comment") {
// 		console.log(node);
// 	} else {
// 		console.log(`Սրանք զիբիլ են։ ${node}`);
// 	}
// }


/* 
	ՆՇՈՒՄՆԵՐ
	* => ամեն ինչ
	#text => /n = new line, /t = tab
	#comment = HTML <!-- -->
*/