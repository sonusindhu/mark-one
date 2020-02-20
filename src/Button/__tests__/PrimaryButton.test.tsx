import React from 'react';
import { render, fireEvent } from 'test-utils';
import { spy, SinonSpy } from 'sinon';
import assert from 'assert';
import PrimaryButton from '../PrimaryButton';

describe('Primary Button', function () {
  let getByText;
  let clickSpy: SinonSpy;
  beforeEach(function () {
    clickSpy = spy();
    ({ getByText } = render(
      <PrimaryButton clickHandler={clickSpy}>
        Click Me
      </PrimaryButton>
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
