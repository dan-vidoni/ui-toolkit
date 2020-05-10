module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register'
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
