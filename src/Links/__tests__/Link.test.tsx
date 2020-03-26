import React from 'react';
import { render } from 'test-utils';
import { spy } from 'sinon';
import { MemoryRouter } from 'react-router-dom';
import { strictEqual } from 'assert';
import Link from '../Link';

describe('Link', function () {
  let getByText;
  let clickSpy;
  beforeEach(function () {
    clickSpy = spy();
    ({ getByText } = render(
      <MemoryRouter>
        <Link to="/">
          Test Link
        </Link>
      </MemoryRouter>
    ));
  });
  afterEach(function () {
    clickSpy.resetHistory();
  });
  it('renders', function () {
    getByText('Test Link');
  });
  it('renders without an underline', function () {
    const style = window.getComputedStyle(getByText('Test Link'));
    strictEqual(style.textDecoration, 'none');
  });
});
