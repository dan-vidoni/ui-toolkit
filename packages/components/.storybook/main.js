module.exports = {
  stories: ['../src/**/*.stories.js'],
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
