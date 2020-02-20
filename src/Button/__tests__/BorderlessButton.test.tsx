import React from 'react';
import { render, fireEvent } from 'test-utils';
import { spy, SinonSpy } from 'sinon';
import assert from 'assert';
import BorderlessButton from '../BorderlessButton';

describe('Borderless Button', function () {
  let getByText;
  let clickSpy: SinonSpy;
  beforeEach(function () {
    clickSpy = spy();
    ({ getByText } = render(
      <>
        <BorderlessButton clickHandler={clickSpy}>
          Click Me
        </BorderlessButton>
        <BorderlessButton disabled clickHandler={clickSpy}>
          Not Clickable
        </BorderlessButton>
      </>
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
  it('does not call the click handler when button prop disabled is truthy', function () {
    fireEvent.click(getByText('Not Clickable'));
    assert.strictEqual(clickSpy.callCount, 0);
  });
});
