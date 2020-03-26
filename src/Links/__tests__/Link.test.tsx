import React from 'react';
import {
  render,
  BoundFunction,
  GetByText,
} from 'test-utils';
import { MemoryRouter } from 'react-router-dom';
import { strictEqual } from 'assert';
import Link from '../Link';

describe('Link', function () {
  let getByText: BoundFunction<GetByText>;
  beforeEach(function () {
    ({ getByText } = render(
      <MemoryRouter>
        <Link to="/">
          Test Link
        </Link>
      </MemoryRouter>
    ));
  });
  it('renders', function () {
    getByText('Test Link');
  });
  it('renders without an underline', function () {
    const style = window.getComputedStyle(getByText('Test Link'));
    strictEqual(style.textDecoration, 'none');
  });
});
