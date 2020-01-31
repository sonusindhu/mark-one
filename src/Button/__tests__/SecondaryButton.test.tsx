import React from 'react';
import { render, fireEvent, cleanup } from 'test-utils';
import { spy } from 'sinon';
import assert from 'assert';
import SecondaryButton from '../SecondaryButton';

describe('Secondary Button', function () {
  let getByText;
  let clickSpy;
  beforeEach(function () {
    clickSpy = spy();
    ({ getByText } = render(
      <SecondaryButton clickHandler={clickSpy}>
        Click Me
      </SecondaryButton>
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
