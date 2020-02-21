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
import SecondaryButton from '../SecondaryButton';

type ReactGetByText = (
  text: Matcher,
  options?: {
    selector?: string;
    exact?: boolean;
    ignore?: string|boolean;
    normalizer?: NormalizerFn;
  }) => HTMLElement;

describe('Secondary Button', function () {
  let getByText;
  let clickSpy: SinonSpy;
  beforeEach(function () {
    clickSpy = spy();
    ({ getByText } = render(
      <>
        <SecondaryButton clickHandler={clickSpy}>
          Click Me
        </SecondaryButton>
        <SecondaryButton disabled clickHandler={clickSpy}>
          Not Clickable
        </SecondaryButton>
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
