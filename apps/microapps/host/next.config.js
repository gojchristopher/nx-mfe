//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config, { isServer }) {
    const subpath = isServer ? 'ssr' : 'chunks';

    config.cache = true;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          '@remotes/authentication': `authentication@http://localhost:4001/_next/static/${subpath}/remoteEntry.js`,
          '@remotes/members': `members@http://localhost:4002/_next/static/${subpath}/remoteEntry.js`,
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
          '@chakra-ui/react': {
            singleton: true,
            requiredVersion: false,
          },
          yup: {
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
  images: {
    domains: ['localhost'],
  },
};

module.exports = withNx(nextConfig);
