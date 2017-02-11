const path = require('path')
const webpack = require('webpack')

// Phaser webpack config
const phaserModule = path.join(__dirname, '/node_modules/phaser-ce/')
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
const pixi = path.join(phaserModule, 'build/custom/pixi.js')
const p2 = path.join(phaserModule, 'build/custom/p2.js')

module.exports = {
	devtool: "cheap-module-eval-source-map",
	entry: {
		app: [
			'webpack-hot-middleware/client',
			'babel-polyfill',
      		path.resolve(__dirname, 'src/index.js')
		],
		vendor: ['pixi', 'p2', 'phaser', 'webfontloader']
	},
	output: {
		path: path.join(__dirname,'dist'),
    	filename: 'bundle.js',
    	publicPath: '/dist/'
	},
	module: {
	    rules: [
	      { test: /\.js$/, use: ['babel-loader'], include: path.join(__dirname, 'src') },
	      { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
	      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
	      { test: /p2\.js/, use: ['expose-loader?p2'] }
	    ]
	},
	resolve: {
	    alias: {
	      'phaser': phaser,
	      'pixi': pixi,
	      'p2': p2
	    }
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({ name: 'vendor'/* chunkName= */, filename: 'vendor.bundle.js'/* filename= */})
	]
}