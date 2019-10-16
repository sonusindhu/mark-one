module.exports = {
  exit: true,
  ui: 'bdd',
  reporter: 'spec',
  timeout: 30000,
  file: '.mochainit.ts',
  recursive: true,
  require: [
    'ts-node/register',
    'raf/polyfill',
    'tsconfig-paths/register',
  ],
  extension: ['ts', 'tsx', 'js'],
  spec: ['src/**/*.test.ts', 'src/**/*/*.test.tsx'],
}
