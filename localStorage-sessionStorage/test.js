"use strict";

localStorage.setItem("isFavorite", true); // ուղարկում ենք localStorage-ի մեջ
localStorage.getItem("isFavorite"); // ստանում ենք localStorage-ի մեջից
localStorage.removeItem("price"); // ջնջում ենք localStorage-ի մեջից կոնկրետ item-ը
// localStorage.clear(); // localStorage-ի մեջից ամեն ինչ ջնջում ա
localStorage.key(0); // localStorage-ի մեջից ստանում ենք item-ի key-ը ըստ index-ի
localStorage.length; // ստանում ենք localStorage-ի length-ը

// console.log(Object.keys(localStorage));
// console.log(Object.values(localStorage));
// console.log(Object.entries(localStorage));

sessionStorage.setItem("exit", true);