"use strict";

const ui = require("./modules/ui");
const {persons, setRing} = require("./modules/ring")

setRing(persons, "Frodo");

for (const p of persons) {
	console.log(p);
}

document.body.prepend(ui())