import React from 'react';
import {
  render,
  BoundFunction,
  GetByText,
} from 'test-utils';
import ValidationErrorMessage from '../ValidationErrorMessage';

describe('Validation Error Message', function () {
  let getByText: BoundFunction<GetByText>;
  beforeEach(function () {
    ({ getByText } = render(
      <ValidationErrorMessage id="number-error">
        Error: This entry may only contain numbers.
      </ValidationErrorMessage>
    ));
  });
  it('renders', function () {
    getByText('Error: This entry may only contain numbers.');
  });
});
