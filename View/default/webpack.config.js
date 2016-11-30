var path = require('path');
module.exports = {
  entry: "./book/es6/weixin.js",
  output: {
    path: path.join(__dirname, './Public/js/'),
    filename: "weixin.js"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, './book/es6/'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}


// var path = require('path'),
//     webpack = require('webpack'),
//     ExtractTextPlugin = require("extract-text-webpack-plugin"), // 单独打包CSS
//     HtmlWebpackPlugin = require('html-webpack-plugin');
// // var css = require("css!./book/dist/public/css/weixin.css");
// module.exports = {
//     entry: ["./src/weixin.js"],
//     output: {
//         path: './dist/',
//         filename: "js/weixin.js",
//         // publicPath: './'
//     },
//     module: {
//         loaders: [{
//             test: './src/weixin.js',
//             loader: 'babel-loader',
//             // query: {
//             //     presets: ['es2015']
//             // }
//         },
//         {
//             test: /\.css$/,
//             loader: ExtractTextPlugin.extract("style-loader", "css-loader")
//         },
//         {
//             test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
//             loader: 'url-loader?limit=50000&name=img/[name].[ext]'
//         }]
//     },
//     plugins: [
//         new ExtractTextPlugin('./css/[name].css', {allChunks: true}),
//         new HtmlWebpackPlugin({
//             filename: 'index.html',
//             template: './src/dist/Book/index.html',
//             inject: true
//         }),
//     ],
// }