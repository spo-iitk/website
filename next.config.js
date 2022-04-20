const CopyPlugin = require('copy-webpack-plugin');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = {
  images: {
    loader: 'custom',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    nextImageExportOptimizer: {
      imageFolderPath: 'public/testimonials',
      exportFolderPath: 'out',
      quality: 75,
    },
  },
  env: {
    storePicturesInWEBP: true,
  },
};

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['github.blog'],
    deviceSizes: [320, 640, 1080, 1200],
    imageSizes: [64, 128],
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: [{ loader: '@svgr/webpack' }, { loader: 'url-loader' }],
    });

    return config;
  },
});
