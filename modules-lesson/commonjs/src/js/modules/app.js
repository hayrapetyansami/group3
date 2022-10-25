const {persons, setRing} = require("./ring");
const create = require("./ui");

setRing(persons, "Frodo");

for (const p of persons) {
	console.log(p);
}