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
import Checkbox from 'Forms/Checkbox';
import { strictEqual } from 'assert';
import userEvent from '@testing-library/user-event';
import { POSITION } from 'Forms/InputLabel';
import { Button } from 'Buttons';
import { VARIANT } from 'Theme';

describe('Checkbox', function () {
  let getByText: BoundFunction<GetByText>;
  let queryByText: BoundFunction<QueryByText>;
  let changeSpy: SinonSpy;
  const checkboxId = 'testCheckbox';
  describe('errorMessage prop', function () {
    const errorMessage = 'Please select this checkbox before proceeding.';
    context('when errorMessage value is present', function () {
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
      it('renders the error message', function () {
        getByText(errorMessage, { exact: false });
      });
    });
    context('when errorMessage value is not present', function () {
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
      it('does not render the error message', function () {
        strictEqual(queryByText(errorMessage, { exact: false }), null);
      });
    });
  });
  describe('isRequired prop', function () {
    context('when isRequired value is present', function () {
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
      it('renders the asterisk (*) denoting that the field is required', function () {
        getByText('*');
      });
    });
    context('when isRequired prop is not present', function () {
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
      it('does not render the asterisk (*), which denotes that the field is required', function () {
        strictEqual(queryByText('*', { exact: false }), null);
      });
    });
  });
  describe('disabled prop', function () {
    context('when disabled is true', function () {
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
      it('does not call the change handler when clicked', function () {
        userEvent.click(document.getElementById(checkboxId));
        strictEqual(changeSpy.callCount, 0);
      });
    });
    context('when disabled is false', function () {
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
      it('calls the click handler when clicked', function () {
        userEvent.click(document.getElementById(checkboxId));
        strictEqual(changeSpy.callCount, 1);
      });
    });
  });
  describe('checked prop', function () {
    context('when checked is false', function () {
      beforeEach(function () {
        changeSpy = spy();
        render(
          <Checkbox
            id={checkboxId}
            label="I agree to the terms and conditions."
            onChange={changeSpy}
            disabled
          />
        );
      });
      it('renders an unchecked checkbox', function () {
        const checkboxElement = document
          .getElementById(checkboxId) as HTMLInputElement;
        strictEqual(checkboxElement.checked, false);
      });
    });
    context('when checked is true', function () {
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
      it('renders a checked checkbox', function () {
        const checkboxElement = document
          .getElementById(checkboxId) as HTMLInputElement;
        strictEqual(checkboxElement.checked, true);
      });
    });
  });
  describe('labelPosition prop', function () {
    context('when labelPosition prop is equal to POSITION.RIGHT', function () {
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
      it('positions the label to the right of the checkbox', function () {
        const style = window.getComputedStyle(getByText('Test Label').parentNode as HTMLElement);
        strictEqual(style['grid-template-areas'], '"i l l" ". e e"');
      });
    });
    context('when labelPosition prop is equal to POSITION.LEFT', function () {
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
      it('positions the label to the right of the checkbox', function () {
        const style = window.getComputedStyle(getByText('Test Label').parentNode as HTMLElement);
        strictEqual(style['grid-template-areas'], '"l i i" ". e e"');
      });
    });
    context('when labelPosition prop is equal to POSITION.TOP', function () {
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
      it('positions the label to the right of the checkbox', function () {
        const style = window.getComputedStyle(getByText('Test Label').parentNode as HTMLElement);
        strictEqual(style['grid-template-areas'], '"l l l" "i i i" "e e e"');
      });
    });
  });
  describe('forwardRef prop', function () {
    context('when forwardRef value is present', function () {
      const refCheckboxId = 'refTest';
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
      it('can be used to shift the focus to the radio button on button click', function () {
        const testButton = document.getElementById('testButton') as HTMLButtonElement;
        testButton.click();
        strictEqual(document.activeElement.id, refCheckboxId);
      });
    });
  });
});
