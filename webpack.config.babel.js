import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import stylelint from 'stylelint'

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
  externals: {
  'jsdom': 'window',
  'react/lib/ReactContext': 'window',
  'react/lib/ExecutionEnvironment': true,
  'react/addons': true
  },
  module: {
    preLoaders: [
      {
        test: /\.css$/,
        loaders: ['postcss'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loaders: [ 'eslint' ],
        include: PATHS.app
      }  
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'myth'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loaders: [ 'babel?cacheDirectory' ],
        inculde: PATHS.app
      }
    ]
  },
  postcss: function () {
    return [stylelint({
      rules: {
        'color-hex-case': 'lower'
      }
    })]
  }
}

const startConfig = {
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
}

const buildConfig = {}

const config = (TARGET === 'start' || !TARGET) 
? merge(common, startConfig)
: merge(common, buildConfig)

export default config