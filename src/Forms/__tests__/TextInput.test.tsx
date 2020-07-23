import React, { useRef } from 'react';
import {
  render,
  fireEvent,
  GetByRole,
  BoundFunction,
  GetByText,
  QueryByText,
} from 'test-utils';
import { spy, SinonSpy } from 'sinon';
import { strictEqual } from 'assert';
import userEvent from '@testing-library/user-event';
import { Button } from 'Buttons';
import { VARIANT } from 'Theme';
import TextInput from '../TextInput';

enum POSITION {
  TOP = 'top',
  LEFT = 'left',
}

describe('Text input', function () {
  let getByText: BoundFunction<GetByText>;
  let getByRole: BoundFunction<GetByRole>;
  let queryByText: BoundFunction<QueryByText>;
  let changeSpy: SinonSpy;
  context('when errorMessage prop is present', function () {
    const inputId = 'semester';
    beforeEach(function () {
      changeSpy = spy();
      ({ getByRole } = render(
        <TextInput
          id={inputId}
          name="semester"
          value="Spring"
          errorMessage="Error: Please enter a valid ID"
          label="semester"
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      getByRole('textbox');
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementById(inputId), {
        target: {
          value: 'Fall',
        },
      });
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct default value', function () {
      const inputField = document.getElementById(inputId) as HTMLInputElement;
      const defaultValue = inputField.value;
      strictEqual(defaultValue, 'Spring');
    });
    it('renders the error message', function () {
      const errorMessage = getByRole('alert');
      strictEqual(errorMessage.textContent.trim(), 'Error: Please enter a valid ID');
    });
    it('sets aria-invalid', function () {
      const input = getByRole('textbox');
      strictEqual(input.hasAttribute('aria-invalid'), true);
    });
    it(`sets the aria-errormessage value to ${inputId}-error`, function () {
      const input = getByRole('textbox');
      strictEqual(input.getAttribute('aria-errormessage'), `${inputId}-error`);
    });
    it(`Sets the id of the errorMessage to ${inputId}-error`, function () {
      const error = getByRole('alert');
      strictEqual(error.id, `${inputId}-error`);
    });
  });
  context('when errorMessage prop is not present', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ queryByText } = render(
        <TextInput
          id="semester"
          name="semester"
          value="Spring"
          label="semester"
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const inputElement = document.getElementById('semester') as HTMLInputElement;
      strictEqual(!!inputElement, true);
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementById('semester'), {
        target: {
          value: 'Fall',
        },
      });
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct default value', function () {
      const inputField = document.getElementById('semester') as HTMLInputElement;
      const defaultValue = inputField.value;
      strictEqual(defaultValue, 'Spring');
    });
    it('does not render the error message', function () {
      const errorField = queryByText('error');
      strictEqual(errorField, null);
    });
    it('does not set aria-invalid', function () {
      const input = getByRole('textbox');
      strictEqual(input.hasAttribute('aria-invalid'), false);
    });
  });
  context('when isRequired prop is present', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <TextInput
          id="semester"
          name="semester"
          value="Spring"
          label="semester"
          onChange={changeSpy}
          isRequired
        />
      ));
    });
    it('renders', function () {
      const inputElement = document.getElementById('semester') as HTMLInputElement;
      strictEqual(!!inputElement, true);
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementById('semester'), {
        target: {
          value: 'Fall',
        },
      });
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct default value', function () {
      const inputField = document.getElementById('semester') as HTMLInputElement;
      const defaultValue = inputField.value;
      strictEqual(defaultValue, 'Spring');
    });
    it('renders the asterisk (*) denoting that the field is required', function () {
      getByText('*');
    });
  });
  context('when isRequired prop is not present', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ queryByText } = render(
        <TextInput
          id="semester"
          name="semester"
          value="Spring"
          label="semester"
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const inputElement = document.getElementById('semester') as HTMLInputElement;
      strictEqual(!!inputElement, true);
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementById('semester'), {
        target: {
          value: 'Fall',
        },
      });
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct default value', function () {
      const inputField = document.getElementById('semester') as HTMLInputElement;
      const defaultValue = inputField.value;
      strictEqual(defaultValue, 'Spring');
    });
    it('does not render the asterisk (*), which denotes that the field is required', function () {
      strictEqual(queryByText('*', { exact: false }), null);
    });
  });
  context('when isLabelVisible prop is true', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <TextInput
          id="semester"
          name="semester"
          value="Spring"
          label="visibleLabel"
          isLabelVisible
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const inputElement = document.getElementById('semester') as HTMLInputElement;
      strictEqual(!!inputElement, true);
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementById('semester'), {
        target: {
          value: 'Fall',
        },
      });
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct default value', function () {
      const { value } = document.getElementById('semester') as HTMLInputElement;
      strictEqual(value, 'Spring');
    });
    it('has a visible label', function () {
      getByText('visibleLabel');
    });
  });
  context('when isLabelVisible prop is false', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <TextInput
          id="semester"
          name="semester"
          value="Spring"
          label="invisibleLabel"
          isLabelVisible={false}
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const inputElement = document.getElementById('semester') as HTMLInputElement;
      strictEqual(!!inputElement, true);
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementById('semester'), {
        target: {
          value: 'Fall',
        },
      });
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct default value', function () {
      const { value } = document.getElementById('semester') as HTMLInputElement;
      strictEqual(value, 'Spring');
    });
    it('the label value is hidden in the UI', function () {
      const style = window.getComputedStyle(getByText('invisibleLabel'));
      strictEqual(style.display, 'none');
    });
  });
  context('when disabled prop is true', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <TextInput
          id="semester"
          name="semester"
          value="Fall"
          label="visibleLabel"
          disabled
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const inputElement = document.getElementById('semester') as HTMLInputElement;
      strictEqual(!!inputElement, true);
    });
    it('renders the correct default value', function () {
      const { value } = document.getElementById('semester') as HTMLInputElement;
      strictEqual(value, 'Fall');
    });
    it('does not call the change handler when user tries to change the input', async function () {
      await userEvent.type(document.getElementById('semester'), 'Spring');
      strictEqual(changeSpy.callCount, 0);
    });
  });
  context('when labelPosition prop is equal to POSITION.TOP', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <TextInput
          id="semester"
          name="semester"
          value="Fall"
          label="visibleLabel"
          labelPosition={POSITION.TOP}
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const inputElement = document.getElementById('semester') as HTMLInputElement;
      strictEqual(!!inputElement, true);
    });
    it('renders the correct default value', function () {
      const { value } = document.getElementById('semester') as HTMLInputElement;
      strictEqual(value, 'Fall');
    });
    it('positions the label above the text input field', function () {
      const style = window.getComputedStyle(getByText('visibleLabel').parentNode as HTMLElement);
      strictEqual(style['grid-template-areas'], '"l l l" "i i i" "e e e"');
    });
  });
  context('when labelPosition prop is equal to POSITION.LEFT', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <TextInput
          id="semester"
          name="semester"
          value="Fall"
          label="visibleLabel"
          labelPosition={POSITION.LEFT}
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const inputElement = document.getElementById('semester') as HTMLInputElement;
      strictEqual(!!inputElement, true);
    });
    it('renders the correct default value', function () {
      const { value } = document.getElementById('semester') as HTMLInputElement;
      strictEqual(value, 'Fall');
    });
    it('positions the label to the left of the text input field', function () {
      const style = window.getComputedStyle(getByText('visibleLabel').parentNode as HTMLElement);
      strictEqual(style['grid-template-areas'], '"l i i" ". e e"');
    });
  });
  context('when forwardRef prop is present', function () {
    const textInputId = 'semester';
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
            <TextInput
              id={textInputId}
              name="semester"
              value="Fall"
              label="visibleLabel"
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
      const inputElement = document.getElementById('semester') as HTMLInputElement;
      strictEqual(!!inputElement, true);
    });
    it('renders the correct default value', function () {
      const { value } = document.getElementById('semester') as HTMLInputElement;
      strictEqual(value, 'Fall');
    });
    it('can be used to shift the focus to the text input field on button click', function () {
      const testButton = document.getElementById('testButton') as HTMLButtonElement;
      testButton.click();
      strictEqual(document.activeElement.id, textInputId);
    });
  });
});
