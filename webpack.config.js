
const webpack = require('webpack');
const { env } = require('process');
const pkg = require('./package.json');
const isProd = env.NODE_ENV === 'production';
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const isNonNil = x => x != null;

const camelcase = require('camelcase');

const minify = env.MINIFY === 'true';


const config = {
  entry: __dirname + '/src/index.js',
  devtool: isProd ? false : 'inline-source-map',
  mode: isProd ? 'production' : 'development',
  target: 'node',
  node: {
    process: false
  },
  output: {
    filename: './build/bundle.js',
    library: camelcase( pkg.name ),
    libraryTarget: 'umd',
    globalObject: 'this'
  },

  externals: isProd ? Object.keys( pkg.dependencies || {} ) : [],

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    minify ? new UglifyJSPlugin() : null,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ].filter(isNonNil)
};

module.exports = config;
