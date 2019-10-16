process.env.NODE_ENV = "testing";
import jsdom from 'jsdom-global';
import { cleanup } from '@testing-library/react';

before(function configureEnzyme() {
  jsdom('', { runScripts: 'outside-only' });
});

afterEach(cleanup);
