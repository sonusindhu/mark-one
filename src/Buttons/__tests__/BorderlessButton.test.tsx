import React from 'react';
import {
  render,
  fireEvent,
  BoundFunction,
  GetByBoundAttribute,
} from 'test-utils';
import {
  spy,
  SinonSpy,
} from 'sinon';
import assert from 'assert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { VARIANT } from '../../Theme';
import BorderlessButton from '../BorderlessButton';

describe('Borderless Button', function () {
  let getByTestId: BoundFunction<GetByBoundAttribute>;
  let clickSpy: SinonSpy;
  context('when disabled prop is false', function () {
    beforeEach(function () {
      clickSpy = spy();
      ({ getByTestId } = render(
        <BorderlessButton
          onClick={clickSpy}
          variant={VARIANT.BASE}
        >
          <FontAwesomeIcon icon={faArrowUp} data-testid="test-button" />
        </BorderlessButton>
      ));
    });
    afterEach(function () {
      clickSpy.resetHistory();
    });
    it('renders', function () {
      getByTestId('test-button');
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(getByTestId('test-button'));
      assert.strictEqual(clickSpy.callCount, 1);
    });
  });
  context('when disabled prop is true', function () {
    beforeEach(function () {
      clickSpy = spy();
      ({ getByTestId } = render(
        <BorderlessButton
          onClick={clickSpy}
          variant={VARIANT.BASE}
          disabled
        >
          <FontAwesomeIcon icon={faArrowUp} data-testid="test-button" />
        </BorderlessButton>
      ));
    });
    afterEach(function () {
      clickSpy.resetHistory();
    });
    it('renders', function () {
      getByTestId('test-button');
    });
    it('does not call the click handler when clicked', function () {
      fireEvent.click(getByTestId('test-button'));
      assert.strictEqual(clickSpy.callCount, 0);
    });
  });
});
