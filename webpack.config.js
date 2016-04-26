const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const TARGET = process.env.npm_lifecycle_event

process.env.BABEL_ENV = TARGET

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const common = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: [ '', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'app.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'eslint' ],
        include: PATHS.app
      }  
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'babel?cacheDirectory' ],
        inculde: PATHS.app
      }
    ]
  }
}

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
   devServer: {
     contentBase: PATHS.build,
     historyApiFallback: true,
     hot: true,
     inline: true,
     progress: true,
     stats: 'errors-only',
     host: process.env.HOST,
     port: process.env.PORT
   },
   plugins: [
     new webpack.HotModuleReplacementPlugin()
   ]
  })
}

if (TARGET === 'build') {
  module.exports = merge(common, {})
}