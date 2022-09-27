"use strict";

class Rectangle {
	constructor(width = 0, height = 0){
		this.width = width;
		this.height = height;
	}
	calcArea(){
		return this.width * this.height;
	}
}

// const box = new Rectangle(50, 50);
// console.log(box);
// console.log(box.calcArea());

// class ժառանգություն
// extends + super զույգը պարտադիր ենք
class ModifedRectangle extends Rectangle {
	constructor (width, height, text, color) {
		super(width, height);
		this.text = text;
		this.color = color;
	}
	props(){
		console.log(`TEXT: ${this.text}, Color: ${this.color}`);
	}
}

const title = new ModifedRectangle(50, 100, "Hello World !!!", "red");
title.props();
console.log(title.calcArea());