/* eslint-disable @typescript-eslint/no-var-requires */

const withTM = require('next-transpile-modules')(['crypto-random-string']);
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const config = {
  target: 'serverless',
  reactStrictMode: true,
  future: {
    strictPostcssConfiguration: true,
  },
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ['assets.coingecko.com', 'unavatar.io'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
  webpack(webpackConfig) {
    webpackConfig.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm';

    // Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
    webpackConfig.experiments = { asyncWebAssembly: true };

    // https://formatjs.io/docs/guides/advanced-usage#react-intl-without-parser-40-smaller
    webpackConfig.resolve.alias['@formatjs/icu-messageformat-parser'] = '@formatjs/icu-messageformat-parser/no-parser';

    return webpackConfig;
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
  },
};

module.exports = withBundleAnalyzer(withTM(config));
