import React from 'react';
import { strictEqual } from 'assert';
import {
  render,
  fireEvent,
  BoundFunction,
  GetByText,
} from 'test-utils';
import {
  spy,
  SinonSpy,
} from 'sinon';
import { VARIANT } from 'Theme';
import { GlobalMessage } from 'Alerts';

describe('Global Message', function () {
  let getByLabelText: BoundFunction<GetByText>;
  let getByText: BoundFunction<GetByText>;
  let clickSpy: SinonSpy;
  const alertMessage = 'Error: Please try again';
  const buttonAltText = 'Close alert button';
  beforeEach(function () {
    clickSpy = spy();
    ({ getByText, getByLabelText } = render(
      <GlobalMessage
        variant={VARIANT.NEGATIVE}
        onClick={clickSpy}
        buttonAlt={buttonAltText}
        buttonLabel="Close"
      >
        {alertMessage}
      </GlobalMessage>
    ));
  });
  afterEach(function () {
    clickSpy.resetHistory();
  });
  it('renders the message', function () {
    getByText(alertMessage);
  });
  it('renders the button', function () {
    getByLabelText(buttonAltText);
  });
  it('calls the click handler when the close button is clicked', function () {
    fireEvent.click(getByLabelText(buttonAltText));
    strictEqual(clickSpy.callCount, 1);
  });
});
