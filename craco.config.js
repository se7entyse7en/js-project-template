const CracoAlias = require('craco-alias');

module.exports = {
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
