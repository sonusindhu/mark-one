import React, { useRef } from 'react';
import {
  render,
  fireEvent,
  RenderResult,
} from 'test-utils';
import { spy, SinonSpy } from 'sinon';
import { strictEqual } from 'assert';
import { Button } from 'Buttons';
import { VARIANT } from 'Theme';
import userEvent from '@testing-library/user-event';
import MultiLineTextInput from '../MultiLineTextInput';

describe('Multi-Line Text Input', function () {
  let inputId: string;
  let multiLineTextInput: RenderResult;
  let changeSpy: SinonSpy;
  let testString: string;
  beforeEach(function () {
    changeSpy = spy();
    testString = 'hello world';
  });
  describe('default behaviour', function () {
    beforeEach(function () {
      inputId = 'regular-multi-line-text-input';
      multiLineTextInput = render(
        <MultiLineTextInput
          id={inputId}
          placeholder="Type your text here"
          value=""
          name="course-notes"
          label="Course Notes"
          onChange={changeSpy}
        />
      );
    });
    it('is empty value by default', function () {
      strictEqual(
        multiLineTextInput.getByRole('textbox').textContent,
        ''
      );
    });
    it('renders any provided value', function () {
      return render(
        <MultiLineTextInput
          id={inputId}
          placeholder="Type your text here"
          name="course-notes"
          label="Course Notes"
          onChange={() => {}}
          value={testString}
        />
      ).getByText(testString);
    });
    it('calls the provided onChange handler when the value is updated', function () {
      fireEvent.change(multiLineTextInput.getByRole('textbox'), {
        target: {
          value: testString,
        },
      });
      strictEqual(changeSpy.callCount, 1);
    });
    it('has no validation error visible', function () {
      strictEqual(multiLineTextInput.queryByText('error'), null);
    });
    it('has no aria-invalid attribute', function () {
      strictEqual(
        multiLineTextInput.getByRole('textbox').hasAttribute('aria-invalid'),
        false
      );
    });
  });
  describe('errorMessage', function () {
    beforeEach(function () {
      inputId = 'multi-line-text-input-with-error-message';
      changeSpy = spy();
      multiLineTextInput = render(
        <MultiLineTextInput
          id={inputId}
          placeholder="Type your text here"
          name="course-notes"
          label="Course Notes"
          onChange={changeSpy}
          value={testString}
          errorMessage="This is an error message"
        />
      );
    });
    it('sets aria error attributes attribute on the textarea', function () {
      strictEqual(
        multiLineTextInput.getByText(testString).hasAttribute('aria-invalid'),
        true
      );
      strictEqual(
        multiLineTextInput.getByText(testString)
          .getAttribute('aria-errormessage'),
        `${inputId}-error`
      );
    });
    it('displays with the textarea', function () {
      return multiLineTextInput.getByText('error message', { exact: false });
    });
  });
  describe('isRequired', function () {
    let required: RenderResult;
    beforeEach(function () {
      changeSpy = spy();
      inputId = 'required-multi-line-text-input';
      required = render(
        <MultiLineTextInput
          id={inputId}
          placeholder="Type your text here"
          value=""
          name="course-notes"
          label="Course Notes"
          onChange={changeSpy}
          isRequired
        />
      );
    });
    it('defaults to false', function () {
      inputId = 'not-required-multi-line-text-input';
      const component = render(
        <MultiLineTextInput
          id={inputId}
          placeholder="Type your text here"
          name="course-notes"
          label="Course Notes"
          onChange={changeSpy}
          value="some text"
        />
      );

      const textArea = component.queryByText('some text', { exact: false });
      strictEqual(textArea.hasAttribute('required'), false);
    });
    it('marks the field as required with an asterisk (*)', function () {
      return required.getByText('*', { exact: false });
    });
    it('makes the text area required', function () {
      strictEqual(
        required.getByRole('textbox').hasAttribute('required'),
        true
      );
      strictEqual(
        required.getByRole('textbox').hasAttribute('aria-required'),
        true
      );
    });
  });
  describe('label', function () {
    beforeEach(function () {
      changeSpy = spy();
      inputId = 'multi-line-text-input-with-visible-label';
    });
    it('contains the supplied label text', function () {
      return render(
        <MultiLineTextInput
          name="course-notes"
          placeholder="Type your text here"
          value=""
          id={inputId}
          onChange={changeSpy}
          label="label text"
        />
      ).getByLabelText('label text');
    });
  });
  describe('isDisabled', function () {
    it('prevents the onChange handler from being called', async function () {
      inputId = 'is-disabled-multi-line-input';
      changeSpy = spy();
      const { getByLabelText } = render(
        <MultiLineTextInput
          id={inputId}
          placeholder="Type your text here"
          value=""
          name="course-notes"
          onChange={changeSpy}
          label="label text"
          isDisabled
        />
      );

      await userEvent.type(getByLabelText('label text'), 'hello world');
      strictEqual(changeSpy.callCount, 0);
    });
    it('disables the textArea', function () {
      multiLineTextInput = render(
        <MultiLineTextInput
          id={inputId}
          placeholder="Type your text here"
          name="course-notes"
          label="Course Notes"
          onChange={() => {}}
          value="disabled element"
          isDisabled
        />
      );
      const textArea = multiLineTextInput.getByText('disabled element');
      strictEqual(textArea.hasAttribute('disabled'), true);
      strictEqual(textArea.hasAttribute('aria-disabled'), true);
    });
  });
  describe('forwardRef', function () {
    it('shifts the focus to another element', function () {
      inputId = 'focused-multi-line-text-box';
      const RefExample = () => {
        const ref = useRef<HTMLTextAreaElement>(null);
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
            <MultiLineTextInput
              id={inputId}
              placeholder="Type your text here"
              value=""
              name="course-notes"
              label="Course Notes"
              onChange={() => {}}
              forwardRef={ref}
            />
          </>
        );
      };

      const snippet = render(<RefExample />);
      fireEvent.click(snippet.getByText('Focus the input'));

      strictEqual(document.activeElement.id, inputId);
    });
  });
});
