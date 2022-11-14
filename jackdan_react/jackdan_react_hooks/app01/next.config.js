/* eslint-disable */
const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { esExternals: true },
  // 注意: 需要开启实验性功能以在静态网站生成模式中使用NextJS图像。
  // 请参见 https://nextjs.org/docs/messages/export-image-api 来了解不同的解决方法。
  images: {
    unoptimized: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(txt|svg|ttf)?$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext][query]'
      },
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/*': resolve('src/*'),
    }
    return config;
  },
};