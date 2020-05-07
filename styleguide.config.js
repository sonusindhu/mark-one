const path = require('path');
const fs = require('fs');
const rdts = require('react-docgen-typescript');

const guidelinesSections = fs.readdirSync(
  path.join(__dirname, 'guidelines'),
  {
    withFileTypes: true,
  }
).reduce((list, page) => {
  const { name: fileName } = page;
  if (/\.md$/.test(fileName)) {
    const name = fileName.replace(/\.md$/, '');
    const content = path.join('guidelines', fileName);
    const sectionObject = {
      name,
      content,
    };
    list.push(sectionObject);
  }
  return list;
}, []);

const componentSections = fs.readdirSync(
  path.join(__dirname, 'src'),
  {
    withFileTypes: true,
  }
).reduce((list, component) => {
  if (component.isDirectory() && component.name !== '__tests__') {
    const { name } = component;
    const sectionObject = {
      name,
      components: `src/${name}/*.tsx`,
      ignore: '*.test.tsx',
    };
    const overviewFile = path.join('examples', name, 'README.md');
    if (fs.existsSync(overviewFile)) {
      sectionObject.content = overviewFile;
    }
    list.push(sectionObject);
  }
  return list;
}, []);

const sections = [
  {
    name: 'Overview',
    content: 'README.md',
    sectionDepth: 1,
    sections: [
      {
        name: 'Contributing',
        content: 'CONTRIBUTING.md',
      },
    ],
  },
  {
    name: 'Interaction Guidelines',
    sections: guidelinesSections,
    pageDepth: 1,
  },
  ...componentSections,
];

module.exports = {
  components: 'src/**/*.tsx',
  defaultExample: 'examples/default.md',
  exampleMode: 'expand',
  getExampleFilename: (filePath) => {
    const testFile = filePath.replace(/\/src\//, '/examples/')
      .replace(/\.tsx$/, '.md');
    if (fs.existsSync(testFile)) {
      return testFile;
    }
  },
  pagePerSection: true,
  propsParser: rdts.withCustomConfig(
    './tsconfig.json',
    {
      componentNameResolver: (exp, source) => (
        rdts.getDefaultExportForFile(source)
      ),
    }
  ).parse,
  sections,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/Theme/MarkOneWrapper.tsx'),
  },
  webpackConfig: require('./webpackfile.js'),
};
