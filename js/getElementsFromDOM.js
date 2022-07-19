"use strict";

// BOM => Browser Object Model
// DOM => Document Object Model

// old methods 
const _limeID = document.getElementById("lime");
const buttons = document.getElementsByTagName("button");
const _flags = document.getElementsByClassName("flag");
const paragraph = document.getElementsByName("test");

/* 
console.log(
	paragraph[0]
	.textContent
	.toUpperCase()
	.trim()
	.slice(0, 123) + "..."
);
*/
// new methods
const test = document.querySelector("[data-test]");
const testByName = document.querySelector("p[name='test']")
const limeClass = document.querySelector(".lime");
const limeID = document.querySelector("#lime");
const button = document.querySelector("button");
const wrapperItem = document.querySelector(".wrapper > .item");

const items = document.querySelectorAll(".item");
const btns = document.querySelectorAll("button");
const flags = document.querySelectorAll("#flag > .flag");
const news = document.querySelectorAll("div[name='new']")
