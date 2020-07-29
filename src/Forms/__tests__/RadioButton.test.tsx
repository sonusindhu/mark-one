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
import React from 'react';
import { strictEqual } from 'assert';
import RadioButton from 'Forms/RadioButton';
import userEvent from '@testing-library/user-event';

describe('Radio Button', function () {
  let getByText: BoundFunction<GetByText>;
  let queryByText: BoundFunction<QueryByText>;
  let changeSpy: SinonSpy;
  context('when disabled prop is false', function () {
    beforeEach(function () {
      changeSpy = spy();
      render(
        <>
          <RadioButton
            id="foo"
            label="Foo"
            value="foo"
            name="test"
            checked
            onChange={changeSpy}
          />
          <RadioButton
            id="bar"
            label="Bar"
            value="bar"
            name="test"
            checked={false}
            onChange={changeSpy}
          />
        </>
      );
    });
    it('renders', function () {
      const radioButton = document.getElementById('foo');
      strictEqual(!!radioButton, true);
    });
    it('calls the change handler when clicked', function () {
      userEvent.click(document.getElementById('bar'));
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const radioButton = document.getElementById('foo') as HTMLInputElement;
      strictEqual(radioButton.checked, true);
    });
  });
  context('when disabled prop is true', function () {
    beforeEach(function () {
      changeSpy = spy();
      render(
        <>
          <RadioButton
            id="one"
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
      const radioButton = document.getElementById('one');
      strictEqual(!!radioButton, true);
    });
    it('does not call the change handler when clicked', function () {
      userEvent.click(document.getElementById('one'));
      strictEqual(changeSpy.callCount, 0);
    });
    it('renders the correct checked value', function () {
      const radioButton = document.getElementById('one') as HTMLInputElement;
      strictEqual(radioButton.checked, false);
    });
  });
  context('when isRequired prop is false', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ queryByText } = render(
        <>
          <RadioButton
            id="bar"
            label="Bar"
            value="bar"
            name="bar"
            onChange={changeSpy}
          />
        </>
      ));
    });
    it('renders', function () {
      const radioButton = document.getElementById('bar');
      strictEqual(!!radioButton, true);
    });
    it('calls the change handler when clicked', function () {
      userEvent.click(document.getElementById('bar'));
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const radioButton = document.getElementById('bar') as HTMLInputElement;
      strictEqual(radioButton.checked, false);
    });
    it('does not render the asterisk (*), which denotes the input is required', function () {
      strictEqual(queryByText('*', { exact: false }), null);
    });
  });
  context('when isRequired prop is true', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <>
          <RadioButton
            id="baz"
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
      const radioButton = document.getElementById('baz');
      strictEqual(!!radioButton, true);
    });
    it('calls the change handler when clicked', function () {
      userEvent.click(document.getElementById('baz'));
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const radioButton = document.getElementById('baz') as HTMLInputElement;
      strictEqual(radioButton.checked, false);
    });
    it('renders the asterisk (*), which denotes the input is required', function () {
      getByText('*');
    });
  });
});
