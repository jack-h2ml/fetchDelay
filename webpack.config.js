const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './demo/src/index.js'),
	output: {
		path: path.resolve(__dirname, 'demo/build'),
		filename: 'bundle.js',
	},
	devServer: {
		static: path.resolve(__dirname, './demo/build'),
	},
};