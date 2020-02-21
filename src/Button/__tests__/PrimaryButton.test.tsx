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
import PrimaryButton from '../PrimaryButton';

type ReactGetByText = (
  text: Matcher,
  options?: {
    selector?: string;
    exact?: boolean;
    ignore?: string|boolean;
    normalizer?: NormalizerFn;
  }) => HTMLElement;

describe('Primary Button', function () {
  let getByText: ReactGetByText;
  let clickSpy: SinonSpy;
  context('when disabled prop is true', function () {
    beforeEach(function () {
      clickSpy = spy();
      ({ getByText } = render(
        <PrimaryButton clickHandler={clickSpy}>
          Click You
        </PrimaryButton>
      ));
    });
    afterEach(function () {
      clickSpy.resetHistory();
    });
    it('renders', function () {
      getByText('Click You');
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(getByText('Click You'));
      assert.strictEqual(clickSpy.callCount, 1);
    });
  });
  context('when disabled prop is false', function () {
    beforeEach(function () {
      clickSpy = spy();
      ({ getByText } = render(
        <PrimaryButton clickHandler={clickSpy} disabled>
          Not Clickable
        </PrimaryButton>
      ));
    });
    afterEach(function () {
      clickSpy.resetHistory();
    });
    it('renders', function () {
      getByText('Not Clickable');
    });
    it('does not call the click handler when clicked', function () {
      fireEvent.click(getByText('Not Clickable'));
      assert.strictEqual(clickSpy.callCount, 0);
    });
  });
});
