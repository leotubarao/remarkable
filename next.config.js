const path = require('path');

module.exports = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  }
};
