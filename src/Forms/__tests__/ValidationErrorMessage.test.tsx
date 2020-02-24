import React from 'react';
import {
  render,
  cleanup,
  Matcher,
  NormalizerFn,
} from 'test-utils';
import ValidationErrorMessage from '../ValidationErrorMessage';

type ReactGetByText = (
  text: Matcher,
  options?: {
    selector?: string;
    exact?: boolean;
    ignore?: string|boolean;
    normalizer?: NormalizerFn;
  }) => HTMLElement;

describe('Validation Error Message', function () {
  let getByText: ReactGetByText;
  beforeEach(function () {
    ({ getByText } = render(
      <ValidationErrorMessage>
        Error: This entry may only contain numbers.
      </ValidationErrorMessage>
    ));
  });
  it('renders', function () {
    getByText('Error: This entry may only contain numbers.');
  });
});
