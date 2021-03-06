const path = require('path')

const resolve = (srcPath) => {
  return path.resolve(__dirname, './', srcPath)
}

module.exports = {
  mode: 'production',
  entry: resolve('src/index.js'),
  output: {
    path: resolve('lib'),
    filename: 'webWatermark.js',
    library: 'webWatermark',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}
