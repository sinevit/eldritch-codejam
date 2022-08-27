const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resourceUsage } = require('process');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    assetModuleFilename: "assets/[name][ext]",
    // assetModuleFilename: "assets/[hash][ext][query]",
  },
  devServer :{
    static:{
        directory: path.resolve(__dirname, 'dist')
    },
    port: 4000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true, 

  },

  module: {
    rules:[
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        // {
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     use: {
        //         loader: 'babel-loader',
        //         options: {
        //             presets: ['@babel/preset-env'],
        //         }
        //     }
        // },
        // {
        //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
        //     type: '.asset/resource'
        // },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        title:'Eldritch Horror',
        filename:'index.html',
        template: 'src/index.html'
    }),

    new CopyPlugin({
        patterns: [
            {
              from: "./src/assets/MythicCards",
              to: "assets/",
            },
          ],
    }),

  ],

};