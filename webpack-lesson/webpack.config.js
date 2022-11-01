const path = require("path");

module.exports = {
	mode: "production", // development
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js"
	},
	watch: true,
	devtool: "source-map",

	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)|(bower_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							["@babel/preset-env", {
								debug: true,
								corejs: 3,
								useBuiltIns: "usage"
							}]
						]
					}
				}
			}
		]
	}
};