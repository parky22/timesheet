module.exports = {
  entry: `${__dirname}/browser/app.js`,
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-2'],
      }
    }]
  },
  devtool: 'source-map'
};
