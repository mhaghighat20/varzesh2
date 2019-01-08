// const webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Try the environment variable, otherwise use root
// const ASSET_PATH = process.env.ASSET_PATH || '../static/frontend';
// console.log(ASSET_PATH);

module.exports = {
    entry: './src/index.js',
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      }),
        new CopyWebpackPlugin([
            { from: './public', to: '' }
        ])
    //     // This makes it possible for us to safely use env vars on our code
    // new webpack.DefinePlugin({
    //   'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    // })
    ],
    module: {
    rules: [
      {
        test: /\.(eot|woff|woff2|svg|ttf|png|jpg)([?]?.*)$/,
        loader: "file-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },{
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          // 'postcss-loader',
          'sass-loader',
        ],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/static/frontend/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  }
};