import React from 'react';
import { render, cleanup } from 'test-utils';
import ValidationErrorMessage from '../ValidationErrorMessage';

describe('Validation Error Message', function () {
  let getByText;
  beforeEach(function () {
    ({ getByText } = render(
      <ValidationErrorMessage>
        Error: This entry may only contain numbers.
      </ValidationErrorMessage>
    ));
  });
  afterEach(function () {
    cleanup();
  });
  it('renders', function () {
    getByText('Error: This entry may only contain numbers.');
  });
});
