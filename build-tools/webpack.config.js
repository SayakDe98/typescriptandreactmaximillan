const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.tsx'],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  devServer: {
    static: './dist',
    port: 3000
},
  module: {
    rules: [
        {
            test: /\.(ts|js)x?$/,
            exclude: '/node_modules',
            loader: 'babel-loader'
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html'
    })
  ]  
}