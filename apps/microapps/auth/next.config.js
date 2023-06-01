//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'build',
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'nexius-host',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './login': './pages/index.tsx',
        },
        extraOptions: {
          enableUrlLoaderFix: true,
          automaticAsyncBoundary: true,
        },
      })
    );
    return config;
  },
};

module.exports = withNx(nextConfig);
