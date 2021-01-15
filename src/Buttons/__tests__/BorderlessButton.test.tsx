import React, { useRef } from 'react';
import {
  render,
  fireEvent,
  BoundFunction,
  GetByBoundAttribute,
  GetByText,
  GetByRole,
  wait,
} from 'test-utils';
import {
  spy,
  SinonSpy,
} from 'sinon';
import assert, { strictEqual } from 'assert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'Buttons';
import { VARIANT } from '../../Theme';
import BorderlessButton from '../BorderlessButton';

describe('Borderless Button', function () {
  let getByText: BoundFunction<GetByText>;
  let getByRole: BoundFunction<GetByRole>;
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
  context('when forwardRef prop is present', function () {
    beforeEach(function () {
      const ButtonRefExample = () => {
        const ref = useRef<HTMLInputElement>(null);
        const onButtonClick = () => {
          ref.current.focus();
        };
        return (
          <>
            <Button
              onClick={onButtonClick}
              variant={VARIANT.PRIMARY}
            >
              Focus the Borderless Button
            </Button>
            <BorderlessButton
              onClick={() => {}}
              variant={VARIANT.DANGER}
              forwardRef={ref}
              alt="Borderless Button"
            >
              <FontAwesomeIcon icon={faTrash} size="lg" />
            </BorderlessButton>
          </>
        );
      };
      ({ getByText, getByRole } = render(
        <ButtonRefExample />
      ));
    });
    it('can be used to shift the focus to the button', async function () {
      const initialButton = getByText('Focus the Borderless Button');
      initialButton.click();
      const borderlessButton = getByRole('button', { name: 'Borderless Button' });
      await wait(() => document.activeElement === borderlessButton);
      strictEqual(document.activeElement, borderlessButton);
    });
  });
});
