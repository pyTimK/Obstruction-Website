const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    },
  ],

  withPWA({
    reactStrictMode: true,
    trailingSlash: true,
  }),
  {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.externals.push({
        'utf-8-validate': 'commonjs utf-8-validate',
        'bufferutil': 'commonjs bufferutil',
      })
      return config
    },
  },
]);
