import React, { useRef } from 'react';
import assert, {
  strictEqual,
} from 'assert';
import {
  render,
  fireEvent,
  BoundFunction,
  GetByText,
  wait,
} from 'test-utils';
import {
  spy,
  SinonSpy,
} from 'sinon';
import { VARIANT } from '../../Theme';
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
  context('when forwardRef prop is present', function () {
    beforeEach(function () {
      const ButtonRefExample = () => {
        const ref = useRef<HTMLInputElement>(null);
        const onButtonClick = () => {
          setTimeout(() => {
            if (ref.current) {
              ref.current.focus();
            }
          });
        };
        return (
          <>
            <Button
              onClick={onButtonClick}
              variant={VARIANT.PRIMARY}
            >
              Focus the Other Button
            </Button>
            <Button
              onClick={(): void => {}}
              variant={VARIANT.DANGER}
              tabIndex={0}
              forwardRef={ref}
            >
              Danger Button
            </Button>
          </>
        );
      };
      ({ getByText } = render(
        <ButtonRefExample />
      ));
    });
    it('can be used to shift the focus to the button', async function () {
      const initialButton = getByText('Focus the Other Button');
      initialButton.click();
      const dangerButton = getByText('Danger Button');
      await wait(() => document.activeElement === dangerButton);
      strictEqual(document.activeElement as HTMLElement, dangerButton);
    });
  });
});
