const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const cssnano = require('cssnano');
const cssnext = require('postcss-preset-env');
const reporter = require('postcss-reporter');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins() {
      return [cssnext(), cssnano(), reporter({ clearReportedMessages: true })];
    },
    sourceMap: true,
  },
};

const typescript = {
  test: /\.(ts|js)$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread',
        ],
      },
    },
  ],
};

const sass = {
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader?sourceMap',
    postcss,
    'sass-loader?sourceMap',
  ],
};

module.exports = (env) => {
  const [mode, platform] = env.split(':');

  if (platform === 'firefox') {
    typescript.use.push({
      loader: 'webpack-strip-block',
      options: {
        start: 'CHROME_START',
        end: 'CHROME_END',
      },
    });
  }

  if (platform === 'chrome') {
    typescript.use.push({
      loader: 'webpack-strip-block',
      options: {
        start: 'FIREFOX_START',
        end: 'FIREFOX_END',
      },
    });
  }

  typescript.use.push({
    loader: 'placeholder-loader',
    options: {
      placeholder: 'BUILD_PLATFORM',
      handler: () => platform,
    },
  });

  typescript.use.push({
    loader: 'placeholder-loader',
    options: {
      placeholder: 'DEV_OR_PROD',
      handler: () => mode,
    },
  });

  const config = {
    entry: {
      'js/index': './src/js/index.js',
      'js/background': './src/js/background.js',
      'js/set-image': './src/js/set-image.js',
      'js/tab': './src/js/tab.js',
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },

    module: {
      rules: [typescript, sass],
    },

    plugins: [
      // Clean up the dist folder before each build
      new CleanWebpackPlugin(),
      // Prevent CSS / SCSS imports from generating additional JS file
      new FixStyleOnlyEntriesPlugin(),

      new MiniCssExtractPlugin({
        filename: 'css/main.css',
      }),

      new ForkTsCheckerWebpackPlugin(),

      new CopyWebpackPlugin({
        patterns: [
          {
            from: './src/index.html',
            to: '',
          },
          {
            from: './src/icons',
            to: 'icons',
          },
        ],
      }),

      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } },
      }),

      new GenerateJsonPlugin(
        'manifest.json',
        merge(
          require('./src/manifest/common.json'),
          require(`./src/manifest/${platform}.json`)
        ),
        null,
        2
      ),
    ],
  };

  return config;
};
