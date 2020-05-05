import React from 'react';
import { render } from 'test-utils';
import { strictEqual } from 'assert';
import LoadSpinner from '../LoadSpinner';

describe('Load Spinner', function () {
  let getByTestId;
  beforeEach(function () {
    ({ getByTestId } = render(
      <LoadSpinner >
        <p>Test</p>
      </LoadSpinner>
    ));
  });

  it('renders', function () {
    //getByTestId('test-icon');
  });

});
