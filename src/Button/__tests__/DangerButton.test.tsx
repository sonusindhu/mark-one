import React from 'react';
import { render, fireEvent, cleanup } from 'test-utils';
import { spy } from 'sinon';
import assert from 'assert';
import DangerButton from '../DangerButton';

describe('Danger Button', function () {
  let getByText;
  let clickSpy;
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
    cleanup();
  });
  it('renders', function () {
    getByText('Click Me');
  });
  it('calls the click handler when clicked', function () {
    fireEvent.click(getByText('Click Me'));
    assert.equal(clickSpy.callCount, 1);
  });
});
