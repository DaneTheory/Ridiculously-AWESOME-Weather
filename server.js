// Module
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

// File
const config = require('./webpack.config');

const host = '127.0.0.1';
const port = 9777;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  port: 9777,
  hot: false,
  historyApiFallback: true,
  stats: {
    colors: false,
  },
}).listen(port, host, function(err, result) {
  if (err) console.log(err);
  console.log(`Ridiculously Awesome Weather App is running on port: :${ port }`);
});
