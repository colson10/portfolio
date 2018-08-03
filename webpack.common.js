const HTMLWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = module.exports = {};

webpackConfig.entry = `${__dirname}/src/main.js`;

webpackConfig.output = {
  filename: '[name].[hash].js',
  path: `${__dirname}/build`,
};

webpackConfig.plugins = [
  new HTMLWebpackPlugin({
    title: 'Carl Olson | Portfolio',
  }),
];

webpackConfig.module = {};
webpackConfig.module.rules = [
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      'file-loader',
    ],
  },
  {
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env', 'stage-0', 'react'],
        plugins: ['transform-react-jsx-source'],
        cacheDirectory: true,
      },
    },
  },
];
