module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    'storybook-addon-material-ui/register',
    '@storybook/addon-storysource'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.html$/,
        use: [
          {
            loader: require.resolve('html-loader'),
          },
        ],
      });

    // Return the altered config
    return config;
  },
};
