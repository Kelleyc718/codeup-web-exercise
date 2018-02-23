// for resolving the absolute path to our project
// necessary for webpack
const path = require('path');

module.exports = {
  // where our app "starts"
  entry: './src/index.js',
  // where to put the transpiled javascript
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};

  // babel config
  module: {
    rules: [
      {
        // anything file that ends with '.js'
        test: /\.js$/,
        // except those in "node_modules"
        exclude: /node_modules/,
        // transform with babel
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },

  // allows us to see how the transpiled js relates to the untranspiled js
  devtool: 'source-map'
};
