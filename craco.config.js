const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  webpack: {
    plugins: {
      add: [
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, "public/images"),
              to: path.resolve(__dirname, "build/optimized-images"),
              globOptions: {
                ignore: ["**/index.html"],
              },
              noErrorOnMissing: true,
              transform(content, absoluteFrom) {
                return require("image-webpack-loader")(content, {
                  bypassOnDebug: true,
                  disable: false,
                  mozjpeg: {
                    progressive: true,
                    quality: 65,
                  },
                  optipng: {
                    enabled: true,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  webp: {
                    quality: 75,
                  },
                });
              },
            },
          ],
        }),
      ],
    },
  },
  eslint: {
    enable: true /* (default value) */,
    mode: "extends" /* (default value) */ || "file",
    configure: {
      /* ... */
    },
    configure: (eslintConfig, { env, paths }) => {
      /* ... */
      return eslintConfig;
    },
    pluginOptions: {
      /* ... */
    },
    pluginOptions: (eslintPluginOptions, { env, paths }) => {
      /* ... */
      return eslintPluginOptions;
    },
  },
};
