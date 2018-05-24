// Module
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

// File
const config = require('./webpack.config');

const host = 'localhost';
const port = 9777;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}).listen(port, host, function(err, result) {
  if (err) console.log(err);
  console.log(`Ridiculously Awesome Weather App is running on port: :${ port }`);
});
