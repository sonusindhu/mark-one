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
import React from 'react';
import Checkbox from 'Forms/Checkbox';
import { strictEqual } from 'assert';
import userEvent from '@testing-library/user-event';
import { POSITION } from 'Forms/Label';

describe('Checkbox', function () {
  let getByText: BoundFunction<GetByText>;
  let queryByText: BoundFunction<QueryByText>;
  let clickSpy: SinonSpy;
  context('when errorMessage prop is present', function () {
    beforeEach(function () {
      clickSpy = spy();
      ({ getByText } = render(
        <Checkbox
          id="testCheckbox"
          checked={false}
          label="I agree to the terms and conditions."
          onChange={clickSpy}
          errorMessage="Please select this checkbox before proceeding."
          isRequired
        />
      ));
    });
    it('renders', function () {
      const checkboxElement = document.getElementById('testCheckbox') as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(document.getElementById('testCheckbox'));
      strictEqual(clickSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const checkboxElement = document.getElementById('testCheckbox') as HTMLInputElement;
      strictEqual(checkboxElement.checked, false);
    });
    it('renders the error message', function () {
      getByText('Please select this checkbox before proceeding.', { exact: false });
    });
  });
  context('when errorMessage prop is not present', function () {
    beforeEach(function () {
      clickSpy = spy();
      ({ queryByText } = render(
        <Checkbox
          id="testCheckbox"
          checked={false}
          label="I agree to the terms and conditions."
          onChange={clickSpy}
          isRequired
        />
      ));
    });
    it('renders', function () {
      const checkboxElement = document.getElementById('testCheckbox') as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(document.getElementById('testCheckbox'));
      strictEqual(clickSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const checkboxElement = document.getElementById('testCheckbox') as HTMLInputElement;
      strictEqual(checkboxElement.checked, false);
    });
    it('does not render the error message', function () {
      strictEqual(queryByText('Please select this checkbox before proceeding.', { exact: false }), null);
    });
  });
  context('when isRequired prop is present', function () {
    beforeEach(function () {
      clickSpy = spy();
      ({ getByText } = render(
        <Checkbox
          id="testCheckbox"
          checked={false}
          label="I agree to the terms and conditions."
          onChange={clickSpy}
          isRequired
        />
      ));
    });
    it('renders', function () {
      const checkboxElement = document.getElementById('testCheckbox') as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(document.getElementById('testCheckbox'));
      strictEqual(clickSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const checkboxElement = document.getElementById('testCheckbox') as HTMLInputElement;
      strictEqual(checkboxElement.checked, false);
    });
    it('renders the asterisk (*) denoting that the field is required', function () {
      getByText('*');
    });
  });
  context('when isRequired prop is not present', function () {
    beforeEach(function () {
      clickSpy = spy();
      ({ queryByText } = render(
        <Checkbox
          id="testCheckbox"
          checked={false}
          label="I agree to the terms and conditions."
          onChange={clickSpy}
        />
      ));
    });
    it('renders', function () {
      const checkboxElement = document.getElementById('testCheckbox') as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(document.getElementById('testCheckbox'));
      strictEqual(clickSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const checkboxElement = document.getElementById('testCheckbox') as HTMLInputElement;
      strictEqual(checkboxElement.checked, false);
    });
    it('does not render the asterisk (*), which denotes that the field is required', function () {
      strictEqual(queryByText('*', { exact: false }), null);
    });
  });
  context('when disabled prop is true', function () {
    beforeEach(function () {
      clickSpy = spy();
      render(
        <Checkbox
          id="testCheckbox"
          checked
          label="I agree to the terms and conditions."
          onChange={clickSpy}
          disabled
        />
      );
    });
    it('renders', function () {
      const checkboxElement = document.getElementById('testCheckbox') as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('does not call the change handler when clicked', function () {
      userEvent.click(document.getElementById('testCheckbox'));
      strictEqual(clickSpy.callCount, 0);
    });
    it('renders the correct checked value', function () {
      const checkboxElement = document.getElementById('testCheckbox') as HTMLInputElement;
      strictEqual(checkboxElement.checked, true);
    });
  });
  context('when disabled prop is false', function () {
    beforeEach(function () {
      clickSpy = spy();
      render(
        <Checkbox
          id="testCheckbox"
          checked
          label="I agree to the terms and conditions."
          onChange={clickSpy}
        />
      );
    });
    it('renders', function () {
      const checkboxElement = document.getElementById('testCheckbox') as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the click handler when clicked', function () {
      userEvent.click(document.getElementById('testCheckbox'));
      strictEqual(clickSpy.callCount, 1);
    });
    it('renders the correct checked value', function () {
      const checkboxElement = document.getElementById('testCheckbox') as HTMLInputElement;
      strictEqual(checkboxElement.checked, true);
    });
  });
  context('when labelPosition prop is equal to POSITION.RIGHT', function () {
    beforeEach(function () {
      clickSpy = spy();
      ({ getByText } = render(
        <Checkbox
          id="testCheckbox"
          checked
          label="Test Label"
          labelPosition={POSITION.RIGHT}
          onChange={clickSpy}
        />
      ));
    });
    it('renders', function () {
      const checkboxElement = document.getElementById('testCheckbox') as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(document.getElementById('testCheckbox'));
      strictEqual(clickSpy.callCount, 1);
    });
    it('positions the label to the right of the checkbox', function () {
      const style = window.getComputedStyle(getByText('Test Label').parentNode as HTMLElement);
      strictEqual(style['grid-template-areas'], '"i l l" ". e e"');
    });
  });
  context('when labelPosition prop is equal to POSITION.LEFT', function () {
    beforeEach(function () {
      clickSpy = spy();
      ({ getByText } = render(
        <Checkbox
          id="testCheckbox"
          checked
          label="Test Label"
          labelPosition={POSITION.LEFT}
          onChange={clickSpy}
        />
      ));
    });
    it('renders', function () {
      const checkboxElement = document.getElementById('testCheckbox') as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(document.getElementById('testCheckbox'));
      strictEqual(clickSpy.callCount, 1);
    });
    it('positions the label to the right of the checkbox', function () {
      const style = window.getComputedStyle(getByText('Test Label').parentNode as HTMLElement);
      strictEqual(style['grid-template-areas'], '"l i i" ". e e"');
    });
  });
  context('when labelPosition prop is equal to POSITION.TOP', function () {
    beforeEach(function () {
      clickSpy = spy();
      ({ getByText } = render(
        <Checkbox
          id="testCheckbox"
          checked
          label="Test Label"
          labelPosition={POSITION.TOP}
          onChange={clickSpy}
        />
      ));
    });
    it('renders', function () {
      const checkboxElement = document.getElementById('testCheckbox') as HTMLInputElement;
      strictEqual(!!checkboxElement, true);
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(document.getElementById('testCheckbox'));
      strictEqual(clickSpy.callCount, 1);
    });
    it('positions the label to the right of the checkbox', function () {
      const style = window.getComputedStyle(getByText('Test Label').parentNode as HTMLElement);
      strictEqual(style['grid-template-areas'], '"l l l" "i i i" "e e e"');
    });
  });
});
