const path = require('path');

module.exports = ({ config, mode }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    components: path.resolve(__dirname, '../src/components'),
  };
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');

  config.module.rules.push({
    test: /\.css$/,
    use: ['postcss-loader'],
  });
  return config;
};
