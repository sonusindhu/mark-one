module.exports = {
  ui: 'bdd',
  reporter: 'spec',
  timeout: 30000,
  file: '.mochainit.ts',
  require: [
    'ts-node/register',
    'raf/polyfill',
    'tsconfig-paths/register',
    'jsdom-global/register',
    'ignore-styles',
  ],
  extension: ['ts', 'tsx', 'js'],
  spec: ['src/**/*.test.ts', 'src/**/*/*.test.tsx'],
}
