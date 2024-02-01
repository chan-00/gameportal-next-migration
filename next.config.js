const stylexPlugin = require('@stylexjs/nextjs-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = stylexPlugin({
  rootDir: __dirname,
})(nextConfig);