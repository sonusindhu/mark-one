module.exports = {
  components: 'src/**/*.tsx',
  getExampleFilename: (path) => (
    path.replace(/\/src\//, '/examples/')
      .replace(/\.tsx/, '.md')
  ),
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  webpackConfig: require('./webpackfile.js'),
}
