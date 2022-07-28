const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  entry:["./src/index.js","/node_modules/regenerator-runtime/runtime.js"],
  output:{
    path:path.resolve(__dirname,"./static"),
    filename:"index.js",
    clean:true
  },
  plugins:[
    new CopyPlugin({
      patterns:[
        {from:'src/assets/index.html'},
        {from:'src/assets/favicon.ico'}
      ]
    })
  ],
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|webp|ico|svg|jpg|jpeg)$/i,
        type: 'asset'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset',
      }
    ]
  },
  optimization:{
    minimize:true
  }
}