import { restore } from 'sinon';

after(function () {
  Object.keys(require.cache).forEach((key) => {
    delete require.cache[key];
  })
});

afterEach(restore);
