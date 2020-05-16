const webpack = require('webpack');

const isProduction =
  process.argv.indexOf('-p') >= 0 ||
  process.env.NODE_ENV === 'production';

module.exports = {
  ident: 'postcss',
  plugins: [
    require('postcss-import')({
      addDependencyTo: webpack,
    }),
    require('postcss-url')(),
    require('postcss-preset-env')({
      /* use stage 2 features (defaults) */
      stage: 0,
      features: {
        'nesting-rules': true,
      },
    }),
    require('postcss-reporter')(),
    require('postcss-browser-reporter')({
      disabled: isProduction,
    }),
  ],
};
