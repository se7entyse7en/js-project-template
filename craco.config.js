const CracoAlias = require('craco-alias');

// To avoid using the pragma for EmotionJS `css` prop:
// https://github.com/emotion-js/emotion/issues/1123#issuecomment-455767886
const emotionPresetOptions = {};

const emotionBabelPreset = require("@emotion/babel-preset-css-prop").default(
  undefined,
  emotionPresetOptions
);

module.exports = {
  babel: {
    plugins: [
      ...emotionBabelPreset.plugins
    ]
  },
  plugins: [
    {
      plugin: CracoAlias,
      debug:true,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@ui': './src/packages/ui',
        },
      },
    },
  ],
};
