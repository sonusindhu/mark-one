import React from 'react';
import { render } from 'test-utils';
import LoadSpinner from '../LoadSpinner';

describe('LoadSpinner', function () {
  let getByText;
  beforeEach(function () {
    ({ getByText } = render(
      <LoadSpinner>
        <div data-testid="test-spinner"> Data Loading  </div>
      </LoadSpinner>
    ));
  });
  it('renders value', function () {
    getByText('Data Loading');
  });
});
