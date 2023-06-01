//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config, { isServer }) {
    const subpath = isServer ? 'ssr' : 'chunks';
    config.cache = true;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'members',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          '@remotes/authentication': `authentication@http://localhost:4001/_next/static/${subpath}/remoteEntry.js`,
        },
        shared: {
          '@highoutput/hds': {
            singleton: true,
            requiredVersion: false,
            eager: true,
          },
          // '@highoutput/hds-forms': {
          //   singleton: true,
          //   requiredVersion: false,
          //   eager: true,
          // },
          // '@highoutput/hds-tab': {
          //   singleton: true,
          //   requiredVersion: false,
          //   eager: true,
          // },
          // '@highoutput/hds-table': {
          //   singleton: true,
          //   requiredVersion: false,
          //   eager: true,
          // },
          // '@highoutput/hds-toast': {
          //   singleton: true,
          //   requiredVersion: false,
          //   eager: true,
          // },
          //   '@hookform/resolvers': {
          //     singleton: true,
          //     requiredVersion: false,
          //   },
          //   'react-hook-form': {
          //     singleton: true,
          //     requiredVersion: false,
          //   },
          //   yup: {
          //     singleton: true,
          //     requiredVersion: false,
          //   },
          '@nexius/microapps': {
            singleton: true,
            requiredVersion: false,
          },
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
