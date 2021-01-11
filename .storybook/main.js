const path = require('path');
const cracoConfig = require('../craco.config.js');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  babel: (config) => {
    config.presets.push(require.resolve("@emotion/babel-preset-css-prop"));
    return config;
  },
  webpackFinal: async (config) => {
    config.module.rules[5].oneOf[2].options.presets = [
      config.module.rules[5].oneOf[2].options.presets[1],
      config.module.rules[5].oneOf[2].options.presets[0],
    ];
    const cracoAliases = cracoConfig.plugins[0].options.aliases;
    const aliases = {};
    Object.entries(cracoAliases).forEach(
      ([key, val]) => (aliases[key] = path.resolve(__dirname, `.${val}`))
    );
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          ...aliases,
        },
      },
    };
  },
};
