
const isProd = false;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webConfig = {
  entry: __dirname + '/src/index.js',
  // devtool: isProd ? false : 'inline-source-map',
  target: 'web',
  output: {
    filename: './ndexClient.js',
    library: 'ndexClient',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};


const nodeConfig = {
  entry: __dirname + '/src/index.js',
  // devtool: isProd ? false : 'inline-source-map',
  target: 'node',
  output: {
    filename: './ndexClient.common.js',
    // library: 'ndexClient',
    libraryTarget: 'commonjs'
  },


  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
};

module.exports = [webConfig, nodeConfig];
