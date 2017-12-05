const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  const isProd = env === 'production';
  const CSSExtract = new ExtractTextPlugin('css/styles.css');
  console.log('env', env);

  return {
    entry: './src/app.jsx',
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        modules: `${__dirname}/node_modules`,
        jquery: 'modules/jquery/dist/jquery.min.js',
        bootstrap: 'modules/bootstrap/dist/js/bootstrap.min.js',
      },
    },
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'scripts/bundle.js',
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
      CSSExtract,
    ],
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
        {
          test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
          loader: 'file-loader',
          options: {
            name(file) {
              if (env === 'development') {
                return '[path][name].[ext]';
              }
              return '[hash].[ext]';
            },
            outputPath: 'assets/',
          },
        },
      ],
    },
    devtool: isProd ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
    },
  };
};
