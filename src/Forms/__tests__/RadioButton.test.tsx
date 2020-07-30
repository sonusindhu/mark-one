import {
  SinonSpy,
  spy,
} from 'sinon';
import {
  BoundFunction,
  GetByText,
  QueryByText,
  render,
} from 'test-utils';
import React, { useRef } from 'react';
import { strictEqual } from 'assert';
import RadioButton from 'Forms/RadioButton';
import userEvent from '@testing-library/user-event';
import { Button } from 'Buttons';
import { VARIANT } from 'Theme';

describe('Radio Button', function () {
  let getByText: BoundFunction<GetByText>;
  let queryByText: BoundFunction<QueryByText>;
  let changeSpy: SinonSpy;
  context('when disabled prop is false', function () {
    const radioButtonId = 'testRadio';
    beforeEach(function () {
      changeSpy = spy();
      render(
        <>
          <RadioButton
            id={radioButtonId}
            label="Bar"
            value="bar"
            name="test"
            onChange={changeSpy}
          />
        </>
      );
    });
    it('renders', function () {
      const radioButton = document.getElementById(radioButtonId);
      strictEqual(!!radioButton, true);
    });
    it('calls the change handler when clicked', function () {
      userEvent.click(document.getElementById(radioButtonId));
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const radioButton = document
        .getElementById(radioButtonId) as HTMLInputElement;
      strictEqual(radioButton.checked, false);
    });
  });
  context('when disabled prop is true', function () {
    const radioButtonId = 'testRadio';
    beforeEach(function () {
      changeSpy = spy();
      render(
        <>
          <RadioButton
            id={radioButtonId}
            label="One"
            value="one"
            name="disabledPropTest"
            disabled
            onChange={changeSpy}
          />
        </>
      );
    });
    it('renders', function () {
      const radioButton = document.getElementById(radioButtonId);
      strictEqual(!!radioButton, true);
    });
    it('does not call the change handler when clicked', function () {
      userEvent.click(document.getElementById(radioButtonId));
      strictEqual(changeSpy.callCount, 0);
    });
    it('renders the correct checked value', function () {
      const radioButton = document
        .getElementById(radioButtonId) as HTMLInputElement;
      strictEqual(radioButton.checked, false);
    });
  });
  context('when isRequired prop is false', function () {
    const radioButtonId = 'testRadio';
    beforeEach(function () {
      changeSpy = spy();
      ({ queryByText } = render(
        <>
          <RadioButton
            id={radioButtonId}
            label="Bar"
            value="bar"
            name="bar"
            onChange={changeSpy}
          />
        </>
      ));
    });
    it('renders', function () {
      const radioButton = document
        .getElementById(radioButtonId);
      strictEqual(!!radioButton, true);
    });
    it('calls the change handler when clicked', function () {
      userEvent.click(document.getElementById(radioButtonId));
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const radioButton = document
        .getElementById(radioButtonId) as HTMLInputElement;
      strictEqual(radioButton.checked, false);
    });
    it('does not render the asterisk (*), which denotes the input is required', function () {
      strictEqual(queryByText('*', { exact: false }), null);
    });
  });
  context('when isRequired prop is true', function () {
    const radioButtonId = 'testRadio';
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <>
          <RadioButton
            id={radioButtonId}
            label="Baz"
            value="baz"
            name="baz"
            onChange={changeSpy}
            isRequired
          />
        </>
      ));
    });
    it('renders', function () {
      const radioButton = document.getElementById(radioButtonId);
      strictEqual(!!radioButton, true);
    });
    it('calls the change handler when clicked', function () {
      userEvent.click(document.getElementById(radioButtonId));
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const radioButton = document
        .getElementById(radioButtonId) as HTMLInputElement;
      strictEqual(radioButton.checked, false);
    });
    it('renders the asterisk (*), which denotes the input is required', function () {
      getByText('*');
    });
  });
  context('when forwardRef prop is present', function () {
    const radioButtonId = 'refTest';
    beforeEach(function () {
      changeSpy = spy();
      const RefExample = () => {
        const ref = useRef<HTMLInputElement>(null);
        const onButtonClick = () => {
          if (ref.current) {
            ref.current.focus();
          }
        };
        return (
          <>
            <Button
              id="testButton"
              onClick={onButtonClick}
              variant={VARIANT.INFO}
            >
              Focus the input
            </Button>
            <RadioButton
              id={radioButtonId}
              label="refTest"
              value="refTest"
              name="refTest"
              onChange={changeSpy}
              forwardRef={ref}
            />
          </>
        );
      };
      ({ getByText } = render(
        <RefExample />
      ));
    });
    it('renders', function () {
      const radioButton = document.getElementById(radioButtonId);
      strictEqual(!!radioButton, true);
    });
    it('calls the change handler when clicked', function () {
      userEvent.click(document.getElementById(radioButtonId));
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const radioButton = document
        .getElementById(radioButtonId) as HTMLInputElement;
      strictEqual(radioButton.checked, false);
    });
    it('can be used to shift the focus to the radio button on button click', function () {
      const testButton = document.getElementById('testButton') as HTMLButtonElement;
      testButton.click();
      strictEqual(document.activeElement.id, radioButtonId);
    });
  });
});
