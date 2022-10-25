const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "all.js"
	},
	watch: true
}