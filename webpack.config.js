const path = require('path')

module.exports = {
  entry: {
    main: './src/App.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundled.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: { importLoaders: 1 }}
      ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ["@babel/preset-env", { "useBuiltIns": "usage", "corejs": 3, "targets": "defaults" }],
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  devServer: {
    port: 8080,
    contentBase: './dist',
    hot: true,
    // open: true
  },
  mode: 'development'
}