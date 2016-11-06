/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-08-06
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&reload=true', './src/index.ts'],
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js',
		publicPath: '/' // hot loader publish dir
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: ['', '.ts', '.js']
	},
	module: {
		preLoaders: [{
			test: /\.ts$/,
			loader: 'tslint-loader',
			exclude: /node_modules/,
			include: [path.join(__dirname, '../src')]
		}],
		loaders: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: /(node_modules|bower_components)/
			}
		]
	}
};
