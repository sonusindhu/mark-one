import React from 'react';
import { render } from 'test-utils';
import { spy } from 'sinon';
import { MemoryRouter } from 'react-router-dom';
import Link from '../Link';

describe('Link', function () {
  let getByText;
  let clickSpy;
  beforeEach(function () {
    clickSpy = spy();
    ({ getByText } = render(
      <MemoryRouter>
        <Link to="/" onClick={clickSpy}>
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
});
