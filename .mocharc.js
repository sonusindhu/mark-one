module.exports = {
  exit: true,
  ui: 'bdd',
  reporter: 'spec',
  timeout: 30000,
  recursive: true,
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
