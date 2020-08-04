import {
  SinonSpy,
  spy,
} from 'sinon';
import {
  BoundFunction,
  GetByText,
  QueryByText,
  render,
  fireEvent,
} from 'test-utils';
import React, { useRef } from 'react';
import Checkbox from 'Forms/Checkbox';
import { strictEqual } from 'assert';
import userEvent from '@testing-library/user-event';
import { POSITION } from 'Forms/Label';
import { Button } from 'Buttons';
import { VARIANT } from 'Theme';

describe('Checkbox', function () {
  let getByText: BoundFunction<GetByText>;
  let queryByText: BoundFunction<QueryByText>;
  let changeSpy: SinonSpy;
  context('when errorMessage prop is present', function () {
    const checkboxId = 'testCheckbox';
    const errorMessage = 'Please select this checkbox before proceeding.';
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <Checkbox
          id={checkboxId}
          checked={false}
          label="I agree to the terms and conditions."
          onChange={changeSpy}
          errorMessage={errorMessage}
          isRequired
        />
      ));
    });
    it('renders', function () {
      const checkboxElement = document
        .getElementById(checkboxId) as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the change handler when clicked', function () {
      fireEvent.click(document.getElementById(checkboxId));
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const checkboxElement = document
        .getElementById(checkboxId) as HTMLInputElement;
      strictEqual(checkboxElement.checked, false);
    });
    it('renders the error message', function () {
      getByText(errorMessage, { exact: false });
    });
  });
  context('when errorMessage prop is not present', function () {
    const checkboxId = 'testCheckbox';
    const errorMessage = 'Please select this checkbox before proceeding.';
    beforeEach(function () {
      changeSpy = spy();
      ({ queryByText } = render(
        <Checkbox
          id={checkboxId}
          checked={false}
          label="I agree to the terms and conditions."
          onChange={changeSpy}
          isRequired
        />
      ));
    });
    it('renders', function () {
      const checkboxElement = document
        .getElementById(checkboxId) as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(document.getElementById(checkboxId));
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const checkboxElement = document
        .getElementById(checkboxId) as HTMLInputElement;
      strictEqual(checkboxElement.checked, false);
    });
    it('does not render the error message', function () {
      strictEqual(queryByText(errorMessage, { exact: false }), null);
    });
  });
  context('when isRequired prop is present', function () {
    const checkboxId = 'testCheckbox';
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <Checkbox
          id={checkboxId}
          checked={false}
          label="I agree to the terms and conditions."
          onChange={changeSpy}
          isRequired
        />
      ));
    });
    it('renders', function () {
      const checkboxElement = document
        .getElementById(checkboxId) as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(document.getElementById(checkboxId));
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const checkboxElement = document
        .getElementById(checkboxId) as HTMLInputElement;
      strictEqual(checkboxElement.checked, false);
    });
    it('renders the asterisk (*) denoting that the field is required', function () {
      getByText('*');
    });
  });
  context('when isRequired prop is not present', function () {
    const checkboxId = 'testCheckbox';
    beforeEach(function () {
      changeSpy = spy();
      ({ queryByText } = render(
        <Checkbox
          id={checkboxId}
          checked={false}
          label="I agree to the terms and conditions."
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const checkboxElement = document
        .getElementById(checkboxId) as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(document.getElementById(checkboxId));
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const checkboxElement = document
        .getElementById(checkboxId) as HTMLInputElement;
      strictEqual(checkboxElement.checked, false);
    });
    it('does not render the asterisk (*), which denotes that the field is required', function () {
      strictEqual(queryByText('*', { exact: false }), null);
    });
  });
  context('when disabled prop is true', function () {
    const checkboxId = 'testCheckbox';
    beforeEach(function () {
      changeSpy = spy();
      render(
        <Checkbox
          id={checkboxId}
          checked
          label="I agree to the terms and conditions."
          onChange={changeSpy}
          disabled
        />
      );
    });
    it('renders', function () {
      const checkboxElement = document
        .getElementById(checkboxId) as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('does not call the change handler when clicked', function () {
      userEvent.click(document.getElementById(checkboxId));
      strictEqual(changeSpy.callCount, 0);
    });
    it('renders the correct checked value', function () {
      const checkboxElement = document
        .getElementById(checkboxId) as HTMLInputElement;
      strictEqual(checkboxElement.checked, true);
    });
  });
  context('when disabled prop is false', function () {
    const checkboxId = 'testCheckbox';
    beforeEach(function () {
      changeSpy = spy();
      render(
        <Checkbox
          id={checkboxId}
          checked
          label="I agree to the terms and conditions."
          onChange={changeSpy}
        />
      );
    });
    it('renders', function () {
      const checkboxElement = document
        .getElementById(checkboxId) as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the click handler when clicked', function () {
      userEvent.click(document.getElementById(checkboxId));
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const checkboxElement = document
        .getElementById(checkboxId) as HTMLInputElement;
      strictEqual(checkboxElement.checked, true);
    });
  });
  context('when labelPosition prop is equal to POSITION.RIGHT', function () {
    const checkboxId = 'testCheckbox';
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <Checkbox
          id={checkboxId}
          checked
          label="Test Label"
          labelPosition={POSITION.RIGHT}
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const checkboxElement = document
        .getElementById(checkboxId) as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(document.getElementById(checkboxId));
      strictEqual(changeSpy.callCount, 1);
    });
    it('positions the label to the right of the checkbox', function () {
      const style = window.getComputedStyle(getByText('Test Label').parentNode as HTMLElement);
      strictEqual(style['grid-template-areas'], '"i l l" ". e e"');
    });
  });
  context('when labelPosition prop is equal to POSITION.LEFT', function () {
    const checkboxId = 'testCheckbox';
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <Checkbox
          id={checkboxId}
          checked
          label="Test Label"
          labelPosition={POSITION.LEFT}
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const checkboxElement = document
        .getElementById(checkboxId) as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(document.getElementById(checkboxId));
      strictEqual(changeSpy.callCount, 1);
    });
    it('positions the label to the right of the checkbox', function () {
      const style = window.getComputedStyle(getByText('Test Label').parentNode as HTMLElement);
      strictEqual(style['grid-template-areas'], '"l i i" ". e e"');
    });
  });
  context('when labelPosition prop is equal to POSITION.TOP', function () {
    const checkboxId = 'testCheckbox';
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <Checkbox
          id={checkboxId}
          checked
          label="Test Label"
          labelPosition={POSITION.TOP}
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const checkboxElement = document
        .getElementById(checkboxId) as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(document.getElementById(checkboxId));
      strictEqual(changeSpy.callCount, 1);
    });
    it('positions the label to the right of the checkbox', function () {
      const style = window.getComputedStyle(getByText('Test Label').parentNode as HTMLElement);
      strictEqual(style['grid-template-areas'], '"l l l" "i i i" "e e e"');
    });
  });
  context('when forwardRef prop is present', function () {
    const checkboxId = 'refTest';
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
            <Checkbox
              id="refTest"
              label="refTest"
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
      const checkboxElement = document
        .getElementById(checkboxId) as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(document.getElementById(checkboxId));
      strictEqual(changeSpy.callCount, 1);
    });
    it('can be used to shift the focus to the radio button on button click', function () {
      const testButton = document.getElementById('testButton') as HTMLButtonElement;
      testButton.click();
      strictEqual(document.activeElement.id, checkboxId);
    });
  });
});
