const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.resolve(__dirname, './src/');
const buildPath = path.resolve(__dirname, './build/');

const isDevMode = true;
const servePort = process.env.PORT || 8080

// style files regexes
const cssRegex = /\.css$/;
// const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = function (env, argv) {
  // console.log(env)
  // console.log(argv)
  return {
    entry: path.resolve(srcPath, 'index.tsx'),
    mode: 'development',
    output: {
      path: buildPath,
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[chunkhash].chunk.bundle.js',
      clean: true,
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(tsx?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env', { targets: 'defaults' }]],
              },
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
        {
          test: /\.(jsx?)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: cssRegex,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                mode: 'global',
              },
            },
            'postcss-loader',
          ],
        },
        {
          test: sassRegex,
          exclude: sassModuleRegex,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: {
                  mode: 'global',
                },
              },
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: sassModuleRegex,
          exclude: /node_modules/,
          use: [
            'style-loader',
            '@teamsupercell/typings-for-css-modules-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: {
                  mode: 'local',
                  getLocalIdent: (
                    loaderContext,
                    _localIdentName,
                    localName,
                    options
                  ) => {
                    const request = path
                      .relative(
                        options.context || '',
                        loaderContext.resourcePath
                      )
                      .replace(`src${path.sep}`, '')
                      .replace('.module.css', '')
                      .replace('.module.scss', '')
                      .replace(/\\|\//g, '-')
                      .replace(/\./g, '_');
                    return `${request}__${localName}`;
                  },
                },
              },
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          exclude: /node_modules/,
          use: ['file-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@src': srcPath,
        '@style': path.resolve(srcPath, 'style'),
        '@components': path.resolve(srcPath, 'components'),
      },
    },
    devServer: {
      compress: true,
      open: true,
      hot: true,
      port: port,
      historyApiFallback: true,
      client: {
        logging: 'info',
        overlay: {
          errors: true,
          warnings: false,
        },
        reconnect: 5,
        webSocketURL: {
          hostname: '0.0.0.0',
          pathname: '/ws',
          port: 8080,
          protocol: 'ws',
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'public', 'index.html'),
        minify: isDevMode
          ? false
          : {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true,
              collapseBooleanAttributes: true,
              removeScriptTypeAttributes: true,
            },
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/css\.d\.ts$/, /\.d\.ts$/, /s[ac]ss\.d\.ts$/],
      }),
      new webpack.ProgressPlugin(),
    ],
  };
};
