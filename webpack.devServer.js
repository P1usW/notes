const path = require('path');
const merge = require('webpack-merge');
const dev = require('./webpack.dev');

module.exports = function (env, argv) {
  const PORT = process.env.PORT || 8080;
  const devConfig = dev(env, argv);

  function removePlugin(searchFunc) {
    devConfig.plugins.splice(devConfig.plugins.findIndex(searchFunc), 1);
  }
  
  removePlugin((p) => p instanceof MiniCssExtractPlugin);

  const serverConfig = {
    devServer: {
      // Enable gzip compression for everything served:
      compress: true,
      // Auto open in browser
      open: true,
      // Enable webpack's Hot Module Replacement feature
      hot: true,
      /// PORT
      port: PORT,
      // When using the HTML5 History API, the index.html page will likely
      // have to be served in place of any 404 responses.
      historyApiFallback: true,

      client: {
        // Allows to set log level in the browser
        logging: 'info',
        // Shows a full-screen overlay in the browser when there are compiler errors (not warnings)
        overlay: {
          errors: true,
          warnings: false,
        },
        // Tells dev-server the number of times it should try to reconnect the client. 
        reconnect: 5,
        // This option allows specifying URL to web socket server
        webSocketURL: {
          hostname: '0.0.0.0',
          pathname: '/ws',
          port: servePort,
          protocol: 'ws',
        },
      },
    },
  };

  return merge(devConfig, serverConfig);
};
