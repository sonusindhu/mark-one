import React from 'react';
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
import assert from 'assert';
import { VARIANT } from '../../Theme/MarkOneTheme';
import Button from '../Button';

describe('Button', function () {
  let getByText: BoundFunction<GetByText>;
  let clickSpy: SinonSpy;
  context('when disabled prop is false', function () {
    beforeEach(function () {
      clickSpy = spy();
      ({ getByText } = render(
        <Button
          onClick={clickSpy}
          variant={VARIANT.BASE}
        >
          Click You
        </Button>
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
  context('when disabled prop is true', function () {
    beforeEach(function () {
      clickSpy = spy();
      ({ getByText } = render(
        <Button
          onClick={clickSpy}
          variant={VARIANT.BASE}
          disabled
        >
          Not Clickable
        </Button>
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
