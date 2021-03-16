const path = require('path');

module.exports = {
  entry: ['./src/index.js', './src/polyfills.js', './src/plugins/IceAddTitlePlugin/IceAddTitlePlugin.js', './src/plugins/IceCopyPastePlugin/IceCopyPastePlugin.js', './src/plugins/IceSmartQuotesPlugin/IceSmartQuotesPlugin.js', './src/plugins/IceEmdashPlugin/IceEmdashPlugin.js'],
  module: {
    rules: [{
        test: /\.js$/,
        use: 'imports-loader?wrapper=window',
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ice-bundle.min.js',
  },
};
