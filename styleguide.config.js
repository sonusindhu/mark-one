const path = require('path');

module.exports = {
  components: 'src/**/*.tsx',
  exampleMode: 'expand',
  getExampleFilename: (filePath) => (
    filePath.replace(/\/src\//, '/examples/')
      .replace(/\.tsx/, '.md')
  ),
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/Theme/MarkOneWrapper.tsx'),
  },
  webpackConfig: require('./webpackfile.js'),
};
