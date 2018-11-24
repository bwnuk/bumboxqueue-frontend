const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.join(__dirname),
  entry: {
    bundle: path.resolve(__dirname, 'src/index.jsx')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      title: 'Tytul',
      lang: 'en',
      template: HtmlWebpackTemplate,
      appMountId: 'app',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      baseHref: '/',
      favicon: path.resolve(__dirname, 'src/images/favicon.ico'),
      links: [
        {
          href: 'https://fonts.googleapis.com/css?family=Raleway',
          rel: 'stylesheet'
        },
        {
          rel: 'stylesheet',
          href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
          integrity: 'sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO',
          crossorigin: 'anonymous'
        },
        {
          rel: 'shortcut icon',
          href: 'src/images/favicon.ico',
          type: 'image/x-icon'
        },
        {
          rel: 'icon',
          href: 'src/images/favicon.ico',
          type: 'image/x-icon'
        }
      ],
      scripts: [
        {
          src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
          integrity: 'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo',
          crossorigin: 'anonymous'
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
          integrity: 'sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49',
          crossorigin: 'anonymous'
        },
        {
          src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
          integrity: 'sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy',
          crossorigin: 'anonymous'
        }
      ]
    })
  ]
};