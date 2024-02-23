/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Add a favicon plugin
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.FAVICON': JSON.stringify('images/favicon.svg'),
        })
      );

      return config;
    },
  },
};

module.exports = nextConfig;
