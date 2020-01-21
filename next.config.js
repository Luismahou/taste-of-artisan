const withCSS = require('@zeit/next-css');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = withCSS({
  webpack(config) {
    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    config.module.rules.push({
      test: /\.md$/,
      use: ['raw-loader'],
    });

    return config;
  },
});
