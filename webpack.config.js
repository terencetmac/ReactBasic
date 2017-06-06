// Require Node's path module
var path = require('path');

module.exports = {
  // Define an entry file for Webpack to start
  entry: './src/index.js',

  output: {
    // Name your output file
    filename: 'bundle.js',
    // Tell Webpack what directory to put it in. E.g. '/dist/js'
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/js/'
  },

  module: {
    rules: [
      {
        // Tell Webpack to apply the loader to files that match
        // this regular expression
        test: /\.(js|jsx)$/,
        // but skip these files/folders,
        exclude: /node_modules/,
        // using this specific loader
        loader: 'babel-loader'
      }
    ]
  }
}