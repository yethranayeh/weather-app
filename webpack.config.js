/** @format */

const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},
	mode: "production",
	module: {
		rules: [
			{
				test: /\.css$/i,

				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,

				type: "asset/resource"
			}
		]
	}
};
