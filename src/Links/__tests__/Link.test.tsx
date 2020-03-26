import React from 'react';
import { render, fireEvent } from 'test-utils';
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
  it('calls the click handler when clicked', function () {
    fireEvent.click(getByText('Test Link'));
    strictEqual(clickSpy.callCount, 1);
  });
  it('renders without an underline', function () {
    const style = window.getComputedStyle(getByText('Test Link'));
    strictEqual(style.textDecoration, 'none');
  });
});
