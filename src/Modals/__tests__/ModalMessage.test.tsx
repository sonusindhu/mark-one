import ModalMessage from 'Modals/ModalMessage';
import React from 'react';
import {
  render,
  BoundFunction,
  GetByText,
} from 'test-utils';
import { VARIANT } from 'Theme';

describe('Modal Message', function () {
  let getByText: BoundFunction<GetByText>;
  const errorMessage = 'Error: This entry may only contain numbers.';
  beforeEach(function () {
    ({ getByText } = render(
      <ModalMessage variant={VARIANT.NEGATIVE}>
        {errorMessage}
      </ModalMessage>
    ));
  });
  it('renders', function () {
    getByText(errorMessage);
  });
});
