import React from 'react';
import {
  render,
  fireEvent,
  NormalizerFn,
  Matcher,
} from 'test-utils';
import {
  spy,
  SinonSpy,
} from 'sinon';
import assert from 'assert';
import DangerButton from '../DangerButton';

type ReactGetByText = (
  text: Matcher,
  options?: {
    selector?: string;
    exact?: boolean;
    ignore?: string|boolean;
    normalizer?: NormalizerFn;
  }) => HTMLElement;

describe('Danger Button', function () {
  let getByText;
  let clickSpy: SinonSpy;
  beforeEach(function () {
    clickSpy = spy();
    ({ getByText } = render(
      <>
        <DangerButton clickHandler={clickSpy}>
          Click Me
        </DangerButton>
        <DangerButton disabled clickHandler={clickSpy}>
          Not Clickable
        </DangerButton>
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
