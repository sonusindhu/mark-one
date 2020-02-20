import React from 'react';
import { render, fireEvent } from 'test-utils';
import { spy, SinonSpy } from 'sinon';
import assert from 'assert';
import DangerButton from '../DangerButton';

describe('Danger Button', function () {
  let getByText;
  let clickSpy: SinonSpy;
  beforeEach(function () {
    clickSpy = spy();
    ({ getByText } = render(
      <DangerButton clickHandler={clickSpy}>
        Click Me
      </DangerButton>
    ));
  });
  afterEach(function () {
    clickSpy.resetHistory();
  });
  it('renders', function () {
    getByText('Click Me');
  });
  it('calls the click handler when clicked', function () {
    fireEvent.click(getByText('Click Me'));
    assert.strictEqual(clickSpy.callCount, 1);
  });
});
