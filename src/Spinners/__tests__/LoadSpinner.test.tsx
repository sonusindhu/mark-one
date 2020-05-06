import React from 'react';
import { render } from 'test-utils';
import LoadSpinner from '../LoadSpinner';

describe('Testing Data Loading Spinner', function () {
  let getByTestId;
  let getByText;
  beforeEach(function () {

    ({ getByTestId, getByText} = render(
      <LoadSpinner >
        <div data-testid="test-spinner"> Data Loading  </div>
      </LoadSpinner>
    ));
  });

  it('renders', function () {
    getByTestId('test-spinner');
  });

  it('renders value', function () {
    getByText('Data Loading');
    //container.contains('')
  });

});
