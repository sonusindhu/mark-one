import React from 'react';
import { render, fireEvent, getByRole } from 'test-utils';
import { spy } from 'sinon';
import { strictEqual } from 'assert';
import TextInput from '../TextInput';

describe('Text input', function () {
  let changeSpy;
  beforeEach(function () {
    changeSpy = spy();
    render(
      <TextInput
        id="semester"
        name="semester"
        value="Spring"
        errorMessage="Error: Please enter a valid ID"
        label="semester"
        onChange={changeSpy}
      />
    );
  });
  // getByText method does not work with text fields, so we are using the below
  // as an alternative way to test that the component renders
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
  it('renders the error message', function () {
    const inputField = document.getElementById('semester') as HTMLInputElement;
    const errorMessage = getByRole(inputField.parentNode as HTMLElement, 'alert');
    strictEqual(errorMessage.textContent.trim(), 'Error: Please enter a valid ID');
  });
});
