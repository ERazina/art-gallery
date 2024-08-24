const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('autoprefixer')({
          overrideBrowserslist: ['>1%', 'last 4 versions', 'Firefox ESR'],
        }),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      // Добавление MiniCssExtractPlugin
      webpackConfig.plugins.push(
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:8].css',
          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        })
      );

      // Замена правил для обработки SCSS
      webpackConfig.module.rules = webpackConfig.module.rules.map((rule) => {
        if (rule.oneOf) {
          rule.oneOf = rule.oneOf.map((oneOf) => {
            if (oneOf.test && oneOf.test.toString().includes('scss')) {
              oneOf.use = [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
              ];
            }
            return oneOf;
          });
        }
        return rule;
      });

      // Минификация CSS и JS
      webpackConfig.optimization.minimizer.push(
        new CssMinimizerPlugin({
          test: /\.css$/i,
        }),
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true,
            },
            format: {
              comments: false,
            },
          },
          extractComments: false,
        })
      );

      return webpackConfig;
    },
  },
};
