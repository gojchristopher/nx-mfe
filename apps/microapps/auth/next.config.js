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
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config) {
    config.cache = true;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'authentication',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Login': './pages/index.tsx',
        },
        shared: {
          '@highoutput/hds': {
            singleton: true,
            requiredVersion: false,
          },
          '@highoutput/hds-forms': {
            singleton: true,
            requiredVersion: false,
          },
          '@highoutput/hds-tab': {
            singleton: true,
            requiredVersion: false,
          },
          '@highoutput/hds-table': {
            singleton: true,
            requiredVersion: false,
          },
          '@highoutput/hds-toast': {
            singleton: true,
            requiredVersion: false,
          },
          '@hookform/resolvers': {
            singleton: true,
            requiredVersion: false,
          },
          'react-hook-form': {
            singleton: true,
            requiredVersion: false,
          },
          yup: {
            singleton: true,
            requiredVersion: false,
          },
          '@chakra-ui/react': {
            singleton: true,
            requiredVersion: false,
          },
          '@nexius/microapps': {
            singleton: true,
            requiredVersion: false,
          },
        },
        extraOptions: {
          enableUrlLoaderFix: true,
          automaticAsyncBoundary: true,
          enableImageLoaderFix: true,
        },
      })
    );
    return config;
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = withNx(nextConfig);
