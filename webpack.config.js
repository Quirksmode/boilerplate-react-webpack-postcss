const path = require('path');
const webpack = require('webpack');

const PATHS = {
  build: path.join(__dirname, 'build'),
  src: path.join(__dirname, 'src')
};

module.exports = {
  entry: {
    src: PATHS.src
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  devServer: {
    contentBase: PATHS.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  postcss: function (webpack) {
      return [
          require('postcss-import')({ addDependencyTo: webpack }),
          require('postcss-url')(),
          require('postcss-cssnext')(),

          // add your 'plugins' here
          require('postcss-simple-vars'), // $ Sass Variables https://github.com/postcss/postcss-simple-vars
          //require('stylelint')(),
          require('postcss-mq-grid')(),
          require('postcss-assets')(),
          require('rucksack-css'),
          require('css-mqpacker')(),

          // and if you want to compress,
          // just use css-loader option that already use cssnano under the hood
          require('postcss-browser-reporter')(),
          require('postcss-reporter')(),
      ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
