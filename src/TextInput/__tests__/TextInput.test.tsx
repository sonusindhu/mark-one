import React from 'react';
import { render, fireEvent, cleanup } from 'test-utils';
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
        onChange={changeSpy}
      />
    );
  });
  afterEach(function () {
    changeSpy.resetHistory();
    cleanup();
  });
  it('renders', function () {
    const inputElement = document.getElementById('semester') as HTMLInputElement;
    strictEqual(!!inputElement, true);
  });
  it('calls the change handler when changed', function () {
    fireEvent.change(document.getElementsByName('semester')[0], {
      target: {
        value: 'Fall',
      },
    });
    strictEqual(changeSpy.callCount, 1);
  });
  it('renders the correct default value', function () {
    const inputField = document.getElementsByName('semester')[0] as HTMLInputElement;
    const defaultValue = inputField.value;
    strictEqual(defaultValue, 'Spring');
  });
});
