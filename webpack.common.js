const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// constant path
const srcPath = path.resolve(__dirname, './src/');
const buildPath = path.resolve(__dirname, './build/');

// style files regex's
const cssRegex = /\.css$/;
// const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = function (env, argv) {
  const isDevServer = env.WEBPACK_SERVE;
  const mode = argv.mode || (isDevServer ? 'development' : 'production');
  const isDevMode = mode !== 'production';
  
  return {
    // Webpack noise constrained to errors and warnings
    stats: 'errors-warnings',
     // entryPoint for webpack
    entry: path.resolve(srcPath, 'index.tsx'),
    output: {
      // build path output
      path: buildPath,
      
      filename: "[name].js",
      chunkFilename: "[name].js",
      // clean build folder
      clean: true,
      // This is an important option when using on-demand-loading or loading external resources like images, files, etc.
      // If an incorrect value is specified you'll receive 404 errors while loading these resources.
      publicPath: 'static/js/',
      // file and chunk names
      filename: isDevMode
        ? 'static/js/[name].js'
        : 'static/js/[name].[contenthash:8].js',
      chunkFilename: isDevMode
        ? 'static/js/[name].chunk.js'
        : 'static/js/[name].[contenthash:8].chunk.js',
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
            isDevMode 
              ? 'style-loader'
              : {
                loader: MiniCssExtractPlugin.loader,
              },
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
      // webpack alias
      plugins: [new TsconfigPathsPlugin({configFile: './tsconfig.json'})],
    },
    plugins: [
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            scriptLoading: 'defer',
            filename: 'index.html',
            template: path.resolve(__dirname, 'public', 'index.html'),
          },
          !isDevMode
            ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            }
            : undefined
        )
      ),
      new webpack.WatchIgnorePlugin({
        paths: [/css\.d\.ts$/, /\.d\.ts$/, /s[ac]ss\.d\.ts$/],
      }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
      }),
    ],
  };
};
