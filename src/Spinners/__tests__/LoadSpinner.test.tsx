import React from 'react';
import { render, GetByText, BoundFunction } from 'test-utils';
import LoadSpinner from '../LoadSpinner';

describe('LoadSpinner', function () {
  let getByText: BoundFunction<GetByText>;
  beforeEach(function () {
    ({ getByText } = render(
      <LoadSpinner>
        Loading Data
      </LoadSpinner>
    ));
  });
  it('renders value', function () {
    getByText('Loading Data');
  });
});
